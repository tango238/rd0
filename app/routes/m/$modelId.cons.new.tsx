import { Form, LoaderFunction, useLoaderData } from 'remix'
import { Box, Button, Container, FormControl, TextField } from '@mui/material'
import { container } from 'tsyringe'
import { ModelConnectionsView, ModelController } from '~/application/controller/ModelController'
import invariant from 'tiny-invariant'

const controller = container.resolve(ModelController)


export const loader: LoaderFunction = async ({ params }) => {
  const modelId = params.modelId
  invariant(typeof modelId === "string")
  return await controller.connections(modelId)
}

export default function CreateConnectionView() {
  const data = useLoaderData<ModelConnectionsView>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>Add Connection</h3>
        <table>
          <tr>
            <th>ID</th>
            <td>{data.modelId}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td></td>
          </tr>
        </table>

        <hr/>

        <Form method="post">
          <TextField type="text" name="name" label="Name" fullWidth sx={{ mt: 4 }}/>

          <Button type="submit" sx={{ mt: 8 }} variant="contained">Create</Button>
        </Form>
      </Box>
    </Container>
  )
}