import { LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

type LoaderData = {
  pageId: string
  modelId: string
}

export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.pageId
  const modelId = params.id
  invariant(typeof pageId === 'string')
  invariant(typeof modelId === 'string')

  return { pageId, modelId }
}

export default function ModelDetailView() {
  const data = useLoaderData<LoaderData>()
  return (
    <>
      hello?
      <p>{data.pageId}</p>
      <p>{data.modelId}</p>
    </>
  )
}