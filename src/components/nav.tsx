import Link from 'next/link'
import { ThemeImage } from './theme-image'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center text-md py-4">
      <Link href="/">
        <ThemeImage
          srcLight="/jonatan-light.png"
          srcDark="/jonatan-dark.png"
          alt={'“Jonatan” nametag'}
          width={144}
          height={108}
        />
      </Link>
    </nav>
  )
}
