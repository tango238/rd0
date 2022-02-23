import { inject, injectable } from 'tsyringe'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { PageRepository } from '~/application/repository/PageRepository'
import { CategoryRepository } from '~/application/repository/CategoryRepository'
import { Project, ProjectJSON } from '~/domain/model/project/Project'
import { Page, PageJSON } from '~/domain/model/page/Page'
import { Category, CategoryJSON } from '~/domain/model/category/Category'
import { ProjectName } from '~/domain/model/project/ProjectName'
import { ProjectId } from '~/domain/model/project/Projectid'

export type ProjectAllView = {
  projects: Array<ProjectJSON>
}

export type ProjectDetailView = {
  project: ProjectJSON
  pages: Array<PageJSON>
  categories: Array<CategoryJSON>
}

@injectable()
export class ProjectController {

  constructor(
    @inject('ProjectRepository') private projectRepo: ProjectRepository,
    @inject('PageRepository') private pageRepo: PageRepository,
    @inject('CategoryRepository') private categoryRepo: CategoryRepository
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
    const categories = await this.categoryRepo.findAll(projectId)

    return {
      project: project.toJSON(),
      pages: pages.map(p => p.toJSON()),
      categories: categories.map(c => c.toJSON())
    }
  }
}