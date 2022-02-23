import { ItemRepository } from '~/application/repository/ItemRepository'
import { db } from '~/utils/db.server'
import { Item as ItemRow } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'
import { Item } from '~/domain/model/item/Item'
import { PageId } from '~/domain/model/page/PageId'
import { CategoryId } from '~/domain/model/category/CategoryId'
import { ItemName } from '~/domain/model/item/ItemName'
import { ItemId } from '~/domain/model/item/ItemId'


export class ItemDataSource implements ItemRepository {

  async insert(pageId: PageId, name: ItemName, categoryId: CategoryId) {
    await db.item.create({
      data: {
        pageId: pageId.value,
        name: name.value,
        categoryId: categoryId.value
      }
    })
  }

  async findByPageId(pageId: PageId): Promise<Array<Item>> {
    const rows = await db.item.findMany({ where: { pageId: pageId.value } })
    return rows.map(r => ItemDataSource.toItem(r))
  }

  async findConnectionCandidates(pageId: PageId, itemId: ItemId): Promise<Array<Item>> {
    const rows = await db.$queryRaw<Array<ItemRow>>`
        SELECT
            "Item".*
        FROM
            "Item"
        WHERE
            "Item".pageId = ${pageId.value} AND
            "Item"."id" <> ${itemId.value} AND
            "Item"."id" NOT IN (SELECT "to" FROM Connection WHERE "from" = ${itemId.value})
    `
    return rows.map(r => ItemDataSource.toItem(r))
  }

  async getById(itemId: ItemId): Promise<Item> {
    const result = await db.item.findUnique({ where: { id: itemId.value } })
    invariant(result)

    return ItemDataSource.toItem(result)
  }

  async addMutualConnection(from: ItemId, to: ItemId) {
    await db.$transaction([
        db.connection.create({ data: { from: from.value, to: to.value } }),
        db.connection.create({ data: { from: to.value, to: from.value } })
      ]
    )
  }

  async getConnectedItems(itemId: ItemId): Promise<Array<Item>> {
    const rows = await db.$queryRaw<Array<ItemRow>>`
      SELECT
        "Item".*
      FROM "Connection"
        INNER JOIN "Item"
            ON "Item"."id" = "Connection"."to" AND "Connection"."from" = ${itemId.value}
      ORDER BY 
        "Connection"."createdAt" ASC
    `
    return rows.map(r => ItemDataSource.toItem(r))
  }

  private static toItem(row: ItemRow): Item {
    const pageId = PageId.of(row.pageId)
    const categoryId = CategoryId.of(row.categoryId)
    const itemId = ItemId.of(row.id)
    const name = ItemName.of(row.name)
    return new Item(pageId, categoryId, itemId, name)
  }
}