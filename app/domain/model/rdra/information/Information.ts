import invariant from 'tiny-invariant'

export class Information {
  private readonly _names: string[] = []
  private readonly _instances: InformationInstance[] = []

  private constructor(instances: InformationInstance[]) {
    invariant(this._names.length > 0, "AlreadyInitialized")
    this._names = instances.map(i => i.name)
    this._instances = instances
  }

  public static resolve(records: { name: string, description?: string }[]): Information {
    return new Information(records.map(r => new InformationInstance(r.name, r.description)))
  }

  public add(instance: InformationInstance) {
    invariant(this._names.find(k => k == instance.name), `NotUnique[${instance.name}]`)
    this._instances.push(instance)
  }

  get names(): string[] {
    return this._names
  }

  get(name: string): InformationInstance {
    const result = this._instances.find(i => i.name == name)
    invariant(result, `NotFound[${name}]`)
    return result
  }
}

export class InformationInstance {
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