import { ComponentRepository } from '~/application/repository/ComponentRepository'
import { Commponent as ComponentRow } from '~/infra/datasource/generated'
import { Component } from '~/domain/model/component/Component'
import { ComponentTypeId } from '~/domain/model/type/ComponentTypeId'
import { ComponentName } from '~/domain/model/component/ComponentName'
import { ComponentId } from '~/domain/model/component/ComponentId'


export class ComponentDataSource implements ComponentRepository {

  private static toComponent(row: ComponentRow): Component {
    const typeId = ComponentTypeId.of(row.componentTypeId)
    const id = ComponentId.of(row.id)
    const name = ComponentName.of(row.name)
    return new Component(typeId, id, name)
  }
}