import '../array.extensions'
import invariant from 'tiny-invariant'
import { JsonSchemaBusiness } from '~/domain/model/rdra/JsonSchema'
import { ErrorReport } from '~/domain/model/rdra/RDRA'
import { Actor } from '~/domain/model/rdra/actor/Actor'
import { Usecase } from '~/domain/model/rdra/usecase/Usecase'

export class Business {
  private readonly _names: string[] = []
  private readonly _instances: BusinessInstance[]
  private readonly _errors: ErrorReport = []

  constructor(instances: BusinessInstance[]) {
    invariant(this._names.length == 0, "AlreadyInitialized")
    this._names = instances.map(i => i.name)
    this._instances = instances
  }

  static resolve(
    source: JsonSchemaBusiness[],
    actor: Actor,
    usecase: Usecase
  ) {
    let errors: ErrorReport = []
    const instances = source.map(it => {
      const buc = it.buc.map(b => {
        const activity = b.activity.map(a => {
          const usedByCounted = a.used_by.countValues()
          usedByCounted.forEach((count, usedBy) => {
            if (count > 1) errors.push(`アクティビティ[${a.name}]に指定されているアクター[${usedBy}]が重複しています。`)
            if (!actor.names.includes(usedBy)) errors.push(`アクティビティ[${a.name}]に指定されているアクター[${usedBy}]が未登録です。`)
          })
          const usecaseCounted = a.usecase.countValues()
          usecaseCounted.forEach((count, uc) => {
            if (count > 1) errors.push(`アクティビティ[${a.name}]に指定されているユースケース[${uc}]が重複しています。`)
            if (!usecase.names.includes(uc)) errors.push(`アクティビティ[${a.name}]に指定されているユースケース[${uc}]が未登録です。`)
          })
          return new Activity(a.name, a.used_by, a.usecase)
        })
        const activityNames = activity.map(a => a.name)
        const counted = activityNames.countValues()
        counted.forEach((count, key) => {
          if (count > 1) errors.push(`アクティビティ[${key}]が重複しています。`)
        })
        return new Buc(b.name, activity)
      })
      const bucNames = buc.map(b => b.name)
      const counted = bucNames.countValues()
      counted.forEach((count, key) => {
        if (count > 1) errors.push(`BUC[${key}]が重複しています`)
      })

      return new BusinessInstance(it.name, buc)
    })
    const business = new Business(instances)

    const counted = business._names.countValues()
    counted.forEach((count, key) => {
      if (count > 1) business._errors.push(`ビジネス[${key}]が重複しています。`)
    })

    if (errors.length > 0) business._errors.push(...errors)
    return business
  }

  get instances(): BusinessInstance[] {
    return this._instances
  }

  get errors(): ErrorReport {
    return this._errors
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