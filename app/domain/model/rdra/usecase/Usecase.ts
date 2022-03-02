import { JsonSchemaUsecase } from '~/domain/model/rdra/JsonSchema'
import { Condition } from '~/domain/model/rdra/state/Condition'
import { ErrorReport } from '~/domain/model/rdra/RDRA'
import { Information } from '~/domain/model/rdra/information/Information'
import invariant from 'tiny-invariant'

export class Usecase {
  private readonly _names: string[] = []
  private readonly _instances: UsecaseInstance[]
  private readonly _errors: ErrorReport = []

  constructor(instances: UsecaseInstance[]) {
    invariant(this._names.length > 0, "AlreadyInitialized")
    this._names = instances.map(i => i.name)
    this._instances = instances
  }

  static resolve(
    source: JsonSchemaUsecase[],
    information: Information,
    condition: Condition
  ) {
    return new Usecase(source.map(it => {
      return new UsecaseInstance(it.name, it.view, it.information, it.condition)
    }))
  }
}

class UsecaseInstance {
  private readonly _name: string
  private readonly _view: string[]
  private readonly _information: string[]
  private readonly _condition: string[]


  constructor(name: string, view: string[], information: string[], condition: string[]) {
    this._name = name
    this._view = view
    this._information = information
    this._condition = condition
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
}