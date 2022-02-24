export class ComponentName {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): ComponentName {
    return new ComponentName(value)
  }

  get value(): string {
    return this._value
  }
}