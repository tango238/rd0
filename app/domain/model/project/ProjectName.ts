export class ProjectName {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): ProjectName {
    return new ProjectName(value)
  }

  get value(): string {
    return this._value
  }
}