import {getAllPosts} from '../lib/api'
import {Content} from "../components/content";
import {Dashboard} from "../components/dashboard";

const Index = ({allLinks}) => {
  return (
    <>
      <Content>
        <Dashboard links={allLinks}/>
      </Content>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  console.log({NEXT_PUBLIC_API_MOCKING: process.env.NEXT_PUBLIC_API_MOCKING})
  const [allLinks, err] = await getAllPosts([])
  return {
    props: {allLinks},
  }
}
