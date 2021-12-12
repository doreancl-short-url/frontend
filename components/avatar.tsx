import Image from 'next/image'
import {FunctionComponent} from "react";
import {Author} from "../types/types";

const Avatar: FunctionComponent<{ author: Author }> = ({author}) => {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : undefined

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={author.avatar.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
export default Avatar;