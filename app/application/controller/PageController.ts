import { inject, injectable } from 'tsyringe'
import { PageRepository } from '~/application/repository/PageRepository'
import { ComponentRepository } from '~/application/repository/ComponentRepository'
import { ProjectId } from '~/domain/model/project/Projectid'
import { Page, PageJSON } from '~/domain/model/page/Page'
import { PageName } from '~/domain/model/page/PageName'
import { PageId } from '~/domain/model/page/PageId'

export type PageAllView = {
  projectId: ProjectId
  pages: Array<Page>
}

export type PageDetailView = {
  page: PageJSON
}

@injectable()
export class PageController {

  constructor(
    @inject('PageRepository') private pageRepo: PageRepository,
    @inject('ItemRepository') private itemRepo: ComponentRepository
  ) {
  }

  async all(projectId: ProjectId): Promise<PageAllView> {
    const pages = await this.pageRepo.findAll(projectId)
    return {
      projectId, pages
    }
  }

  async create(projectId: ProjectId, pageName: PageName) {
    this.pageRepo.insert(projectId, pageName)
  }

  async detail(pageId: PageId): Promise<PageDetailView> {
    const page = await this.pageRepo.getById(pageId)

    return {
      page: page.toJSON()
    }
  }

}