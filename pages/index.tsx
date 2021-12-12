import Head from 'next/head'
import Layout from "../components/layout";
import Container from "../components/container";
import Intro from "../components/intro";
import {getAllPostsForHome} from "../lib/api";
import {GetStaticProps} from "next";
import HeroPost from "../components/hero-post";
import MoreStories from "../components/more-stories";
import {Recipe} from "../types/types"
import {FunctionComponent} from "react";

const Home: FunctionComponent<{ allCats: Recipe[] }> = ({allCats}) => {

  const heroPost = allCats[0]
  const morePosts = allCats.slice(1)

  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
        </Head>
        <Container>
          <Intro/>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost._id}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allCats: Recipe[] = await getAllPostsForHome()
  return {
    props: {allCats},
  }
};

export default Home
