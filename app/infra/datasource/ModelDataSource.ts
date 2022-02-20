import { ModelRepository } from '~/application/repository/ModelRepository'
import { db } from '~/utils/db.server'
import { Model } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'


export class ModelDataSource implements ModelRepository {

  async insert(pageId: string, name: string, modelTypeId: string) {
    await db.model.create({
      data: {
        pageId, name, modelTypeId
      }
    })
  }

  findByPageId(pageId: string): Promise<Array<Model>> {
    return db.model.findMany({ where: { pageId: pageId } })
  }

  findConnectionCandidates(pageId: string): Promise<Array<Model>> {
    return db.model.findMany({ where: { pageId: pageId } })
  }

  async getById(modelId: string): Promise<Model> {
    const result = await db.model.findUnique({ where: { id: modelId } })
    invariant(result)

    return result
  }

}