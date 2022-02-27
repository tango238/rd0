import { InstanceId } from '~/domain/model/board/instance/InstanceId'

export interface InstanceJSON {
  id: string
}

export class Instance {

  private readonly _id: InstanceId

  constructor(instanceId: InstanceId) {
    this._id = instanceId
  }

  get id(): InstanceId {
    return this._id
  }

  toJSON():InstanceJSON {
    return {
      id: this._id.value
    }
  }
}
