import '../array.extensions'
import invariant from 'tiny-invariant'
import { ErrorReport } from '~/domain/model/rdra/RDRA'

export class ExternalSystem {
  private readonly _names: string[] = []
  private readonly _instances: ExternalSystemInstance[] = []
  private readonly _errors: ErrorReport = []

  private constructor(instances: ExternalSystemInstance[]) {
    invariant(this._names.length == 0, "AlreadyInitialized")
    this._names = instances.map(i => i.name)
    this._instances = instances
  }

  static resolve(records: { name: string, description?: string }[]): ExternalSystem {
    const system = new ExternalSystem(records.map(it => new ExternalSystemInstance(it.name, it.description)))
    const counted = system._names.countValues()
    counted.forEach((value, key) => {
      if (value > 1) system._errors.push(`ExternalSystem[${key}] is duplicated`)
    })
    return system
  }

  add(instance: ExternalSystemInstance) {
    invariant(this._names.find(k => k == instance.name), `NotUnique[${instance.name}]`)
    this._instances.push(instance)
  }

  get(name: string): ExternalSystemInstance {
    const result = this._instances.find(i => i.name == name)
    invariant(result, `NotFound[${name}]`)
    return result
  }

  get instances(): ExternalSystemInstance[] {
    return this._instances
  }

  get errors(): ErrorReport {
    return this._errors
  }
}

export class ExternalSystemInstance {
  private readonly _name: string
  private readonly _description: string

  constructor(name: string, description: string = "") {
    this._name = name
    this._description = description
  }

  get name(): string {
    return this._name
  }

  get description(): string {
    return this._description
  }
}