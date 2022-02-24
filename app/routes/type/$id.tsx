import invariant from 'tiny-invariant'
import { container } from 'tsyringe'
import { LoaderFunction, useLoaderData } from 'remix'
import { Box, Container } from '@mui/material'
import { ComponentTypeController, ComponentTypeDetailView } from '~/application/controller/ComponentTypeController'
import { ComponentTypeId } from '~/domain/model/type/ComponentTypeId'

const controller = container.resolve(ComponentTypeController)

export const loader: LoaderFunction = async ({ params }) => {
  const componentTypeId = params.id
  invariant(componentTypeId)

  return await controller.detail(ComponentTypeId.of(componentTypeId))
}

export default function View() {
  const data = useLoaderData<ComponentTypeDetailView>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h3>ComponentType</h3>
        <table>
          <tr>
            <th>ID</th>
            <td>{data.componentType.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{data.componentType.name}</td>
          </tr>
        </table>
      </Box>
    </Container>
  )
}