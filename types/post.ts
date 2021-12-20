import Author from './author'
import {Category} from "./types";

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string,

  _id: string,
  categories: Category[],
  featuredImage: string,
}

export default PostType
