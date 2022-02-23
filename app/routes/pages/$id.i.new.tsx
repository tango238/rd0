import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from 'remix'
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { container } from 'tsyringe'
import { ItemController, ItemNewView } from '~/application/controller/ItemController'
import invariant from 'tiny-invariant'
import { page_detail } from '~/routes/URLs'
import { ItemName } from '~/domain/model/item/ItemName'
import { PageId } from '~/domain/model/page/PageId'
import { CategoryId } from '~/domain/model/category/CategoryId'

const controller = container.resolve(ItemController)


export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const name = form.get("name")
  const categoryId = form.get("categoryId")
  const pageIdValue = form.get("pageId")

  invariant(typeof name === "string")
  invariant(typeof categoryId === "string")
  invariant(typeof pageIdValue === "string")

  const pageId = PageId.of(pageIdValue)
  await controller.create(
    pageId, ItemName.of(name), CategoryId.of(categoryId)
  )
  return redirect(page_detail(pageIdValue))
}

export const loader: LoaderFunction = async ({ params }) => {
  const pageId = params.id
  invariant(pageId)

  return await controller.new(PageId.of(pageId))
}

export default function View() {
  const data = useLoaderData<ItemNewView>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Add Item</h3>
        <Form method="post">
          <TextField name="name" label="Name" variant="outlined" fullWidth sx={{ mt: 4 }}/>
          <FormControl variant="outlined" fullWidth sx={{ mt: 4 }}>
            <InputLabel id="categoryLabel">Category</InputLabel>
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