import { PageRepository } from '~/application/repository/PageRepository'
import { db } from '~/utils/db.server'
import { Page } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'


export class PageDataSource implements PageRepository {
  async insert(projectId: string, name: string) {
    const page: Page | null = await db.page.findFirst({
      orderBy: [{ level: 'desc' }]
    })
    const level = page ? page.level + 1 : 1
    await db.page.create({
      data: {
        projectId,
        level,
        name
      }
    })
  }

  findAll(projectId: string): Promise<Page[]> {
    return db.page.findMany({
      where: { projectId: projectId },
      orderBy: [{ level: 'asc' }]
    })
  }

  async getById(pageId: string): Promise<Page> {
    const result = await db.page.findUnique({
      where: { id: pageId }
    })
    invariant(result)

    return result
  }
}