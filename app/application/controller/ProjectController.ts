import { inject, injectable } from 'tsyringe'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { Project } from '~/infra/datasource/generated'

@injectable()
export class ProjectController {

  constructor(
    @inject('ProjectRepository') private repository: ProjectRepository
  ) {
  }

  all(): Promise<Array<Project>> {
    return this.repository.findAll()
  }

  detail() {}

  async create(name: string) {
    await this.repository.insert(name)
  }
}