import { Form, LoaderFunction, useLoaderData } from 'remix'
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { container } from 'tsyringe'
import { ItemController, ItemConnectionsView } from '~/application/controller/ItemController'
import invariant from 'tiny-invariant'

const controller = container.resolve(ItemController)


export const loader: LoaderFunction = async ({ params }) => {
  const itemId = params.id
  invariant(typeof itemId === "string")
  return await controller.connections(itemId)
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
            <InputLabel id="itemLabel">Item</InputLabel>
            <Select name="itemId" labelId="itemLabel">
              {data.connectionCandidates.map(item => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button type="submit" sx={{ mt: 8 }} variant="contained">Create</Button>
        </Form>
      </Box>
    </Container>
  )
}