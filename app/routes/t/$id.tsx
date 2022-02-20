import { container } from 'tsyringe'
import { ModelTypeController, ModelTypeDetailView } from '~/application/controller/ModelTypeController'
import { LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

const controller = container.resolve(ModelTypeController)

export const loader: LoaderFunction = async ({ params }) => {
  const modelTypeId = params.id
  invariant(modelTypeId)

  return await controller.detail(modelTypeId)
}

export default function ModelTypeDetailView() {
  const data = useLoaderData<ModelTypeDetailView>()
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <td>{data.modelType.id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{data.modelType.name}</td>
        </tr>
      </table>

    </>
  )
}