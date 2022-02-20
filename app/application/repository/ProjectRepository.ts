import { Project } from '~/infra/datasource/generated'

export interface ProjectRepository {

  insert: (name:string) => void

  findAll: () => Promise<Array<Project>>

  findById: (projectId: string) => Promise<Project | null>
}