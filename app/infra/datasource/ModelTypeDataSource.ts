import { ModelTypeRepository } from '~/application/repository/ModelTypeRepository'
import { db } from '~/utils/db.server'
import { ModelType } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'

export class ModelTypeDataSource implements ModelTypeRepository {

  async insert(projectId: string, name: string) {
    await db.modelType.create({ data: { projectId, name } })
  }

  findAll(projectId: string): Promise<Array<ModelType>> {
    return db.modelType.findMany({ where: { projectId } })
  }

  async getById(modelTypeId: string): Promise<ModelType> {
    const result = await db.modelType.findUnique({ where: { id: modelTypeId } })
    invariant(result)

    return result
  }

}