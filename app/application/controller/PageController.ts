import { inject, injectable } from 'tsyringe'
import { PageRepository } from '~/application/repository/PageRepository'
import { ItemRepository } from '~/application/repository/ItemRepository'
import { ProjectId } from '~/domain/model/project/Projectid'
import { Page, PageJSON } from '~/domain/model/page/Page'
import { ItemJSON } from '~/domain/model/item/Item'
import { PageName } from '~/domain/model/page/PageName'
import { PageId } from '~/domain/model/page/PageId'

export type PageAllView = {
  projectId: ProjectId
  pages: Array<Page>
}

export type PageDetailView = {
  page: PageJSON
  items: Array<ItemJSON>
}

@injectable()
export class PageController {

  constructor(
    @inject('PageRepository') private pageRepo: PageRepository,
    @inject('ItemRepository') private itemRepo: ItemRepository
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
    const items = await this.itemRepo.findByPageId(pageId)
    console.log(page)
    console.log(items)

    return {
      page: page.toJSON(),
      items: items.map(i => i.toJSON())
    }
  }

}