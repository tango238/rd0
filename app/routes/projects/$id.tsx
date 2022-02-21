import type { LoaderFunction } from 'remix'
import { Link, useLoaderData } from 'remix'
import { container } from 'tsyringe'
import invariant from 'tiny-invariant'
import { category_detail, page_detail, project_category_new, project_page_new } from '~/routes/URLs'
import { ProjectController, ProjectDetailView } from '~/application/controller/ProjectController'
import { Box, Container } from '@mui/material'

const controller = container.resolve(ProjectController)

export const loader: LoaderFunction = async ({ params }) => {
  const projectId = params.id
  invariant(typeof projectId === 'string')
  return await controller.detail(projectId)
}

export default function View() {
  const data = useLoaderData<ProjectDetailView>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>

        <h3>Project</h3>
        <table>
          <tr>
            <th>ID</th>
            <td>{data.project.id}</td>
          </tr>
          <tr>
            <th align="left"> Name</th>
            <td>{data.project.name}</td>
          </tr>
        </table>

        <h3>Page</h3>
        <div>
          <Link to={project_page_new(data.project.id)}>
            Create Page
          </Link>
        </div>

        <h3>Pages</h3>
        <ul>
          {data.pages.map(page => (
            <li key={page.id}>
              <Link to={page_detail(page.id)}>{page.name}</Link>
            </li>
          ))}
        </ul>

        <hr />
        <h3>Category</h3>
        <div>
          <Link to={project_category_new(data.project.id)}>
            Create Category
          </Link>
        </div>
        <h3>Categories</h3>
        <ul>
          {data.categories.map(type => (
            <li key={type.id}>
              <Link to={category_detail(type.id)}>{type.name}</Link>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  )
}