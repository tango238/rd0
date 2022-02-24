import { inject, injectable } from 'tsyringe'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { PageRepository } from '~/application/repository/PageRepository'
import { ComponentTypeRepository } from '~/application/repository/ComponentTypeRepository'
import { ProjectJSON } from '~/domain/model/project/Project'
import { PageJSON } from '~/domain/model/page/Page'
import { ComponentTypeJSON } from '~/domain/model/type/ComponentType'
import { ProjectName } from '~/domain/model/project/ProjectName'
import { ProjectId } from '~/domain/model/project/Projectid'

export type ProjectAllView = {
  projects: Array<ProjectJSON>
}

export type ProjectDetailView = {
  project: ProjectJSON
  pages: Array<PageJSON>
  types: Array<ComponentTypeJSON>
}

@injectable()
export class ProjectController {

  constructor(
    @inject('ProjectRepository') private projectRepo: ProjectRepository,
    @inject('PageRepository') private pageRepo: PageRepository,
    @inject('ComponentTypeRepository') private componentTypeRepo: ComponentTypeRepository
  ) {
  }

  async all(): Promise<ProjectAllView> {
    const projects  = await this.projectRepo.findAll()
    return {
      projects: projects.map(p => p.toJSON())
    }
  }

  async create(projectName: ProjectName) {
    await this.projectRepo.insert(projectName)
  }

  async detail(projectId: ProjectId): Promise<ProjectDetailView> {
    const project = await this.projectRepo.getById(projectId)
    const pages = await this.pageRepo.findAll(projectId)
    const types = await this.componentTypeRepo.findAll(projectId)

    return {
      project: project.toJSON(),
      pages: pages.map(p => p.toJSON()),
      types: types.map(c => c.toJSON())
    }
  }
}