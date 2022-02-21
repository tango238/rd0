import { Category } from '~/infra/datasource/generated'

export interface CategoryRepository {

  insert: (projectId: string, name: string) => void

  findAll: (projectId: string) => Promise<Array<Category>>

  getById: (categoryId: string) => Promise<Category>

}