import { Link, LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { item_connection_new } from '~/routes/URLs'
import { container } from 'tsyringe'
import { ItemController, ItemDetailView } from '~/application/controller/ItemController'

const controller = container.resolve(ItemController)


export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.pageId
  const itemId = params.id
  invariant(typeof pageId === 'string')
  invariant(typeof itemId === 'string')

  return controller.detail(pageId, itemId)
}

export default function ModelDetailView() {
  const data = useLoaderData<ItemDetailView>()
  return (
    <>
      <h3>Information</h3>
      <table>
        <tr>
          <th>ID</th>
          <td>{data.item.id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{data.item.name}</td>
        </tr>
        <tr>
          <th>Type</th>
          <td>{data.category.name}</td>
        </tr>
      </table>
      <p>
        <Link to={item_connection_new(data.item.id)}>Add Connection</Link>
      </p>
    </>
  )
}