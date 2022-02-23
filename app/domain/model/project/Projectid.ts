export class ProjectId {
  private readonly _value: string

  private constructor(value: string) {
    this._value = value
  }

  public static of(value: string): ProjectId {
    return new ProjectId(value)
  }

  get value(): string {
    return this._value
  }
}