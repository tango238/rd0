import produce, { Draft, immerable } from 'immer'
import { PageId } from '~/domain/model/diagram/page/PageId'
import { PageLevel } from '~/domain/model/diagram/page/PageLevel'
import { PageName } from '~/domain/model/diagram/page/PageName'
import { Instance, InstanceJSON } from '~/domain/model/diagram/instance/Instance'

export interface PageJSON {
  id: string
  level: number
  name: string
  instances: InstanceJSON[]
}

export class Page {
  [immerable] = true

  private readonly _id: PageId
  private readonly _level: PageLevel
  private readonly _name: PageName
  private readonly _instances: Instance[]

  constructor(id: PageId, level: PageLevel, name: PageName, instances: Instance[]) {
    this._id = id
    this._level = level
    this._name = name
    this._instances = instances
  }

  // FIXME: delete this later.
  public static deprecatedOf(lv: number, name: string): Page {
    return new Page(PageId.generate(), PageLevel.of(lv), PageName.of(name), [])
  }

  public addInstance(instance: Instance): Page {
    return produce(this, (draft: Draft<Page>) => {
      draft.instances.push(instance)
    })
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

  get instances(): Instance[] {
    return this._instances
  }


  toJSON(): PageJSON {
    return {
      id: this._id.value,
      level: this._level.value,
      name: this._name.value,
      instances: this.instances.map(i => i.toJSON())
    }
  }
}