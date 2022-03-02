import { JsonSchemaBusiness } from '~/domain/model/rdra/JsonSchema'
import { ErrorReport } from '~/domain/model/rdra/RDRA'
import { Actor } from '~/domain/model/rdra/actor/Actor'
import { Usecase } from '~/domain/model/rdra/usecase/Usecase'
import invariant from 'tiny-invariant'

export class Business {
  private readonly _names: string[] = []
  private readonly _instances: BusinessInstance[]
  private readonly _errors: ErrorReport = []

  constructor(instances: BusinessInstance[]) {
    invariant(this._names.length > 0, "AlreadyInitialized")
    this._names = instances.map(i => i.name)
    this._instances = instances
  }

  static resolve(
    source: JsonSchemaBusiness[],
    actor: Actor,
    usecase: Usecase
  ) {

    const instances = source.map(it => {
      const buc = it.buc.map(b => {
        const activity = b.activity.map(a => {
          return new Activity(a.name, a.used_by, a.usecase)
        })
        return new Buc(b.name, activity)
      })
      return new BusinessInstance(it.name, buc)
    })
    return new Business(instances)
  }
}

class BusinessInstance {
  private readonly _name: string
  private readonly _buc: Buc[]

  constructor(name: string, buc: Buc[]) {
    this._name = name
    this._buc = buc
  }

  get name(): string {
    return this._name
  }

  get buc(): Buc[] {
    return this._buc
  }
}

class Buc {
  private readonly _name: string
  private readonly _activity: Activity[]

  constructor(name: string, activity: Activity[]) {
    this._name = name
    this._activity = activity
  }

  get name(): string {
    return this._name
  }

  get activity(): Activity[] {
    return this._activity
  }
}

class Activity {
  private readonly _name: string
  private readonly _used_by: string[]
  private readonly _usecase: string[]

  constructor(name: string, used_by: string[], usecase: string[]) {
    this._name = name
    this._used_by = used_by
    this._usecase = usecase
  }

  get name(): string {
    return this._name
  }

  get used_by(): string[] {
    return this._used_by
  }

  get usecase(): string[] {
    return this._usecase
  }
}