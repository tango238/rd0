export class ComponentTypeName {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): ComponentTypeName {
    return new ComponentTypeName(value)
  }

  get value(): string {
    return this._value
  }
}