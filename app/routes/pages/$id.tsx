import { Link, LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { container } from 'tsyringe'
import { PageController, PageGetView } from '~/application/controller/PageController'


const controller = container.resolve(PageController)

export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.id
  invariant(typeof pageId === 'string')

  return await controller.get(pageId)
}

export default function PageWindow() {
  const data = useLoaderData<PageGetView>()
  return (
    <>
      <p>
        <Link to={`/pages/${data.pageId}/m/new`}>Add</Link>
      </p>
      <p>{`Model for ${data.page?.name}`}</p>
      <ul>
        {data.models.map(m => (
          <li key={m.id}>
            <Link to={`/m/${m.id}`}>{m.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}