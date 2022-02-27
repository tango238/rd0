import { Box, Container } from '@mui/material'
import { LoaderFunction, useLoaderData } from 'remix'
import { Page, PageJSON } from '~/domain/model/board/page/Page'
import { Instance } from '~/domain/model/board/instance/Instance'
import { InstanceId } from '~/domain/model/board/instance/InstanceId'

export const loader: LoaderFunction = async () => {
  // Pageの作成
  // Page<ビジネスコンテキスト図>
  const ビジネスコンテキスト図 = Page.deprecatedOf(1, "ビジネスコンテキスト")
  const 業務フロー図 = Page.deprecatedOf(2, "業務フロー")

  // ComponentTypeの作成

  // Componentの作成
  // Component<アクター>
  // アクター: 会員
  // アクター: 図書館員

  // Component<外部システム>
  // 外部システム: 書籍通販会社



  const instance = new Instance(InstanceId.generate())


  return [
    ビジネスコンテキスト図,
    業務フロー図.addInstance(instance).toJSON()
  ]
}

export default function View() {
  const pages = useLoaderData<PageJSON[]>()
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {pages.map(page => (
          <>
            <div>
              <h3>{page.name}</h3>
              <p>{page.id}</p>
              <p>{page.level}</p>
              <p>{page.name}</p>
              <p>Instances</p>
              <ul>
                {page.instances.map(i => (
                  <li>{i.id}</li>
                ))}
              </ul>
            </div>
            <hr/>
          </>
        ))}
      </Box>
    </Container>
  )
}

