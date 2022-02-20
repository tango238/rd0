import { inject, injectable } from 'tsyringe'
import { ModelRepository } from '~/application/repository/ModelRepository'
import { Model, ModelType, Page } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'
import { ModelTypeRepository } from '~/application/repository/ModelTypeRepository'
import { PageRepository } from '~/application/repository/PageRepository'

export type ModelConnectionsView = {
  modelId: string
  connectionCandidates: Array<Model>
}

export type ModelNewView = {
  pageId: string
  modelTypes: Array<ModelType>
}

export type ModelDetailView = {
  page: Page,
  model: Model
  modelType: ModelType
}

@injectable()
export class ModelController {

  constructor(
    @inject('PageRepository') private pageRepo: PageRepository,
    @inject('ModelRepository') private modelRepo: ModelRepository,
    @inject('ModelTypeRepository') private modelTypeRepo: ModelTypeRepository
  ) {
  }

  async create(pageId: string, name: string, modelTypeId: string) {
    this.modelRepo.insert(pageId, name, modelTypeId)
  }

  async connections(modelId: string): Promise<ModelConnectionsView> {
    const model = await this.modelRepo.getById(modelId)
    const pageId = model.pageId
    const connectionCandidates = await this.modelRepo.findConnectionCandidates(pageId, modelId)

    return {
      modelId, connectionCandidates
    }
  }

  async new(pageId: string): Promise<ModelNewView> {
    const page = await this.pageRepo.getById(pageId)
    const modelTypes = await this.modelTypeRepo.findAll(page.projectId)

    return { pageId, modelTypes }
  }

  async detail(pageId: string, modelId: string): Promise<ModelDetailView> {
    const page = await this.pageRepo.getById(pageId)
    const model = await this.modelRepo.getById(modelId)
    const modelType = await this.modelTypeRepo.getById(model.modelTypeId)

    return { page, model, modelType }
  }
}