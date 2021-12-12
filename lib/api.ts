import {Recipe} from "../types/types";

const API_URL = "http://localhost:3000"

export const getOnePost = async (slug: any): Promise<Recipe[] | { notFound: true, }> => {
  const res = await fetch(`${API_URL}/cats/${slug}`)
  const data: any = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    date: '2020-05-21T01:07:41',
    author: {
      firstName: "Juan",
      lastName: "Perez",
      name: 'juanito',
      avatar: {
        url: 'https://secure.gravatar.com/avatar/74b910687d528fef0dca15271e65d3da?s=96&d=mm&r=g'
      },
    },
    title: data.breed,
    categories: [{name: 'no categoria'}],
    content: 'too el chorizo',
    featuredImage: 'https://vercel.wpengine.com/wp-content/uploads/2020/05/cover5.jpg',
    slug: data._id,
    ...data
  }
}


export const getAllPostsForHome = async (): Promise<(Recipe[] | any)[]> => {
  const res = await fetch(`${API_URL}/cats`)
  const data: any[] = await res.json()
  if (!data) {
    return [null, {notFound: true,}]
  }
  const newData = data.map((cat) => {
    return {
      date: '2020-05-21T01:07:41',
      author: {
        firstName: "Juan",
        lastName: "Perez",
        name: 'juanito',
        avatar: {
          url: 'https://secure.gravatar.com/avatar/74b910687d528fef0dca15271e65d3da?s=96&d=mm&r=g'
        },
      },
      title: cat.breed,
      categories: [{name: 'no categoria'}],
      content: 'too el chorizo',
      featuredImage: 'https://vercel.wpengine.com/wp-content/uploads/2020/05/cover5.jpg',
      slug: cat._id,
      ...cat
    }
  })

  return [newData, null]
};

export const getPostAndMorePosts = async (slug: string) => {
  const post = await getOnePost(slug)
  const [data, err] = await getAllPostsForHome();
  return data.slice(0, 2).push(post);
}

export async function getAllPostsWithSlug() {
  const data: any[] = await getAllPostsForHome();
  const newData = data.map(cat => {
    return {slug: cat._id};
  })
  return newData
}