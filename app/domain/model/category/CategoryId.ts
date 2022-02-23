export class CategoryId {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): CategoryId {
    return new CategoryId(value)
  }

  get value(): string {
    return this._value
  }

}