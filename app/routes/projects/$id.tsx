import type { LoaderFunction } from 'remix'
import { Link, useLoaderData } from 'remix'
import { container } from 'tsyringe'
import { PageAllView, PageController } from '~/application/controller/PageController'
import invariant from 'tiny-invariant'
import { model_type_detail, page_detail, project_page_new, project_type_new } from '~/routes/URLs'
import { ProjectController, ProjectDetailView } from '~/application/controller/ProjectController'

const controller = container.resolve(ProjectController)

export const loader: LoaderFunction = async ({ params}) => {
  const projectId = params.id
  invariant(typeof projectId === 'string')
  return await controller.detail(projectId)
}

export default function ProjectWindow() {
  const data = useLoaderData<ProjectDetailView>()
  return (
    <>
      <div>
        <Link to={project_page_new(data.project.id)}>
          Create Page
        </Link>
      </div>
      <p>Pages</p>
      <ul>
        {data.pages.map(page => (
          <li key={page.id}>
            <Link to={page_detail(page.id)}>{page.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        <Link to={project_type_new(data.project.id)}>
          Create Type
        </Link>
      </div>
      <p>Types</p>
      <ul>
        {data.types.map(type => (
          <li key={type.id}>
            <Link to={model_type_detail(type.id)}>{type.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}