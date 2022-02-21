import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from 'remix'
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { container } from 'tsyringe'
import { ItemController, ItemConnectionsView } from '~/application/controller/ItemController'
import invariant from 'tiny-invariant'
import { page_item_detail } from '~/routes/URLs'

const controller = container.resolve(ItemController)


export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  const pageId = form.get("pageId")
  const from = form.get("itemId")
  const to = form.get("to")

  invariant(typeof pageId === "string")
  invariant(typeof from === "string")
  invariant(typeof to === "string")

  await controller.addMutualConnection(from, to)
  return redirect(page_item_detail(pageId, from))
}

export const loader: LoaderFunction = async ({ params }) => {
  const itemId = params.id
  invariant(typeof itemId === "string")
  return await controller.findConnectionCandidates(itemId)
}

export default function CreateConnectionView() {
  const data = useLoaderData<ItemConnectionsView>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Add Connection</h3>
        <table>
          <tr>
            <th>ID</th>
            <td>{data.item.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{data.item.name}</td>
          </tr>
        </table>

        <hr/>

        <Form method="post">
          <FormControl variant="outlined" fullWidth sx={{ mt: 4 }}>
            <InputLabel id="toLabel">Item</InputLabel>
            <Select name="to" labelId="toLabel">
              {data.connectionCandidates.map(item => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <input type="hidden" name="pageId" value={data.item.pageId}/>
          <input type="hidden" name="itemId" value={data.item.id}/>

          <Button type="submit" sx={{ mt: 8 }} variant="contained">Create</Button>
        </Form>
      </Box>
    </Container>
  )
}