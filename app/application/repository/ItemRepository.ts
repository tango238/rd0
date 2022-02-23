import { Item } from '~/domain/model/item/Item'
import { ItemId } from '~/domain/model/item/ItemId'
import { PageId } from '~/domain/model/page/PageId'
import { ItemName } from '~/domain/model/item/ItemName'
import { CategoryId } from '~/domain/model/category/CategoryId'

export interface ItemRepository {

  insert: (pageId: PageId, name: ItemName, categoryId: CategoryId) => void

  findByPageId: (pageId: PageId) => Promise<Array<Item>>

  findConnectionCandidates(pageId: PageId, itemId: ItemId): Promise<Array<Item>>

  getById(itemId: ItemId): Promise<Item>

  addMutualConnection: (from: ItemId, to: ItemId) => void

  getConnectedItems: (itemId: ItemId) => Promise<Array<Item>>

}