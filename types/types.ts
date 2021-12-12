export type Author = {
  firstName: string,
  lastName: string,
  name: string,
  avatar: {
    url: string
  },
}
export type Category = {
  name: string
}
export type Recipe = {
  _id: string,
  excerpt: string,
  date: string,
  author: Author,
  title: string,
  categories: Category[],
  content: string,
  featuredImage: string,
  slug: string,
}