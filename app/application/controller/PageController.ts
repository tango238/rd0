import { inject, injectable } from 'tsyringe'
import { PageRepository } from '~/application/repository/PageRepository'
import { Model, Page } from '~/infra/datasource/generated'
import { ModelRepository } from '~/application/repository/ModelRepository'

export type PageGetView = {
  pageId: string
  page: Page | null
  models: Array<Model>
}

@injectable()
export class PageController {

  constructor(
    @inject('PageRepository') private pageRepo: PageRepository,
    @inject('ModelRepository') private modelRepo: ModelRepository
  ) {
  }

  all(projectId: string): Promise<Page[]> {
    return this.pageRepo.findAll(projectId)
  }

  async create(projectId: string, name: string) {
    this.pageRepo.insert(projectId, name)
  }

  async get(pageId: string): Promise<PageGetView> {
    const page = await this.pageRepo.findById(pageId)
    const models = await this.modelRepo.findByPageId(pageId)

    return {
      pageId, page, models
    }
  }

}