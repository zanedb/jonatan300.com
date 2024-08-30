import Nav from '@/components/nav'
import Contact from '@/components/contact'
import Gallery from '@/components/gallery'
import { newSpirit } from '@/lib/fonts'

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row md:pr-4">
      <div className="flex-none sm:w-[20em] md:w-[23em] md:pl-4 top-0 sm:h-screen sm:sticky overflow-x-hidden sm:overflow-y-auto no-scrollbar">
        <div className="space-y-4 p-4">
          <Nav />
          <h1 className={`text-2xl ${newSpirit.className} font-medium`}>
            hi, i’m ***REMOVED***.
          </h1>
          <p>
            i’m an artist based in sf, currently studying studio art at san
            ***REMOVED***.
          </p>
          <p>
            i’m available for commission. preferably spray painted murals,
            digital art (including artist/album covers), and digital
            illustration. contact me below if interested.
          </p>
          <Contact />
        </div>
      </div>
      <Gallery />
    </main>
  )
}
