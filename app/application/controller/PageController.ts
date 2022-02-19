import { inject, injectable } from 'tsyringe'
import { PageRepository } from '~/application/repository/PageRepository'
import { Page } from '~/infra/datasource/generated'

@injectable()
export class PageController {

  constructor(
    @inject('PageRepository') private repository: PageRepository
  ) {
  }

  getPages(projectId: string): Promise<Page[]> {
    return this.repository.findAll(projectId)
  }

  async create(projectId: string, name: string) {
    this.repository.insert(projectId, name)
  }
}