import { inject, injectable } from 'tsyringe'
import { PageRepository } from '~/application/repository/PageRepository'
import { Item, Page } from '~/infra/datasource/generated'
import { ItemRepository } from '~/application/repository/ItemRepository'

export type PageAllView = {
  projectId: string
  pages: Array<Page>
}

export type PageDetailView = {
  pageId: string
  page: Page | null
  items: Array<Item>
}

@injectable()
export class PageController {

  constructor(
    @inject('PageRepository') private pageRepo: PageRepository,
    @inject('ItemRepository') private itemRepo: ItemRepository
  ) {
  }

  async all(projectId: string): Promise<PageAllView> {
    const pages = await this.pageRepo.findAll(projectId)
    return {
      projectId, pages
    }
  }

  async create(projectId: string, name: string) {
    this.pageRepo.insert(projectId, name)
  }

  async detail(pageId: string): Promise<PageDetailView> {
    const page = await this.pageRepo.getById(pageId)
    const items = await this.itemRepo.findByPageId(pageId)

    return {
      pageId, page, items
    }
  }

}