import Link from 'next/link'
import Image from 'next/image'
import { newSpirit } from '@/app/fonts'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center text-md py-4">
      <Link href="/">
        <Image src="/nameplate.png" alt="***REMOVED***" width={72} height={0} />
      </Link>
      <ul className="">
        <li>
          <Link
            href="/contact"
            className={`font-medium ${newSpirit.className}`}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
