import { v4 as uuid, validate } from 'uuid'
import invariant from 'tiny-invariant'

export class InstanceId {

  private readonly _value: string

  private constructor(uuid: string) {
    invariant(validate(uuid))
    this._value = uuid
  }

  public static of(value: string): InstanceId {
    return new InstanceId(value)
  }

  public static generate(): InstanceId {
    return new InstanceId(uuid())
  }

  get value(): string {
    return this._value
  }
}