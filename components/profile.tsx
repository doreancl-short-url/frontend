export function Profile() {
  return <div className="relative">
    <button
      className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"><img
      className="object-cover w-full h-full"
      src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
      alt="Your avatar"/></button>
    <div className="fixed inset-0 z-10 w-full h-full" style={{display: "none"}}/>
    <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
         style={{display: "none"}}><a href="#"
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a><a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</a><a
      href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Log
      out</a></div>
  </div>;
}