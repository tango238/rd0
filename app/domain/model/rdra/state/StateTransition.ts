import { State } from '~/domain/model/rdra/state/State'
import { Usecase } from '~/domain/model/rdra/usecase/Usecase'
import { ErrorReport } from '~/domain/model/rdra/RDRA'
import { JsonSchemaState, SourceStateValueJSON } from '~/domain/model/rdra/JsonSchema'
import invariant from 'tiny-invariant'

export class StateTransition {
  private readonly _names: string[] = []
  private readonly _instances: StateGroup[]
  private readonly _errors: ErrorReport = []

  constructor(instances: StateGroup[]) {
    invariant(this._names.length > 0, "AlreadyInitialized")
    this._instances = instances
  }

  static resolve(source: JsonSchemaState[], state: State, usecase: Usecase) {
    const stateTransition = source.map(it => {
      const transitionValue = it.value.map(tv => {
        const usecase = new StateTransitionUsecase(tv.usecase.name, tv.usecase.next_state)
        return new StateTransitionValue(tv.name, usecase)
      })
      return new StateGroup(it.group, transitionValue)
    })
    return new StateTransition(stateTransition)
  }

  get names(): string[] {
    return this._names
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
  private readonly _values: StateTransitionValue[]

  constructor(name:string, values: StateTransitionValue[]) {
    this._name = name
    this._values = values
  }

  get name(): string {
    return this._name
  }

  get values(): StateTransitionValue[] {
    return this._values
  }
}

class StateTransitionValue {
  private readonly _name: string
  private readonly  _usecase: StateTransitionUsecase

  constructor(name: string, usecase: StateTransitionUsecase) {
    this._name = name
    this._usecase = usecase
  }
}

class StateTransitionUsecase {
  private readonly _name: string
  private readonly _nextState: string

  constructor(name: string, nextState: string) {
    this._name = name
    this._nextState = nextState
  }
}

