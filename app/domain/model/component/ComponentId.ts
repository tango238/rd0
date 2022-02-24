export class ComponentId {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): ComponentId {
    return new ComponentId(value)
  }

  get value(): string {
    return this._value
  }
}