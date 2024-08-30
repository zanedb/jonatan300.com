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

  const chunk = (arr: any[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    )

  const SIZE = 3
  const columns = chunk(images, SIZE)

  return (
    <section>
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
      <div className="grid p-4 py-4 sm:pl-0 md:px-4 gap-4 items-start grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
        {columns.map((column, i) => (
          <div className="grid gap-4" key={i}>
            {column.map(({ filename, alt }, index) => (
              <GalleryImage
                filename={filename}
                alt={alt}
                index={index + i * SIZE}
                key={index}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
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
    className="rounded-lg object-cover h-auto w-full cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out"
    placeholder="blur"
    alt={alt}
    priority={index < 3}
    onClick={() => {
      setOpenIndex(index)
    }}
  />
)
