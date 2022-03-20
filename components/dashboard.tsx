import {SimpleCard} from "./simple-card";
import {LinksTable} from "./links-table";

export function Dashboard(props: { links: any }) {
  return <div>
    <h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>
    <div className="mt-4">
      <div className="flex flex-wrap -mx-6">
        <SimpleCard number={"8,300"} text={"Users"}/>
        <SimpleCard number={"200,521"} text={"Orders"}/>
        <SimpleCard number={"215,451"} text={"Available Products"}/>
      </div>
    </div>
    <div className="mt-8"/>
    <div className="flex flex-col mt-8">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <LinksTable links={props.links}/>
      </div>
    </div>
  </div>;
}