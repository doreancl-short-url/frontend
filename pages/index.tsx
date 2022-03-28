import {getAllPosts, getAllStats} from '../lib/api'
import {Content} from "../components/content";
import {Dashboard} from "../components/dashboard";
import {LinkType, StatType} from "../types/types";

type Props = {
  allLinks: LinkType[],
  allStats: StatType[],
}

const Index = ({allLinks, allStats}: Props) => {
  return (
    <>
      <Content>
        <Dashboard links={allLinks} stats={allStats}/>
      </Content>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const [allLinks, err1] = await getAllPosts([])
  const [allStats, err2] = await getAllStats([])
  return {
    props: {allLinks, allStats},
  }
}
