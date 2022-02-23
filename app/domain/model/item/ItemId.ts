export class ItemId {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): ItemId {
    return new ItemId(value)
  }

  get value(): string {
    return this._value
  }
}