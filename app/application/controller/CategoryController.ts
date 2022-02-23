import { inject, injectable } from 'tsyringe'
import { CategoryRepository } from '~/application/repository/CategoryRepository'
import invariant from 'tiny-invariant'
import { ProjectId } from '~/domain/model/project/Projectid'
import { CategoryName } from '~/domain/model/category/CategoryName'
import { Category } from '~/domain/model/category/Category'
import { CategoryId } from '~/domain/model/category/CategoryId'

export type CategoryDetailView = {
  category: Category
}

@injectable()
export class CategoryController {

  constructor(
    @inject('CategoryRepository') private categoryRepo: CategoryRepository
  ) {
  }

  async create(projectId: ProjectId, name: CategoryName) {
    await this.categoryRepo.insert(projectId, name)
  }

  async detail(categoryId: CategoryId): Promise<CategoryDetailView> {
    const category = await this.categoryRepo.getById(categoryId)
    invariant(category)

    return { category }
  }
}