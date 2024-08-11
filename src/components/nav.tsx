import Link from 'next/link'
import { ThemeImage } from './theme-image'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center text-md py-4">
      <Link href="/">
        <ThemeImage
          srcLight="/nameplate.png"
          srcDark="/nameplate-dark.png"
          alt="nametag with swag"
          width={72}
          height={0}
        />
      </Link>
    </nav>
  )
}
