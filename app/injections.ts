import { container } from 'tsyringe'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { ProjectDataSource } from '~/infra/datasource/ProjectDataSource'
import { PageRepository } from '~/application/repository/PageRepository'
import { PageDataSource } from '~/infra/datasource/PageDataSource'


export function registerToContainer() {
  container.register<ProjectRepository>("ProjectRepository", ProjectDataSource)
  container.register<PageRepository>('PageRepository', PageDataSource)
}
