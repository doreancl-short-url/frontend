type Props = {
  posts: any[]
}

const UrlList = ({entities}: Props) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="text-gray-900 title-font text-sm font-medium">
              {entities.length}
            </div>
            <table>
              {entities.map((entity) => (
                <tr>
                  <td>{entity.created_at}</td>
                  <td>{entity.title}</td>
                  <td>{entity.link}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default UrlList