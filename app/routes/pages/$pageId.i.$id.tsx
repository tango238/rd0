import { Box, Container } from '@mui/material'


export default function View() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <section>
          <h3>Component</h3>
          <table>
            <tr>
              <th align="left">ID</th>
              <td></td>
            </tr>
            <tr>
              <th align="left">Name</th>
              <td></td>
            </tr>
            <tr>
              <th align="left">Type</th>
              <td></td>
            </tr>
          </table>
        </section>

      </Box>
    </Container>
  )
}