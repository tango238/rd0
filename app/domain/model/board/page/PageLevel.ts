export class PageLevel {
  private readonly _value: number

  private constructor(value: number) {
    this._value = value
  }

  public static of(value: number): PageLevel {
    return new PageLevel(value)
  }

  public static initialValue(): PageLevel {
    return new PageLevel(1)
  }

  public next() {
    return new PageLevel(this._value + 1)
  }

  get value(): number {
    return this._value
  }
}