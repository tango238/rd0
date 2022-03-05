import '../array.extensions'
import { State } from '~/domain/model/rdra/state/State'
import { Usecase } from '~/domain/model/rdra/usecase/Usecase'
import { ErrorReport } from '~/domain/model/rdra/RDRA'
import { JsonSchemaState } from '~/domain/model/rdra/JsonSchema'
import invariant from 'tiny-invariant'

export class StateTransition {
  private readonly _names: string[] = []
  private readonly _instances: StateGroup[]
  private readonly _errors: ErrorReport = []

  constructor(instances: StateGroup[]) {
    invariant(this._names.length == 0, "AlreadyInitialized")
    this._instances = instances
  }

  static resolve(source: JsonSchemaState[], state: State, usecase: Usecase) {
    let errors: ErrorReport = []
    const stateTransition = source.map(it => {
      const group = it.group
      const transitionValue = it.value.map(tv => {
        const usecaseName = tv.usecase.name
        const nextState = tv.usecase.next_state
        if (!usecase.names.includes(usecaseName)) errors.push(`状態[${group}]に指定されているユースケース名[${usecaseName}]が未登録です`)
        if (!state.names(group).includes(nextState)) errors.push(`状態[${group}]のユースケース[${usecaseName}]の次の状態[${nextState}]が未登録です`)
        const instance = new StateTransitionUsecase(usecaseName, nextState)
        return new StateTransitionValue(tv.name, instance)
      })
      return new StateGroup(it.group, transitionValue)
    })
    const transition = new StateTransition(stateTransition)
    if (errors.length > 0) transition._errors.push(...errors)
    return transition
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
  private readonly _name: string
  private readonly _values: StateTransitionValue[]

  constructor(name: string, values: StateTransitionValue[]) {
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
  private readonly _usecase: StateTransitionUsecase

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

