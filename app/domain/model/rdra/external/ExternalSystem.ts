import invariant from 'tiny-invariant'

export class ExternalSystem {
  private readonly _names: string[] = []
  private readonly _instances: ExternalSystemInstance[] = []

  private constructor(instances: ExternalSystemInstance[]) {
    invariant(this._names.length > 0, "AlreadyInitialized")
    this._names = instances.map(i => i.name)
    this._instances = instances
  }

  public static build(records: { name: string, description?: string }[]): ExternalSystem {
    return new ExternalSystem(records.map(r => new ExternalSystemInstance(r.name, r.description)))
  }

  public add(instance: ExternalSystemInstance) {
    invariant(this._names.find(k => k == instance.name), `NotUnique[${instance.name}]`)
    this._instances.push(instance)
  }

  get names(): string[] {
    return this._names
  }

  get(name: string): ExternalSystemInstance {
    const result = this._instances.find(i => i.name == name)
    invariant(result, `NotFound[${name}]`)
    return result
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