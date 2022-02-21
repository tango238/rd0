import { Link, LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { container } from 'tsyringe'
import { PageController, PageDetailView } from '~/application/controller/PageController'
import { page_item_detail, page_item_new } from '~/routes/URLs'


const controller = container.resolve(PageController)

export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.id
  invariant(typeof pageId === 'string')

  return await controller.detail(pageId)
}

export default function PageWindow() {
  const data = useLoaderData<PageDetailView>()
  return (
    <>
      <p>
        <Link to={page_item_new(data.pageId)}>Add</Link>
      </p>
      <p>{data.page?.name}</p>
      <ul>
        {data.items.map(item => (
          <li key={item.id}>
            <Link to={page_item_detail(data.pageId, item.id)}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}