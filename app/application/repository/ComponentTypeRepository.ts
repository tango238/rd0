import { ProjectId } from '~/domain/model/diagram/project/ProjectId'
import { ComponentType } from '~/domain/model/diagram/type/ComponentType'
import { ComponentTypeId } from '~/domain/model/diagram/type/ComponentTypeId'
import { ComponentTypeName } from '~/domain/model/diagram/type/ComponentTypeName'

export interface ComponentTypeRepository {

  insert: (projectId: ProjectId, name: ComponentTypeName) => void

  findAll: (projectId: ProjectId) => Promise<Array<ComponentType>>

  getById: (categoryId: ComponentTypeId) => Promise<ComponentType>

}