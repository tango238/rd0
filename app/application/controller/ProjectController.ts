import { inject, injectable } from 'tsyringe'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { ModelType, Page, Project } from '~/infra/datasource/generated'
import { PageRepository } from '~/application/repository/PageRepository'
import { ModelTypeRepository } from '~/application/repository/ModelTypeRepository'

export type ProjectAllView = {
  projects: Array<Project>
}

export type ProjectDetailView = {
  project: Project
  pages: Array<Page>
  types: Array<ModelType>
}

@injectable()
export class ProjectController {

  constructor(
    @inject('ProjectRepository') private repository: ProjectRepository,
    @inject('PageRepository') private pageRepo: PageRepository,
    @inject('ModelTypeRepository') private modelTypeRepo: ModelTypeRepository
  ) {
  }

  async all(): Promise<ProjectAllView> {
    const projects = await this.repository.findAll()
    return {
      projects
    }
  }

  async create(name: string) {
    await this.repository.insert(name)
  }

  async detail(projectId: string) {
    const project = await this.repository.findById(projectId)
    const pages = await this.pageRepo.findAll(projectId)
    const types = await this.modelTypeRepo.findAll(projectId)

    return {
      project, pages, types
    }
  }
}