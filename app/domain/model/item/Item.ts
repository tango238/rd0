import { ItemId } from '~/domain/model/item/ItemId'
import { ItemName } from '~/domain/model/item/ItemName'
import { PageId } from '~/domain/model/page/PageId'
import { CategoryId } from '~/domain/model/category/CategoryId'

export interface ItemJSON {
  pageId: string
  categoryId: string
  id: string
  name: string
}

export class Item {

  private readonly _pageId: PageId
  private readonly _categoryId: CategoryId
  private readonly _id: ItemId
  private readonly _name: ItemName

  constructor(pageId: PageId, categoryId: CategoryId, itemId: ItemId, itemName: ItemName) {
    this._pageId = pageId
    this._categoryId = categoryId
    this._id = itemId
    this._name = itemName
  }

  get pageId(): PageId {
    return this._pageId
  }

  get categoryId():CategoryId {
    return this._categoryId
  }

  get id(): ItemId {
    return this._id
  }

  get name(): ItemName {
    return this._name
  }

  toJSON(): ItemJSON {
    return {
      pageId: this._pageId.value,
      categoryId: this._categoryId.value,
      id: this._id.value,
      name: this._name.value
    }
  }
}