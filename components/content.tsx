import {TopNav} from "./top-nav";

export function Content({children}) {
  return <div id="app">
    <div className="flex h-screen bg-gray-200 font-roboto">
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav/>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  </div>;
}