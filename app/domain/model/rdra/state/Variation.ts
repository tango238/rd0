import { JsonSchemaVariation } from '~/domain/model/rdra/JsonSchema'
import { ErrorReport } from '~/domain/model/rdra/RDRA'
import invariant from 'tiny-invariant'

export class Variation {
  private readonly _names: string[] = []
  private readonly _instances: VariationInstance[]
  private readonly _errors: ErrorReport = []

  constructor(instances: VariationInstance[]) {
    invariant(this._names.length > 0, "AlreadyInitialized")
    this._names = instances.map(i => i.name)
    this._instances = instances
  }

  static resolve(variation: JsonSchemaVariation[]) {
    return new Variation(variation.map(v => new VariationInstance(v.name, v.value)))
  }
}

class VariationInstance {
  private readonly _name: string
  private readonly _value: string[] = []

  constructor(name: string, value: string[]) {
    this._name = name
    this._value = value
  }

  get name(): string {
    return this._name
  }

  get value(): string[] {
    return this._value
  }
}