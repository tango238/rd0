import { container } from 'tsyringe'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { ProjectDataSource } from '~/infra/datasource/ProjectDataSource'
import { PageRepository } from '~/application/repository/PageRepository'
import { PageDataSource } from '~/infra/datasource/PageDataSource'
import { ItemDataSource } from '~/infra/datasource/ItemDataSource'
import { ItemRepository } from '~/application/repository/ItemRepository'
import { CategoryDataSource } from '~/infra/datasource/CategoryDataSource'
import { CategoryRepository } from '~/application/repository/CategoryRepository'


export function registerToContainer() {
  container.register<ProjectRepository>("ProjectRepository", ProjectDataSource)
  container.register<PageRepository>('PageRepository', PageDataSource)
  container.register<ItemRepository>('ItemRepository', ItemDataSource)
  container.register<CategoryRepository>('CategoryRepository', CategoryDataSource)
}
