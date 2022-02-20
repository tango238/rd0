import { inject, injectable } from 'tsyringe'
import { ModelTypeRepository } from '~/application/repository/ModelTypeRepository'
import { ModelType } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'

export type ModelTypeDetailView = {
  modelType: ModelType
}

@injectable()
export class ModelTypeController {

  constructor(
    @inject('ModelTypeRepository') private modelTypeRepo: ModelTypeRepository
  ) {
  }

  async create(projectId: string, name: string) {
    await this.modelTypeRepo.insert(projectId, name)
  }

  async detail(modelTypeId: string): Promise<ModelTypeDetailView> {
    const modelType = await this.modelTypeRepo.getById(modelTypeId)
    invariant(modelType)

    return { modelType }
  }
}