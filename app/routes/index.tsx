import type { LoaderFunction } from "remix"
import { Link, useLoaderData } from "remix"
import { Project } from '~/infra/datasource/generated'
import { container } from 'tsyringe'
import { ProjectController } from '~/application/controller/ProjectController'

const controller = container.resolve(ProjectController)

type LoaderData = {
  projects: Array<Project>;
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    projects: await controller.all()
  }
  return data
}

export default function Index() {
  const data = useLoaderData<LoaderData>()
  return (
    <>
      <p>
        <Link to="/projects/new">Create a new project</Link>
      </p>
      <p>Projects</p>
      <ul>
        {data.projects.map(p => (
          <li key={p.id}>
            <Link to={`/projects/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
