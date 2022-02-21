import { CategoryRepository } from '~/application/repository/CategoryRepository'
import { db } from '~/utils/db.server'
import { Category } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'

export class CategoryDataSource implements CategoryRepository {

  async insert(projectId: string, name: string) {
    await db.category.create({ data: { projectId, name } })
  }

  findAll(projectId: string): Promise<Array<Category>> {
    return db.category.findMany({ where: { projectId } })
  }

  async getById(categoryId: string): Promise<Category> {
    const result = await db.category.findUnique({ where: { id: categoryId } })
    invariant(result)

    return result
  }

}