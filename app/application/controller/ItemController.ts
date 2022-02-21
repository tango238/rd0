import { inject, injectable } from 'tsyringe'
import { ItemRepository } from '~/application/repository/ItemRepository'
import { Category, Item, Page } from '~/infra/datasource/generated'
import { CategoryRepository } from '~/application/repository/CategoryRepository'
import { PageRepository } from '~/application/repository/PageRepository'

export type ItemConnectionsView = {
  item: Item
  connectionCandidates: Array<Item>
}

export type ItemNewView = {
  pageId: string
  categories: Array<Category>
}

export type ItemDetailView = {
  page: Page,
  item: Item
  category: Category
}

@injectable()
export class ItemController {

  constructor(
    @inject('PageRepository') private pageRepo: PageRepository,
    @inject('ItemRepository') private itemRepo: ItemRepository,
    @inject('CategoryRepository') private categoryRepo: CategoryRepository
  ) {
  }

  async create(pageId: string, name: string, categoryId: string) {
    this.itemRepo.insert(pageId, name, categoryId)
  }

  async findConnectionCandidates(itemId: string): Promise<ItemConnectionsView> {
    const item = await this.itemRepo.getById(itemId)
    const pageId = item.pageId
    const connectionCandidates = await this.itemRepo.findConnectionCandidates(pageId, itemId)

    return {
      item, connectionCandidates
    }
  }

  async new(pageId: string): Promise<ItemNewView> {
    const page = await this.pageRepo.getById(pageId)
    const categories = await this.categoryRepo.findAll(page.projectId)

    return { pageId, categories: categories }
  }

  async detail(pageId: string, itemId: string): Promise<ItemDetailView> {
    const page = await this.pageRepo.getById(pageId)
    const item = await this.itemRepo.getById(itemId)
    const category = await this.categoryRepo.getById(item.categoryId)

    return { page, item: item, category: category }
  }

  // 相互
  async addMutualConnection(from: string, to: string) {
    await this.itemRepo.addMutualConnection(from, to)
  }
}