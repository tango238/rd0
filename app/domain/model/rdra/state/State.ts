import '../array.extensions'
import invariant from 'tiny-invariant'
import { JsonSchemaState } from '~/domain/model/rdra/JsonSchema'
import { ErrorReport } from '~/domain/model/rdra/RDRA'

export class State {
  private readonly _groups: string[] = []
  private readonly _instances: StateGroupInstance[] = []
  private readonly _errors: ErrorReport = []

  constructor(instances: StateGroupInstance[]) {
    invariant(this._groups.length == 0, `AlreadyInitialized`)
    this._groups = instances.map(i => i.name)
    this._instances = instances
  }

  static resolve(source: JsonSchemaState[]) {
    const instances = source.map(it => {
      const values = it.value.map(v => new StateValueWithoutUsecase(v.name))
      return new StateGroupInstance(it.group, values)
    })
    const state = new State(instances)
    const counted = state._groups.countValues()
    counted.forEach((value, key) => {
      if (value > 1) state._errors.push(`State[${key}] is duplicated`)
    })
    return state
  }

  get groups(): string[] {
    return this._groups
  }

  get instances(): StateGroupInstance[] {
    return this._instances
  }

  get errors(): ErrorReport {
    return this._errors
  }
}

class StateGroupInstance {
  private readonly _name: string
  private readonly _values: StateValueWithoutUsecase[]

  constructor(name: string, values: StateValueWithoutUsecase[]) {
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