import type { LoaderFunction } from 'remix'
import { Link, useLoaderData } from 'remix'
import { Page } from '~/infra/datasource/generated'
import { container } from 'tsyringe'
import { PageController } from '~/application/controller/PageController'
import invariant from 'tiny-invariant'

const controller = container.resolve(PageController)

type LoaderData = {
  pages: Array<Page>
  projectId: string
};

export const loader: LoaderFunction = async ({ params}) => {
  const projectId = params.id
  invariant(typeof projectId === 'string')
  const data: LoaderData = {
    pages: await controller.all(projectId),
    projectId: projectId
  }
  return data
}

export default function ProjectWindow() {
  const data = useLoaderData<LoaderData>()
  return (
    <>
      <p>
        <Link to={`/projects/${data.projectId}/pages/new`}>
          Create Page
        </Link>
      </p>
      <p>Pages</p>
      <ul>
        {data.pages.map(p => (
          <li key={p.id}>
            <Link to={`/pages/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}