import { CategoryRepository } from '~/application/repository/CategoryRepository'
import { db } from '~/utils/db.server'
import { Category as CategoryRow } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'
import { CategoryName } from '~/domain/model/category/CategoryName'
import { ProjectId } from '~/domain/model/project/Projectid'
import { Category } from '~/domain/model/category/Category'
import { CategoryId } from '~/domain/model/category/CategoryId'

export class CategoryDataSource implements CategoryRepository {

  async insert(projectId: ProjectId, name: CategoryName) {
    await db.category.create({ data: { projectId: projectId.value, name: name.value } })
  }

  async findAll(projectId: ProjectId): Promise<Array<Category>> {
    const rows = await db.category.findMany({ where: { projectId: projectId.value } })
    return rows.map(r => CategoryDataSource.toCategory(r))
  }

  async getById(categoryId: CategoryId): Promise<Category> {
    const result = await db.category.findUnique({ where: { id: categoryId.value } })
    invariant(result)
    return CategoryDataSource.toCategory(result)
  }

  private static toCategory(row: CategoryRow): Category {
    return new Category(CategoryId.of(row.id), CategoryName.of(row.name))
  }
}