import Post from "./[slug]";

type Props = {
  label: string,
  name: string,
  value: any,
}

const LinkFormInput = ({label, name, value}: Props) => {
  return <div>
    <label className="text-gray-700" htmlFor="username">{label}</label>
    <input
      className="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
      type="text"
      id={name} name={name}
      defaultValue={value}/>
  </div>;
}
export default LinkFormInput
