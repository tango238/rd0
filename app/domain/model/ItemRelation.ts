import { Item } from '~/domain/model/item/Item'
import { Connection } from '~/domain/model/relation/Connection'
import { Dependency } from '~/domain/model/relation/Dependency'

export class ItemRelation {
  private connections: Array<Connection>
  private dependency: Dependency

  constructor(item: Item, connections: Array<Connection>, dependency: Dependency) {
    this.connections = connections
    this.dependency = dependency
  }
}