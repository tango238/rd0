import invariant from 'tiny-invariant'
import { db } from '~/utils/db.server'
import { ComponentTypeRepository } from '~/application/repository/ComponentTypeRepository'
import { ComponentType as ComponentTypeRow } from '~/infra/datasource/generated'
import { ProjectId } from '~/domain/model/diagram/project/ProjectId'
import { ComponentType } from '~/domain/model/diagram/type/ComponentType'
import { ComponentTypeId } from '~/domain/model/diagram/type/ComponentTypeId'
import { ComponentTypeName } from '~/domain/model/diagram/type/ComponentTypeName'

export class ComponentTypeDataSource implements ComponentTypeRepository {

  async insert(projectId: ProjectId, name: ComponentTypeName) {
    await db.componentType.create({ data: { projectId: projectId.value, name: name.value } })
  }

  async findAll(projectId: ProjectId): Promise<Array<ComponentType>> {
    const rows = await db.componentType.findMany({ where: { projectId: projectId.value }, orderBy: [{ name: 'asc' }] })
    return rows.map(r => ComponentTypeDataSource.toCategory(r))
  }

  async getById(categoryId: ComponentTypeId): Promise<ComponentType> {
    const result = await db.componentType.findUnique({ where: { id: categoryId.value } })
    invariant(result)
    return ComponentTypeDataSource.toCategory(result)
  }

  private static toCategory(row: ComponentTypeRow): ComponentType {
    return new ComponentType(ComponentTypeId.of(row.id), ComponentTypeName.of(row.name))
  }
}