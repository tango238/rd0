import { ProjectId } from '~/domain/model/board/project/ProjectId'
import { ComponentType } from '~/domain/model/board/type/ComponentType'
import { ComponentTypeId } from '~/domain/model/board/type/ComponentTypeId'
import { ComponentTypeName } from '~/domain/model/board/type/ComponentTypeName'

export interface ComponentTypeRepository {

  insert: (projectId: ProjectId, name: ComponentTypeName) => void

  findAll: (projectId: ProjectId) => Promise<Array<ComponentType>>

  getById: (categoryId: ComponentTypeId) => Promise<ComponentType>

}