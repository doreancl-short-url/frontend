import Image from 'next/image'
import Link from "next/link";

export function Profile() {
  return <div className="relative">
    <button
      className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
      <Link href="/protected">
        <Image
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
          alt="Your avatar"
          width={296}
          height={296}
        />
      </Link>
    </button>
  </div>;
}