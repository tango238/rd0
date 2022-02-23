import { ItemId } from '~/domain/model/item/ItemId'

export class Connection {
  private readonly _from: ItemId
  private readonly _to: ItemId

  constructor(from: ItemId, to: ItemId) {
    this._from = from
    this._to = to
  }

  get from(): ItemId {
    return this._from
  }

  get to(): ItemId {
    return this._to
  }
}