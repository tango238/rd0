import { inject, injectable } from 'tsyringe'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { Project } from '~/infra/datasource/generated'

export type ProjectAllView = {
  projects: Array<Project>
}

@injectable()
export class ProjectController {

  constructor(
    @inject('ProjectRepository') private repository: ProjectRepository
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
}