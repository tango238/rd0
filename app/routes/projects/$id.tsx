import type { LoaderFunction } from 'remix'
import { Link, useLoaderData } from 'remix'
import { container } from 'tsyringe'
import { PageAllView, PageController } from '~/application/controller/PageController'
import invariant from 'tiny-invariant'
import { category_detail, page_detail, project_page_new, project_category_new } from '~/routes/URLs'
import { ProjectController, ProjectDetailView } from '~/application/controller/ProjectController'

const controller = container.resolve(ProjectController)

export const loader: LoaderFunction = async ({ params}) => {
  const projectId = params.id
  invariant(typeof projectId === 'string')
  return await controller.detail(projectId)
}

export default function View() {
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
        <Link to={project_category_new(data.project.id)}>
          Create Category
        </Link>
      </div>
      <p>Categories</p>
      <ul>
        {data.categories.map(type => (
          <li key={type.id}>
            <Link to={category_detail(type.id)}>{type.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}