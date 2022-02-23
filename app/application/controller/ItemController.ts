import { inject, injectable } from 'tsyringe'
import { ItemRepository } from '~/application/repository/ItemRepository'
import { CategoryRepository } from '~/application/repository/CategoryRepository'
import { PageRepository } from '~/application/repository/PageRepository'
import { digraph, toDot } from 'ts-graphviz'
import { Item, ItemJSON } from '~/domain/model/item/Item'
import { ItemId } from '~/domain/model/item/ItemId'
import { PageId } from '~/domain/model/page/PageId'
import { ItemName } from '~/domain/model/item/ItemName'
import { CategoryId } from '~/domain/model/category/CategoryId'
import { Category, CategoryJSON } from '~/domain/model/category/Category'
import { Page } from '~/domain/model/page/Page'

export type ItemConnectionsView = {
  item: ItemJSON
  connectionCandidates: Array<ItemJSON>
}

export type ItemNewView = {
  pageId: string,
  categories: Array<CategoryJSON>
}

export type ItemDetailView = {
  page: Page
  item: Item
  category: Category
  connectedItems: Array<Item>
  dot: string
}

@injectable()
export class ItemController {

  constructor(
    @inject('PageRepository') private pageRepo: PageRepository,
    @inject('ItemRepository') private itemRepo: ItemRepository,
    @inject('CategoryRepository') private categoryRepo: CategoryRepository
  ) {
  }

  async create(pageId: PageId, name: ItemName, categoryId: CategoryId) {
    console.log(pageId)
    this.itemRepo.insert(pageId, name, categoryId)
  }

  async findConnectionCandidates(itemId: ItemId): Promise<ItemConnectionsView> {
    const item = await this.itemRepo.getById(itemId)
    const connectionCandidates = await this.itemRepo.findConnectionCandidates(item.pageId, itemId)

    return {
      item: item.toJSON(),
      connectionCandidates: connectionCandidates.map(i => i.toJSON())
    }
  }

  async new(pageId: PageId): Promise<ItemNewView> {
    const projectId = await this.pageRepo.getProjectIdById(pageId)
    const categories = await this.categoryRepo.findAll(projectId)

    return {
      pageId: pageId.value,
      categories: categories.map(c => c.toJSON())
    }
  }

  async detail(pageId: PageId, itemId: ItemId): Promise<ItemDetailView> {
    const page = await this.pageRepo.getById(pageId)
    const item = await this.itemRepo.getById(itemId)
    const category = await this.categoryRepo.getById(item.categoryId)
    const connectedItems = await this.itemRepo.getConnectedItems(itemId)

    // dot
    const g = digraph('G')

    const from = g.createNode(item.name.value)
    connectedItems.map(it => {
      const to = g.createNode(it.name.value)
      g.createEdge([from, to], { arrowhead: 'none' })
    })
    const dot = toDot(g)

    return { page, item, category, connectedItems, dot }
  }

  // 相互
  async addMutualConnection(from: ItemId, to: ItemId) {
    await this.itemRepo.addMutualConnection(from, to)
  }
}