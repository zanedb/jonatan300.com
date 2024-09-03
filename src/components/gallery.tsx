'use client'

import { useState, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import images from '@/lib/art.json'

const Lightbox = dynamic(() => import('@/components/lightbox'))
const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128]

const slides = images.map(({ filename, width, height, alt }) => ({
  src: `/art/${filename}`,
  width,
  height,
  alt,
  srcSet: breakpoints.map((breakpoint) => ({
    src: `/art/${filename}`,
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}))

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<undefined | number>(undefined)

  return (
    <section className="py-4 px-4 md:px-0 md:py-6">
      {openIndex !== undefined && (
        <Lightbox
          open
          close={() => setOpenIndex(undefined)}
          slides={slides}
          index={openIndex}
          controller={{
            closeOnBackdropClick: true,
          }}
        />
      )}
      <div className="md:columns-2 xl:columns-3 3xl:columns-4 lg:gap-6 xl:gap-8 py-6">
        {images.map(({ filename, alt }, index) => (
          <GalleryImage
            filename={filename}
            alt={alt}
            index={index}
            key={index}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </section>
  )
}

const GalleryImage = ({
  filename,
  alt,
  index,
  setOpenIndex,
}: {
  filename: string
  alt: string
  index: number
  setOpenIndex: Dispatch<SetStateAction<number | undefined>>
}) => (
  <Image
    src={require(`@/public/art/${filename}`).default}
    className="rounded-lg h-auto w-full cursor-pointer hover:shadow-md transition-shadow ease-in-out mb-4 md:mb-6 3xl:mb-8"
    placeholder="blur"
    alt={alt}
    priority={index < 3}
    onClick={() => {
      setOpenIndex(index)
    }}
  />
)
