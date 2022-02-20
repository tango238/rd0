import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from 'remix'
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { container } from 'tsyringe'
import { ModelController, ModelNewView } from '~/application/controller/ModelController'
import invariant from 'tiny-invariant'

const controller = container.resolve(ModelController)


export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const name = form.get("name")
  const modelTypeId = form.get("modelTypeId")
  const pageId = form.get("pageId")

  invariant(typeof name === "string")
  invariant(typeof modelTypeId === "string")
  invariant(typeof pageId === "string")

  await controller.create(pageId, name, modelTypeId)
  return redirect(`/pages/${pageId}`)
}

export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.id
  invariant(pageId)

  return await controller.new(pageId)
}

export default function NewModelView() {
  const data = useLoaderData<ModelNewView>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Create Model</h3>
        <Form method="post">
          <TextField name="name" label="Name" variant="outlined" fullWidth sx={{ mt: 4 }}/>
          <FormControl variant="outlined" fullWidth sx={{ mt: 4 }}>
            <InputLabel id="modelTypeLabel">Model Type</InputLabel>
            <Select name="modelTypeId" labelId="modelTypeLabel">
              {data.modelTypes.map(modelType => (
                <MenuItem value={modelType.id}>{modelType.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <input type="hidden" name="pageId" value={data.pageId}/>

          <Button type="submit" sx={{ mt: 8 }} variant="contained">Create</Button>
        </Form>
      </Box>
    </Container>
  )
}