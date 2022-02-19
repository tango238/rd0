import { Button, FormControl, Input, InputLabel } from '@mui/material'
import { ActionFunction, LoaderFunction, redirect, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { container } from 'tsyringe'
import { PageController } from '~/application/controller/PageController'

const controller = container.resolve(PageController)

export const loader:LoaderFunction = async ({ params }) => {
  return params.id
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const name = form.get("name")
  const projectId = form.get("projectId")

  invariant(typeof name === "string")
  invariant(typeof projectId === "string")

  await controller.create(projectId, name)
  return redirect(`/projects/${projectId}`)
}

export default function NewPage() {
  const projectId = useLoaderData()
  return (
    <>
      <form method="post">
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input name="name"  />
          <input type="hidden" name="projectId" value={projectId} />
        </FormControl>

        <Button type="submit" sx={{display:'block', top: '24px'}} variant="contained">Create</Button>
      </form>
    </>
  )
}