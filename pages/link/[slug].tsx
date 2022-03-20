import {getAllPostsWithSlug, getPostAndMorePosts, putLink} from "../../lib/api";
import {GetStaticPaths, GetStaticProps} from "next";
import {Content} from "../../components/content";
import {LinkFormInput} from "./linkFormInput";

const Post = ({params, post, morePosts}) => {
  if (undefined === post) {
    console.log('uuuuuundefined', params, post, morePosts)
    return <>
    </>
  }

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      title: event.target.title.value,
      linke: event.target.linke.value,
      is_active: event.target.is_active.value,
      long_url: event.target.long_url.value,
      created_at: event.target.created_at.value,
    }

    const JSONdata = JSON.stringify(data)

    const [newLink, err] = await putLink(params?.slug, JSONdata)

    console.log(newLink)
  }

  return (
    <Content>
      <div className="mt-4">
        <div className="p-6 bg-white rounded-md shadow-md">
          <h2
            className="text-lg font-semibold text-gray-700 capitalize"> Account settings </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <LinkFormInput label={'Title'} name={'title'} value={post.title}/>
              <LinkFormInput label={'Link'} name={'linke'} value={post.link}/>
              <LinkFormInput label={'Is Active'} name={'is_active'} value={post.is_active}/>
              <LinkFormInput label={'Long Url'} name={'long_url'} value={post.long_url}/>
              <LinkFormInput label={'Created At'} name={'created_at'} value={post.created_at}/>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"> Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </Content>
  )
};
export default Post

export const getStaticProps: GetStaticProps = async ({params}) => {
  console.log('getStaticProps')
  const [data, moreData] = await getPostAndMorePosts(params?.slug as string)
  return {
    props: {
      params,
      post: data,
      morePosts: moreData,
    },
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('getStaticPaths')
  const allPosts = await getAllPostsWithSlug()
  const res = {
    paths: allPosts.map((node) => `/link/${node.id}`) || [],
    fallback: false,
  }
  return res
};