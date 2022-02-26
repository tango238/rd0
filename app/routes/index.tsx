import "reflect-metadata"
import { container } from 'tsyringe'
import { Link, LoaderFunction, useLoaderData } from "remix"
import { Box, Container } from '@mui/material'
import { ProjectAllView, ProjectController } from '~/application/controller/ProjectController'
import { project_detail, project_new } from '~/routes/URLs'

const controller = container.resolve(ProjectController)

export const loader: LoaderFunction = async () => {
  return await controller.all()
}

export default function View() {
  const data = useLoaderData<ProjectAllView>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Project</h3>
        <div>
          <Link to={project_new()}>Create Project</Link>
        </div>
        <h3>Projects</h3>
        <ul>
          {data.projects.map(project => (
            <li key={project.id}>
              <Link to={project_detail(project.id)}>{project.name}</Link>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
  )
}

