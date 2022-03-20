import Date from "./date";
import {LinksTableTh} from "./links-table-th";
import Link from 'next/link'


export function LinksTable({links}) {
  return <div
    className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
    <table className="min-w-full">
      <thead>
      <tr>
        <LinksTableTh text={'name'}/>
        <LinksTableTh text={'Title'}/>
        <LinksTableTh text={'Status'}/>
        <LinksTableTh text={'Role'}/>
        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"/>
      </tr>
      </thead>
      <tbody className="bg-white">
      {links.map((link) => (
        <tr key={link.id}>
          <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
            <div className="flex items-center">
              <div className="ml-4">
                <div className="text-sm font-medium leading-5 text-gray-900">{link.title}</div>
                <div className="text-sm leading-5 text-gray-500">{link.link}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
            <div className="text-sm leading-5 text-gray-900">
              <Date dateString={link.created_at}/>
            </div>
            <div className="text-sm leading-5 text-gray-500">{link.long_url}</div>
          </td>
          <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap"><span
            className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
           {
             link.is_active == true
               ? "Paused"
               : "Active"
           }
          </span>
          </td>
          <td
            className="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">Owner
          </td>
          <td
            className="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
            <Link as={`/link/${link.id}`} href="/link/[slug]">
              <a className="text-indigo-600 hover:text-indigo-900">Edit</a>
            </Link>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>;
}