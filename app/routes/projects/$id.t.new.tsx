import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from 'remix'
import { Box, Button, Container, FormControl, TextField } from '@mui/material'
import invariant from 'tiny-invariant'
import { project_detail } from '~/routes/URLs'
import { container } from 'tsyringe'
import { ModelTypeController } from '~/application/controller/ModelTypeController'

const controller = container.resolve(ModelTypeController)

export const loader: LoaderFunction = async ({ params }) => {
  return params.id
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const name = form.get("name")
  const projectId = form.get("projectId")

  invariant(typeof name === "string")
  invariant(typeof projectId === "string")

  await controller.create(projectId, name)
  return redirect(project_detail(projectId))
}

export default function ProjectTypeNew() {
  const projectId = useLoaderData()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Create Type</h3>
        <Form method="post">
          <TextField name="name" label="Type Name" fullWidth sx={{ mt: 4 }}/>
          <input type="hidden" name="projectId" value={projectId}/>

          <Button type="submit" variant="contained" sx={{ mt: 8 }}>Create</Button>
        </Form>
      </Box>
    </Container>
  )
}