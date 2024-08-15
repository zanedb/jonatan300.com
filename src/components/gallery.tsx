'use client'

import { useState } from 'react'
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
  const [open, setOpen] = useState<boolean>()
  const [index, setIndex] = useState<number>(0)

  return (
    <section>
      {open !== undefined && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={index}
          controller={{
            closeOnBackdropClick: true,
          }}
        />
      )}
      <div className="grid p-4 py-4 sm:pl-0 md:px-4 gap-4 items-start grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {images.map(({ filename, alt }, index) => (
          <Image
            src={`/art/${filename}`}
            className="rounded-lg object-cover cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out"
            width={400}
            height={400}
            alt={alt}
            key={index}
            priority={index < 3}
            onClick={() => {
              setIndex(index)
              setOpen(true)
            }}
          />
        ))}
      </div>
    </section>
  )
}
