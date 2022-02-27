import 'reflect-metadata'
import invariant from 'tiny-invariant'
import { container } from 'tsyringe'
import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from 'remix'
import { Box, Button, Container, TextField } from '@mui/material'
import { PageController } from '~/application/controller/PageController'
import { ProjectId } from '~/domain/model/board/project/ProjectId'
import { PageName } from '~/domain/model/board/page/PageName'
import { project_detail } from '~/routes/URLs'

const controller = container.resolve(PageController)

export const loader: LoaderFunction = async ({ params }) => {
  return params.id
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const name = form.get("name")
  const projectIdValue = form.get("projectId")

  invariant(typeof name === "string")
  invariant(typeof projectIdValue === "string")

  const projectId = ProjectId.of(projectIdValue)
  await controller.create(projectId, PageName.of(name))
  return redirect(project_detail(projectIdValue))
}

export default function View() {
  const projectId = useLoaderData()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Create Page</h3>
        <Form method="post">
          <TextField name="name" label="Page Name" fullWidth sx={{ mt: 4 }}/>
          <input type="hidden" name="projectId" value={projectId}/>

          <Button type="submit" sx={{ mt: 8 }} variant="contained">Create</Button>
        </Form>
      </Box>
    </Container>
  )
}