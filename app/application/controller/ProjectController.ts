import { inject, injectable } from 'tsyringe'
import { ComponentTypeRepo, PageRepo, ProjectRepo } from '~/injections'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { PageRepository } from '~/application/repository/PageRepository'
import { ComponentTypeRepository } from '~/application/repository/ComponentTypeRepository'
import { ProjectJSON } from '~/domain/model/board/project/Project'
import { ProjectName } from '~/domain/model/board/project/ProjectName'
import { ProjectId } from '~/domain/model/board/project/ProjectId'
import { PageJSON } from '~/domain/model/board/page/Page'
import { ComponentTypeJSON } from '~/domain/model/board/type/ComponentType'

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