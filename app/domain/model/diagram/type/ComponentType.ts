import { ComponentTypeId } from '~/domain/model/diagram/type/ComponentTypeId'
import { ComponentTypeName } from '~/domain/model/diagram/type/ComponentTypeName'

export interface ComponentTypeJSON {
  id: string
  name: string
}

export class ComponentType {
  private readonly _id: ComponentTypeId
  private readonly _name: ComponentTypeName

  constructor(id: ComponentTypeId, name: ComponentTypeName) {
    this._id = id
    this._name = name
  }

  get id(): ComponentTypeId {
    return this._id
  }

  get name(): ComponentTypeName {
    return this._name
  }

  toJSON(): ComponentTypeJSON {
    return {
      id: this._id.value,
      name: this._name.value
    }
  }
}