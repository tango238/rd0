import { Project } from '~/domain/model/diagram/project/Project'
import { ProjectId } from '~/domain/model/diagram/project/Projectid'
import { ProjectName } from '~/domain/model/diagram/project/ProjectName'

export interface ProjectRepository {

  insert: (name: ProjectName) => void

  findAll: () => Promise<Array<Project>>

  getById: (projectId: ProjectId) => Promise<Project>

}