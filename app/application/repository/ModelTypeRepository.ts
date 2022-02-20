import { ModelType } from '~/infra/datasource/generated'

export interface ModelTypeRepository {

  insert: (projectId: string, name: string) => void

  findAll: (projectId: string) => Promise<Array<ModelType>>

  getById: (modelTypeId: string) => Promise<ModelType>

}