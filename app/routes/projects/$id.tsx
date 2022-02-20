import type { LoaderFunction } from 'remix'
import { Link, useLoaderData } from 'remix'
import { container } from 'tsyringe'
import { PageAllView, PageController } from '~/application/controller/PageController'
import invariant from 'tiny-invariant'

const controller = container.resolve(PageController)

export const loader: LoaderFunction = async ({ params}) => {
  const projectId = params.id
  invariant(typeof projectId === 'string')
  return await controller.all(projectId)
}

export default function ProjectWindow() {
  const data = useLoaderData<PageAllView>()
  return (
    <>
      <p>
        <Link to={`/projects/${data.projectId}/pages/new`}>
          Create Page
        </Link>
      </p>
      <p>Pages</p>
      <ul>
        {data.pages.map(page => (
          <li key={page.id}>
            <Link to={`/pages/${page.id}`}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}