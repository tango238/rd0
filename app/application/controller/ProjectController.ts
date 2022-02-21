import { inject, injectable } from 'tsyringe'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { Category, Page, Project } from '~/infra/datasource/generated'
import { PageRepository } from '~/application/repository/PageRepository'
import { CategoryRepository } from '~/application/repository/CategoryRepository'

export type ProjectAllView = {
  projects: Array<Project>
}

export type ProjectDetailView = {
  project: Project
  pages: Array<Page>
  categories: Array<Category>
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
    const projects = await this.projectRepo.findAll()
    return {
      projects
    }
  }

  async create(name: string) {
    await this.projectRepo.insert(name)
  }

  async detail(projectId: string): Promise<ProjectDetailView> {
    const project = await this.projectRepo.getById(projectId)
    const pages = await this.pageRepo.findAll(projectId)
    const categories = await this.categoryRepo.findAll(projectId)

    return {
      project, pages, categories
    }
  }
}