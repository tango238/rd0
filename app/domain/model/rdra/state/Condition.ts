import { JsonSchemaCondition } from '~/domain/model/rdra/JsonSchema'
import { State } from '~/domain/model/rdra/state/State'
import { Variation } from '~/domain/model/rdra/state/Variation'
import { ErrorReport } from '~/domain/model/rdra/RDRA'
import invariant from 'tiny-invariant'

export class Condition {
  private readonly _names: string[] = []
  private readonly _instances: ConditionInstance[] = []
  private readonly _errors: ErrorReport = []


  constructor(instances: ConditionInstance[]) {
    invariant(this._names.length > 0, "AlreadyInitialized")
    this._names = instances.map(i => i.name)
    this._instances = instances
  }

  static resolve(source: JsonSchemaCondition[], state: State, variation: Variation) {
    const conditions = source.map(it => {
      if (it.variation) {
        return new ConditionOfVariation(it.name, it.variation, it.description)
      }
      else if (it.state) {
        return new ConditionOfState(it.name, it.state, it.description)
      }
      else {
        return new SimpleCondition(it.name, it.description)
      }
    })
    return new Condition(conditions)
  }
}

interface ConditionInstance {
  get name(): string
}

class SimpleCondition implements ConditionInstance {
  private readonly _name: string
  private readonly _description?: string

  constructor(name: string, description?: string) {
    this._name = name
    this._description = description
  }

  get name(): string {
    return this._name
  }
}

class ConditionOfVariation implements ConditionInstance {
  private readonly _name: string
  private readonly _variation: string[]
  private readonly _description?: string

  constructor(name: string, variation: string[], description?: string) {
    this._name = name
    this._variation = variation
    this._description = description
  }

  get name(): string {
    return this._name
  }
}

class ConditionOfState implements ConditionInstance {
  private readonly _name: string
  private readonly _description?: string
  private readonly _state?: string

  constructor(name: string, state: string, description?: string) {
    this._name = name
    this._description = description
    this._state = state
  }

  get name(): string {
    return this._name
  }
}