import { container } from 'tsyringe'
import { CategoryController, CategoryDetailView } from '~/application/controller/CategoryController'
import { LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

const controller = container.resolve(CategoryController)

export const loader: LoaderFunction = async ({ params }) => {
  const categoryId = params.id
  invariant(categoryId)

  return await controller.detail(categoryId)
}

export default function View() {
  const data = useLoaderData<CategoryDetailView>()
  return (
    <>
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
    </>
  )
}