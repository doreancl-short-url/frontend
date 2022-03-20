import Sidebar from "./sidebar";
import {Content} from "./content";

const AllWithoutFormat = () => {
  return (
    <>
      <div id="app">
        <div className="flex h-screen bg-gray-200 font-roboto">
          <Sidebar/>
          <Content/>
        </div>
      </div>
    </>
  )
}

export default AllWithoutFormat