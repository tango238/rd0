import { ComponentId } from '~/domain/model/component/ComponentId'
import { ComponentName } from '~/domain/model/component/ComponentName'
import { ComponentTypeId } from '~/domain/model/type/ComponentTypeId'

export interface ItemJSON {
  typeId: string
  id: string
  name: string
}

export class Component {

  private readonly _typeId: ComponentTypeId
  private readonly _id: ComponentId
  private readonly _name: ComponentName

  constructor(componentTypeId: ComponentTypeId, componentId: ComponentId, componentName: ComponentName) {
    this._typeId = componentTypeId
    this._id = componentId
    this._name = componentName
  }

  get componentTypeId():ComponentTypeId {
    return this._typeId
  }

  get id(): ComponentId {
    return this._id
  }

  get name(): ComponentName {
    return this._name
  }

  toJSON(): ItemJSON {
    return {
      typeId: this._typeId.value,
      id: this._id.value,
      name: this._name.value
    }
  }
}