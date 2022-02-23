export class CategoryName {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): CategoryName {
    return new CategoryName(value)
  }

  get value(): string {
    return this._value
  }
}