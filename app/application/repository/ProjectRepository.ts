import { Project } from '~/domain/model/board/project/Project'
import { ProjectId } from '~/domain/model/board/project/Projectid'
import { ProjectName } from '~/domain/model/board/project/ProjectName'

export interface ProjectRepository {

  insert: (name: ProjectName) => void

  findAll: () => Promise<Array<Project>>

  getById: (projectId: ProjectId) => Promise<Project>

}