import Gallery from '@/components/gallery'
import { newSpirit } from './fonts'

export default function Home() {
  return (
    <main className="p-8 pt-0 md:p-12 max-w-screen-lg w-full mx-auto">
      <h1 className={`text-xl pb-4 ${newSpirit.className} font-medium`}>
        hi, i'm ***REMOVED***.
      </h1>
      <p>
        i'm an artist based in sf, currently studying studio art at san
        ***REMOVED***.
      </p>
      <Gallery />
    </main>
  )
}
