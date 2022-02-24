import { ProjectId } from '~/domain/model/project/Projectid'
import { ComponentType } from '~/domain/model/type/ComponentType'
import { ComponentTypeId } from '~/domain/model/type/ComponentTypeId'
import { ComponentTypeName } from '~/domain/model/type/ComponentTypeName'

export interface ComponentTypeRepository {

  insert: (projectId: ProjectId, name: ComponentTypeName) => void

  findAll: (projectId: ProjectId) => Promise<Array<ComponentType>>

  getById: (categoryId: ComponentTypeId) => Promise<ComponentType>

}