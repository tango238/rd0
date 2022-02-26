import { inject, injectable } from 'tsyringe'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { ProjectJSON } from '~/domain/model/project/Project'
import { ProjectName } from '~/domain/model/project/ProjectName'
import { ProjectId } from '~/domain/model/project/Projectid'
import { ComponentTypeRepository } from '~/application/repository/ComponentTypeRepository'
import { PageRepository } from '~/application/repository/PageRepository'
import { PageJSON } from '~/domain/model/page/Page'
import { ComponentTypeJSON } from '~/domain/model/type/ComponentType'
import { ComponentTypeRepo, PageRepo, ProjectRepo } from '~/injections'

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
    @inject(ProjectRepo) private projectRepo: ProjectRepository,
    @inject(PageRepo) private pageRepo: PageRepository,
    @inject(ComponentTypeRepo) private componentTypeRepo: ComponentTypeRepository
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
      pages: pages.map(page => page.toJSON()),
      types: types.map(type => type.toJSON())
    }
  }
}