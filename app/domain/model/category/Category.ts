import { CategoryId } from '~/domain/model/category/CategoryId'
import { CategoryName } from '~/domain/model/category/CategoryName'

export interface CategoryJSON {
  id: string
  name: string
}

export class Category {
  private readonly _id: CategoryId
  private readonly _name: CategoryName

  constructor(id: CategoryId, name: CategoryName) {
    this._id = id
    this._name = name
  }

  get id(): CategoryId {
    return this._id
  }

  get name(): CategoryName {
    return this._name
  }

  toJSON(): CategoryJSON {
    return {
      id: this._id.value,
      name: this._name.value
    }
  }
}