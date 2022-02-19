import { container } from 'tsyringe'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { ProjectDataSource } from '~/infra/datasource/ProjectDataSource'
import { PageRepository } from '~/application/repository/PageRepository'
import { PageDataSource } from '~/infra/datasource/PageDataSource'
import { ModelDataSource } from '~/infra/datasource/ModelDataSource'
import { ModelRepository } from '~/application/repository/ModelRepository'


export function registerToContainer() {
  container.register<ProjectRepository>("ProjectRepository", ProjectDataSource)
  container.register<PageRepository>('PageRepository', PageDataSource)
  container.register<ModelRepository>('ModelRepository', ModelDataSource)
}
