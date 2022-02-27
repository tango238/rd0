export class PageName {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): PageName {
    return new PageName(value)
  }

  get value(): string {
    return this._value
  }
}