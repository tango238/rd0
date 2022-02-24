import invariant from 'tiny-invariant'
import { container } from 'tsyringe'
import { Link, LoaderFunction, useLoaderData } from 'remix'
import { Box, Container } from '@mui/material'
import { PageController, PageDetailView } from '~/application/controller/PageController'
import { PageId } from '~/domain/model/page/PageId'
import { page_item_new } from '~/routes/URLs'


const controller = container.resolve(PageController)

export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.id
  invariant(typeof pageId === 'string')

  return await controller.detail(PageId.of(pageId))
}

export default function View() {
  const data = useLoaderData<PageDetailView>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Page</h3>
        <table>
          <tr>
            <th align="left">ID</th>
            <td>{data.page.id}</td>
          </tr>
          <tr>
            <th align="left">Name</th>
            <td>{data.page.name}</td>
          </tr>
          <tr>
            <th align="left">Level</th>
            <td>{data.page.level}</td>
          </tr>
        </table>
        <hr/>

        <h3>Item</h3>
        <div>
          <Link to={page_item_new(data.page.id)}>Add Item</Link>
        </div>

      </Box>
    </Container>
  )
}