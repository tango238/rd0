import 'reflect-metadata'
import { container } from 'tsyringe'
import { ProjectController } from '~/application/controller/ProjectController'
import { ActionFunction, Form, redirect } from 'remix'
import Button from '@mui/material/Button'
import invariant from 'tiny-invariant'
import { Box, Container, TextField } from '@mui/material'
import { ProjectName } from '~/domain/model/diagram/project/ProjectName'

const controller = container.resolve(ProjectController)

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const name = form.get("name")

  invariant(typeof name === "string")

  await controller.create(ProjectName.of(name))
  return redirect(`/`)
}

export default function View() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Create Project</h3>
        <Form method="post">
          <TextField name="name" label="Project Name" fullWidth sx={{ mt: 4 }}/>

          <Button type="submit" variant="contained" sx={{ mt: 8 }}>
            Submit
          </Button>
        </Form>
      </Box>
    </Container>
  )
}