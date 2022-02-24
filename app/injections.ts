import { container } from 'tsyringe'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { ProjectDataSource } from '~/infra/datasource/ProjectDataSource'
import { PageRepository } from '~/application/repository/PageRepository'
import { PageDataSource } from '~/infra/datasource/PageDataSource'
import { ComponentDataSource } from '~/infra/datasource/ComponentDataSource'
import { ComponentRepository } from '~/application/repository/ComponentRepository'
import { ComponentTypeDataSource } from '~/infra/datasource/ComponentTypeDataSource'
import { ComponentTypeRepository } from '~/application/repository/ComponentTypeRepository'


export function registerToContainer() {
  container.register<ProjectRepository>("ProjectRepository", ProjectDataSource)
  container.register<PageRepository>('PageRepository', PageDataSource)
  container.register<ComponentTypeRepository>('ComponentTypeRepository', ComponentTypeDataSource)
  container.register<ComponentRepository>('ComponentRepository', ComponentDataSource)
}
