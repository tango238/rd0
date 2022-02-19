import { ModelRepository } from '~/application/repository/ModelRepository'
import { db } from '~/utils/db.server'
import { Model } from '~/infra/datasource/generated'


export class ModelDataSource implements ModelRepository {

  async insert(pageId: string, name: string) {
    await db.model.create({
      data: {
        pageId, name
      }
    })
  }

  findByPageId(pageId: string): Promise<Array<Model>> {
    return db.model.findMany({ where: { pageId: pageId } })
  }

}