export class ItemName {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): ItemName {
    return new ItemName(value)
  }

  get value(): string {
    return this._value
  }
}