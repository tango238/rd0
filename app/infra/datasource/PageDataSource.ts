import { PageRepository } from '~/application/repository/PageRepository'
import { db } from '~/utils/db.server'
import { Page as PageRow } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'
import { ProjectId } from '~/domain/model/project/Projectid'
import { PageName } from '~/domain/model/page/PageName'
import { Page } from '~/domain/model/page/Page'
import { PageLevel } from '~/domain/model/page/PageLevel'
import { PageId } from '~/domain/model/page/PageId'


export class PageDataSource implements PageRepository {

  async insert(projectId: ProjectId, name: PageName) {
    const page = await this.findLatest()
    const level = page ? page.level.next() : PageLevel.initialValue()
    await db.page.create({
      data: {
        projectId: projectId.value,
        level: level.value,
        name: name.value
      }
    })
  }

  async findLatest(): Promise<Page | null> {
    const row: PageRow | null = await db.page.findFirst({
      orderBy: [{ level: 'desc' }]
    })
    return row ? PageDataSource.toPage(row): null
  }

  async findAll(projectId: ProjectId): Promise<Array<Page>> {
    const rows = await db.page.findMany({
      where: { projectId: projectId.value },
      orderBy: [{ level: 'asc' }]
    })
    return rows.map(row => PageDataSource.toPage(row))
  }

  async getById(pageId: PageId): Promise<Page> {
    const result = await db.page.findUnique({
      where: { id: pageId.value }
    })
    invariant(result)
    return PageDataSource.toPage(result)
  }

  async getProjectIdById(pageId: PageId): Promise<ProjectId> {
    const row = await db.page.findUnique({
      where: { id: pageId.value }
    })
    invariant(row)
    return ProjectId.of(row.projectId)
  }

  private static toPage(row: PageRow): Page {
    return new Page(PageId.of(row.id), PageLevel.of(row.level), PageName.of(row.name))
  }
}