import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from 'remix'
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { container } from 'tsyringe'
import { ItemController, ItemNewView } from '~/application/controller/ItemController'
import invariant from 'tiny-invariant'
import { page_detail } from '~/routes/URLs'

const controller = container.resolve(ItemController)


export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const name = form.get("name")
  const categoryId = form.get("categoryId")
  const pageId = form.get("pageId")

  invariant(typeof name === "string")
  invariant(typeof categoryId === "string")
  invariant(typeof pageId === "string")

  await controller.create(pageId, name, categoryId)
  return redirect(page_detail(pageId))
}

export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.id
  invariant(pageId)

  return await controller.new(pageId)
}

export default function View() {
  const data = useLoaderData<ItemNewView>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Create Item</h3>
        <Form method="post">
          <TextField name="name" label="Name" variant="outlined" fullWidth sx={{ mt: 4 }}/>
          <FormControl variant="outlined" fullWidth sx={{ mt: 4 }}>
            <InputLabel id="categoryLabel">Model Type</InputLabel>
            <Select name="categoryId" labelId="categoryLabel">
              {data.categories.map(category => (
                <MenuItem value={category.id}>{category.name}</MenuItem>
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