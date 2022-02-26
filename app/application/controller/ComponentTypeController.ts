import invariant from 'tiny-invariant'
import { inject, injectable } from 'tsyringe'
import { ComponentTypeRepository } from '~/application/repository/ComponentTypeRepository'
import { ProjectId } from '~/domain/model/project/Projectid'
import { ComponentType } from '~/domain/model/type/ComponentType'
import { ComponentTypeId } from '~/domain/model/type/ComponentTypeId'
import { ComponentTypeName } from '~/domain/model/type/ComponentTypeName'
import { ComponentTypeRepo } from '~/injections'

export type ComponentTypeDetailView = {
  componentType: ComponentType
}

@injectable()
export class ComponentTypeController {

  constructor(
    @inject(ComponentTypeRepo) private componentTypeRepo: ComponentTypeRepository
  ) {
  }

  async create(projectId: ProjectId, name: ComponentTypeName) {
    await this.componentTypeRepo.insert(projectId, name)
  }

  async detail(categoryId: ComponentTypeId): Promise<ComponentTypeDetailView> {
    const componentType = await this.componentTypeRepo.getById(categoryId)
    invariant(componentType)

    return { componentType }
  }
}