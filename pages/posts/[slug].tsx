import Layout from "../../components/layout";
import Container from "../../components/container";
import Header from "../../components/header";
import Head from 'next/head'
import {getAllPostsWithSlug, getPostAndMorePosts} from "../../lib/api";
import PostHeader from "../../components/post-header";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import SectionSeparator from "../../components/section-separator";
import {FunctionComponent} from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import PostType from "../../types/post";

const Post: FunctionComponent<{
  params: any,
  post: PostType,
  morePosts: PostType[]
}> = ({params, post, morePosts}) => {
  if (undefined === post) {
    console.log('uuuuuundefined', params, post, morePosts)
    return <></>
  }

  return (
    <Layout>
      <Container>
        <Header/>
        <>
          <article>
            <Head>
              <title>{post.title} | Create Next App</title>
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content}/>
            <footer>
            </footer>
          </article>
          <SectionSeparator/>
          {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
        </>
      </Container>
    </Layout>
  )
};
export default Post

export const getStaticProps: GetStaticProps = async ({params}) => {
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
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.map((node: PostType) => `/posts/${node.slug}`) || [],
    fallback: false,
  }
};