import { inject, injectable } from 'tsyringe'
import { PageRepo } from '~/injections'
import { PageRepository } from '~/application/repository/PageRepository'
import { ProjectId } from '~/domain/model/board/project/ProjectId'
import { Page, PageJSON } from '~/domain/model/board/page/Page'
import { PageId } from '~/domain/model/board/page/PageId'
import { PageName } from '~/domain/model/board/page/PageName'

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
    @inject(PageRepo) private pageRepo: PageRepository
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