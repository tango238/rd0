import { container } from 'tsyringe'
import { CategoryController, CategoryDetailView } from '~/application/controller/CategoryController'
import { LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { CategoryId } from '~/domain/model/category/CategoryId'
import { Box, Container } from '@mui/material'

const controller = container.resolve(CategoryController)

export const loader: LoaderFunction = async ({ params }) => {
  const categoryId = params.id
  invariant(categoryId)

  return await controller.detail(CategoryId.of(categoryId))
}

export default function View() {
  const data = useLoaderData<CategoryDetailView>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Category</h3>
        <table>
          <tr>
            <th>ID</th>
            <td>{data.category.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{data.category.name}</td>
          </tr>
        </table>
      </Box>
    </Container>
  )
}