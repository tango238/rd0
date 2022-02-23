import { ProjectId } from '~/domain/model/project/Projectid'
import { ProjectName } from '~/domain/model/project/ProjectName'
import { Project } from '~/domain/model/project/Project'

export interface ProjectRepository {

  insert: (name: ProjectName) => void

  findAll: () => Promise<Array<Project>>

  getById: (projectId: ProjectId) => Promise<Project>
}