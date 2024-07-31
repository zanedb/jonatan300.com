import Image from 'next/image'
import images from '@/app/art.json'

export default function Gallery() {
  return (
    <section>
      <div className="grid p-4 py-4 sm:pl-0 md:px-4 gap-4 items-start grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {images.map(({ filename, alt }, index) => (
          <Image
            src={`/art/${filename}`}
            className="rounded-lg object-cover"
            width={400}
            height={400}
            alt={alt}
            key={index}
            priority={index < 3}
          />
        ))}
      </div>
    </section>
  )
}
