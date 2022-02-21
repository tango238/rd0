import { Box, Button, Container, FormControl, Input, InputLabel, TextField } from '@mui/material'
import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { container } from 'tsyringe'
import { PageController } from '~/application/controller/PageController'
import { project_detail } from '~/routes/URLs'

const controller = container.resolve(PageController)

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