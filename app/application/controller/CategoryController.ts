import { inject, injectable } from 'tsyringe'
import { CategoryRepository } from '~/application/repository/CategoryRepository'
import { Category } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'

export type CategoryDetailView = {
  category: Category
}

@injectable()
export class CategoryController {

  constructor(
    @inject('CategoryRepository') private categoryRepo: CategoryRepository
  ) {
  }

  async create(projectId: string, name: string) {
    await this.categoryRepo.insert(projectId, name)
  }

  async detail(categoryId: string): Promise<CategoryDetailView> {
    const category = await this.categoryRepo.getById(categoryId)
    invariant(category)

    return { category }
  }
}