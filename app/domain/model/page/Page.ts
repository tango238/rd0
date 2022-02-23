import { PageId } from '~/domain/model/page/PageId'
import { PageLevel } from '~/domain/model/page/PageLevel'
import { PageName } from '~/domain/model/page/PageName'

export interface PageJSON {
  id: string
  level: number
  name: string
}

export class Page {
  private readonly _id: PageId
  private readonly _level: PageLevel
  private readonly _name: PageName

  constructor(id: PageId, level: PageLevel, name: PageName) {
    this._id = id
    this._level = level
    this._name = name
  }

  get id(): PageId {
    return this._id
  }

  get level(): PageLevel {
    return this._level
  }

  get name(): PageName {
    return this._name
  }

  toJSON(): PageJSON {
    return {
      id: this._id.value,
      level: this._level.value,
      name: this._name.value
    }
  }
}