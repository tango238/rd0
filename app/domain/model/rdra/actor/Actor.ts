import invariant from 'tiny-invariant'
import { ErrorReport } from '~/domain/model/rdra/RDRA'

export class Actor {
  private readonly _names: string[] = []
  private readonly _instances: ActorInstance[] = []
  private readonly _errors: ErrorReport = []

  private constructor(instances: ActorInstance[]) {
    invariant(this._names.length > 0, "AlreadyInitialized")
    this._names = instances.map(i => i.name)
    this._instances = instances
  }

  static resolve(source: { name: string, description?: string }[]): Actor {
    return new Actor(source.map(r => new ActorInstance(r.name, r.description)))
  }

  add(instance: ActorInstance) {
    invariant(this._names.find(k => k == instance.name), `NotUnique[${instance.name}]`)
    this._instances.push(instance)
  }

  get names(): string[] {
    return this._names
  }

  get(name: string): ActorInstance {
    const result = this._instances.find(i => i.name == name)
    invariant(result, `NotFound[${name}]`)
    return result
  }
}

export class ActorInstance {
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