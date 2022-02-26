export class ComponentTypeId {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): ComponentTypeId {
    return new ComponentTypeId(value)
  }

  get value(): string {
    return this._value
  }

}