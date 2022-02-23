import { ProjectId } from '~/domain/model/project/Projectid'
import { CategoryName } from '~/domain/model/category/CategoryName'
import { CategoryId } from '~/domain/model/category/CategoryId'
import { Category } from '~/domain/model/category/Category'

export interface CategoryRepository {

  insert: (projectId: ProjectId, name: CategoryName) => void

  findAll: (projectId: ProjectId) => Promise<Array<Category>>

  getById: (categoryId: CategoryId) => Promise<Category>

}