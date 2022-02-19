import 'reflect-metadata'
import { container } from 'tsyringe'
import { ProjectController } from '~/application/controller/ProjectController'
import { ActionFunction, redirect } from 'remix'
import Button from '@mui/material/Button'
import invariant from 'tiny-invariant'

const controller = container.resolve(ProjectController)

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const name = form.get("name")

  invariant(typeof name === "string")

  await controller.create(name)
  return redirect(`/`)
}

export default function NewProject() {
  return (
    <>
      <h1>new</h1>
      <form method="post">
        <div>
          <label>Project Name:</label>
          <input type="text" name="name"/>
        </div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  )
}