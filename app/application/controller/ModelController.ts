import { inject, injectable } from 'tsyringe'
import { ModelRepository } from '~/application/repository/ModelRepository'

@injectable()
export class ModelController {

  constructor(
    @inject('ModelRepository') private repository: ModelRepository
  ) {
  }

  async create(pageId: string, name: string) {
    this.repository.insert(pageId, name)
  }
}