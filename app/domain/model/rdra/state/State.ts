import { JsonSchemaState } from '~/domain/model/rdra/JsonSchema'
import { ErrorReport } from '~/domain/model/rdra/RDRA'
import invariant from 'tiny-invariant'

export class State {
  private readonly _groups: string[] = []
  private readonly _instances: StateGroup[] = []
  private readonly _errors: ErrorReport = []


  constructor(instances: StateGroup[]) {
    invariant(this._groups.length > 0, "AlreadyInitialized")
    this._groups = instances.map(i => i.name)
    this._instances = instances
  }

  static resolve(state: JsonSchemaState[]) {
    const instances = state.map(it => {
      const values = it.value.map(v => new StateValueWithoutUsecase(v.name))
      return new StateGroup(it.group, values)
    })
    return new State(instances)
  }

  get instances(): StateGroup[] {
    return this._instances
  }

  get errors(): ErrorReport {
    return this._errors
  }
}

class StateGroup {
  private readonly _name:string
  private readonly _values: StateValueWithoutUsecase[]

  constructor(name:string, values: StateValueWithoutUsecase[]) {
    this._name = name
    this._values = values
  }

  get name(): string {
    return this._name
  }

  get values(): StateValueWithoutUsecase[] {
    return this._values
  }
}

class StateValueWithoutUsecase {
  private readonly _name: string

  constructor(name: string) {
    this._name = name
  }

  get name(): string {
    return this._name
  }
}