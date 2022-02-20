import { Link, LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { model_connection_new } from '~/routes/URLs'
import { container } from 'tsyringe'
import { ModelController, ModelDetailView } from '~/application/controller/ModelController'

const controller = container.resolve(ModelController)


export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.pageId
  const modelId = params.id
  invariant(typeof pageId === 'string')
  invariant(typeof modelId === 'string')

  return controller.detail(pageId, modelId)
}

export default function ModelDetailView() {
  const data = useLoaderData<ModelDetailView>()
  return (
    <>
      <h3>Model Information</h3>
      <table>
        <tr>
          <th>ID</th>
          <td>{data.model.id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{data.model.name}</td>
        </tr>
        <tr>
          <th>Type</th>
          <td>{data.modelType.name}</td>
        </tr>
      </table>
      <p>
        <Link to={model_connection_new(data.model.id)}>Add Connection</Link>
      </p>
    </>
  )
}