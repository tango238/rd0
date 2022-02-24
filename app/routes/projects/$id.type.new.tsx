import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from 'remix'
import { Box, Button, Container, TextField } from '@mui/material'
import invariant from 'tiny-invariant'
import { project_detail } from '~/routes/URLs'
import { container } from 'tsyringe'
import { ComponentTypeController } from '~/application/controller/ComponentTypeController'
import { ProjectId } from '~/domain/model/project/Projectid'
import { ComponentTypeName } from '~/domain/model/type/ComponentTypeName'

const controller = container.resolve(ComponentTypeController)

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
  await controller.create(projectId, ComponentTypeName.of(name))
  return redirect(project_detail(projectIdValue))
}

export default function View() {
  const projectId = useLoaderData()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Create Category</h3>
        <Form method="post">
          <TextField name="name" label="Category Name" fullWidth sx={{ mt: 4 }}/>
          <input type="hidden" name="projectId" value={projectId}/>

          <Button type="submit" variant="contained" sx={{ mt: 8 }}>Create</Button>
        </Form>
      </Box>
    </Container>
  )
}