import { Item } from '~/infra/datasource/generated'

export interface ItemRepository {

  insert: (pageId: string, name: string, categoryId: string) => void

  findByPageId: (pageId: string) => Promise<Array<Item>>

  findConnectionCandidates(pageId: string, itemId: string): Promise<Array<Item>>

  getById(itemId: string): Promise<Item>

  addMutualConnection: (from: string, to: string) => void

  getConnectedItems: (itemId: string) => Promise<Array<Item>>

}