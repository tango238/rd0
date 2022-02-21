import { Link, LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { item_connection_new } from '~/routes/URLs'
import { container } from 'tsyringe'
import { ItemController, ItemDetailView } from '~/application/controller/ItemController'
import { Box, Container } from '@mui/material'

const controller = container.resolve(ItemController)


export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.pageId
  const itemId = params.id
  invariant(typeof pageId === 'string')
  invariant(typeof itemId === 'string')

  return controller.detail(pageId, itemId)
}

export default function View() {
  const data = useLoaderData<ItemDetailView>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Detail</h3>
        <table>
          <tr>
            <th align="left">Page ID</th>
            <td>{data.page.id}</td>
          </tr>
          <tr>
            <th align="left">Page Name</th>
            <td>{data.page.name}</td>
          </tr>
          <tr>
            <th align="left">Item ID</th>
            <td>{data.item.id}</td>
          </tr>
          <tr>
            <th align="left">Item Name</th>
            <td>{data.item.name}</td>
          </tr>
          <tr>
            <th align="left">Type</th>
            <td>{data.category.name}</td>
          </tr>
        </table>

        <hr/>

        <h3>Connection</h3>
        <ul>
          {data.connectedItems.map(item => (
            <li>{item.name}</li>
          ))}
        </ul>
        <p>
          <Link to={item_connection_new(data.item.id)}>Add Connection</Link>
        </p>
      </Box>
    </Container>
  )
}