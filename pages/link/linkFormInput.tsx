export function LinkFormInput({label, name, value}) {
  return <div>
    <label className="text-gray-700" htmlFor="username">{label}</label>
    <input
      className="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
      type="text"
      id={name} name={name}
      defaultValue={value}/>
  </div>;
}