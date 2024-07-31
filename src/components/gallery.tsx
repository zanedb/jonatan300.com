import Image from 'next/image'
import { newSpirit } from '@/app/fonts'
import images from '@/app/art.json'

export default function Gallery() {
  return (
    <section>
      <h2 className={`text-lg pt-8 pb-2 ${newSpirit.className}`}>gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map(({ filename, alt }, index) => (
          <div key={index} className="relative h-96">
            <Image
              src={`/art/${filename}`}
              className="rounded-lg object-cover"
              fill
              alt={alt}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
