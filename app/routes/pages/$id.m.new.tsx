import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from 'remix'
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import { container } from 'tsyringe'
import { ModelController } from '~/application/controller/ModelController'
import invariant from 'tiny-invariant'

const controller = container.resolve(ModelController)


export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const name = form.get("name")
  const pageId = form.get("pageId")

  invariant(typeof name === "string")
  invariant(typeof pageId === "string")

  await controller.create(pageId, name)
  return redirect(`/pages/${pageId}`)
}

export const loader:LoaderFunction = async ({ params }) => {
  return params.id
}

export default function NewModelView() {
  const pageId = useLoaderData()
  return (
    <>
      <Form method="post">
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input name="name"  />
          <input type="hidden" name="pageId" value={pageId} />
        </FormControl>

        <Button type="submit" sx={{display:'block', top: '24px'}} variant="contained">Create</Button>
      </Form>
    </>
  )
}