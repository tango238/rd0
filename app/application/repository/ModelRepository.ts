import { Model } from '~/infra/datasource/generated'

export interface ModelRepository {

  insert: (pageId: string, name: string, modelTypeId: string) => void

  findByPageId: (pageId: string) => Promise<Array<Model>>

  findConnectionCandidates(pageId: string, modelId: string): Promise<Array<Model>>

  getById(modelId: string): Promise<Model>
}