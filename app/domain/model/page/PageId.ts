export class PageId {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): PageId {
    return new PageId(value)
  }

  get value(): string {
    return this._value
  }
}