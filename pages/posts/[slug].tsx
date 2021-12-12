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
import {Recipe} from "../../types/types";
import {GetStaticProps} from "next";

const Post: FunctionComponent<{ posts: Recipe[] }> = ({posts}) => {
  const post = posts[0]
  const morePosts = posts.slice(1)

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
              categories={post.categories}
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
  const data = await getPostAndMorePosts(params?.slug as string)

  return {
    props: {
      posts: data,
    },
  }
};


export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.map((node) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}