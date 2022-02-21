import { Project } from '~/infra/datasource/generated'

export interface ProjectRepository {

  insert: (name:string) => void

  findAll: () => Promise<Array<Project>>

  getById: (projectId: string) => Promise<Project>
}