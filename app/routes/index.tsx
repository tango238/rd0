import type { LoaderFunction } from "remix"
import { Link, useLoaderData } from "remix"
import { container } from 'tsyringe'
import { ProjectAllView, ProjectController } from '~/application/controller/ProjectController'
import { project_detail, project_new } from '~/routes/URLs'

const controller = container.resolve(ProjectController)

export const loader: LoaderFunction = async () => {
  return await controller.all()
}

export default function Index() {
  const data = useLoaderData<ProjectAllView>()
  return (
    <>
      <p>
        <Link to={project_new()}>Create Project</Link>
      </p>
      <p>Projects</p>
      <ul>
        {data.projects.map(project => (
          <li key={project.id}>
            <Link to={project_detail(project.id)}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
