import { ProjectId } from '~/domain/model/board/project/Projectid'
import { ProjectName } from '~/domain/model/board/project/ProjectName'

export interface ProjectJSON {
  id: string
  name: string
}

export class Project {
  private readonly _id: ProjectId
  private readonly _name: ProjectName

  constructor(projectId: ProjectId, projectName: ProjectName) {
    this._id = projectId
    this._name = projectName
  }

  get id(): ProjectId {
    return this._id
  }

  get name(): ProjectName {
    return this._name
  }

  toJSON(): ProjectJSON {
    return {
      id: this._id.value,
      name: this._name.value
    }
  }
}