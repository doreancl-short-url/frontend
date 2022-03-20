if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}
import PostType from "../types/post";

const API_URL = "http://host.docker.internal:8080"

export const getOnePost = async (slug: any): Promise<PostType[] | { notFound: true, }> => {
  const res = await fetch(`${API_URL}/link/${slug}`)
  const data: any = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return data
}


export const getAllPosts = async (_no?: string[] | undefined): Promise<(PostType[] | any)[]> => {
  const res = await fetch(`${API_URL}/link/`)
  const dataArray: any[] = await res.json()

  if (!dataArray) {
    return [null, {notFound: true,}]
  }

  return [dataArray, null]
};

export const putLink = async (id, lynkPayload): Promise<(PostType[] | any)[]> => {
  const res = await fetch(`${API_URL}/link/${id}`, {
    body: lynkPayload,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
  })
  const updatedLink = await res.json()

  if (!updatedLink) {
    return [null, {notFound: true,}]
  }

  return [updatedLink, null]
};

export const postLink = async (lynkPayload): Promise<(PostType[] | any)[]> => {
  const res = await fetch(`${API_URL}/link/`, {
    body: lynkPayload,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  const newLink = await res.json()

  if (!newLink) {
    return [null, {notFound: true,}]
  }

  return [newLink, null]
};

export const getPostAndMorePosts = async (slug: string) => {
  const post = await getOnePost(slug)
  const [data, err] = await getAllPosts();
  const endData = data.slice(0, 2)
  return [post, endData];
}

export async function getAllPostsWithSlug() {
  const [data, err]: any[] = await getAllPosts();
  const newData = data.map((entity) => {
    return {id: entity.id};
  })
  return newData
}