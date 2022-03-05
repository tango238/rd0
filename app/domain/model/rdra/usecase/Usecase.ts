import '../array.extensions'
import invariant from 'tiny-invariant'
import { JsonSchemaUsecase } from '~/domain/model/rdra/JsonSchema'
import { Condition } from '~/domain/model/rdra/state/Condition'
import { ErrorReport } from '~/domain/model/rdra/RDRA'
import { Information } from '~/domain/model/rdra/information/Information'

export class Usecase {
  private readonly _names: string[] = []
  private readonly _instances: UsecaseInstance[]
  private readonly _errors: ErrorReport = []

  constructor(instances: UsecaseInstance[]) {
    invariant(this._names.length == 0, "AlreadyInitialized")
    this._names = instances.map(i => i.name)
    this._instances = instances
  }

  static resolve(
    source: JsonSchemaUsecase[],
    information: Information,
    condition: Condition
  ) {
    let errors: ErrorReport = []
    const usecase = new Usecase(source.map(it => {
      const instance = UsecaseInstance.resolve(it, information, condition)
      if (instance.errors.length > 0) errors.push(...instance.errors)
      return instance
    }))
    const counted = usecase._names.countValues()
    counted.forEach((count, key) => {
      if (count > 1) usecase._errors.push(`ユースケース[${key}]が重複しています。`)
    })
    if (errors.length > 0) usecase._errors.push(...errors)
    return usecase
  }

  get names(): string[] {
    return this._names
  }

  get instances(): UsecaseInstance[] {
    return this._instances
  }

  get errors(): ErrorReport {
    return this._errors
  }
}

class UsecaseInstance {
  private readonly _name: string
  private readonly _view: string[]
  private readonly _information: string[]
  private readonly _condition: string[]
  private readonly _errors: ErrorReport = []

  constructor(name: string, view: string[], information: string[], condition: string[]) {
    this._name = name
    this._view = view
    this._information = information
    this._condition = condition
  }

  static resolve(source: { name: string, view: string[], information: string[], condition: string[] }, information: Information, condition: Condition) {
    const instance = new UsecaseInstance(source.name, source.view, source.information, source.condition)
    const countedInfo = instance._information.countValues()
    countedInfo.forEach((count, key) => {
      if (count > 1) instance._errors.push(`ユースケースに定義されている情報名[${key}]が重複しています。`)
      if (!information.names.includes(key)) instance._errors.push(`ユースケースに定義されている情報名[${key}]が未登録です。`)
    })
    const countedCond = instance._condition.countValues()
    countedCond.forEach((count, key) => {
      if (count > 1) instance._errors.push(`ユースケースに定義されている条件名[${key}]が重複しています。`)
      if (!condition.names.includes(key)) instance._errors.push(`ユースケースに定義されている情報名[${key}]が未登録です。`)
    })
    return instance
  }

  get name(): string {
    return this._name
  }

  get view(): string[] {
    return this._view
  }

  get information(): string[] {
    return this._information
  }

  get condition(): string[] {
    return this._condition
  }

  get errors(): ErrorReport {
    return this._errors
  }
}