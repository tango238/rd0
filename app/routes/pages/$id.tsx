import { Link, LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { container } from 'tsyringe'
import { PageController, PageGetView } from '~/application/controller/PageController'
import { page_model_detail, page_model_new } from '~/routes/URLs'


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
        <Link to={page_model_new(data.pageId)}>Add</Link>
      </p>
      <p>{`Model for ${data.page?.name}`}</p>
      <ul>
        {data.models.map(model => (
          <li key={model.id}>
            <Link to={page_model_detail(data.pageId, model.id)}>{model.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}