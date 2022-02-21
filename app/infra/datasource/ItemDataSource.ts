import { ItemRepository } from '~/application/repository/ItemRepository'
import { db } from '~/utils/db.server'
import { Item } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'


export class ItemDataSource implements ItemRepository {

  async insert(pageId: string, name: string, categoryId: string) {
    await db.item.create({
      data: {
        pageId, name, categoryId
      }
    })
  }

  findByPageId(pageId: string): Promise<Array<Item>> {
    return db.item.findMany({ where: { pageId: pageId } })
  }

  findConnectionCandidates(pageId: string, itemId: string): Promise<Array<Item>> {
    return db.$queryRaw<Array<Item>>`
        SELECT
            "Item".*
        FROM
            "Item"
        WHERE
            "Item".pageId = ${pageId} AND
            "Item"."id" <> ${itemId} AND
            "Item"."id" NOT IN (SELECT "to" FROM Connection WHERE "from" = ${itemId})
    `
  }

  async getById(itemId: string): Promise<Item> {
    const result = await db.item.findUnique({ where: { id: itemId } })
    invariant(result)

    return result
  }

  async addMutualConnection(from: string, to: string) {
    await db.$transaction([
        db.connection.create({ data: { from: from, to: to } }),
        db.connection.create({ data: { from: to, to: from } })
      ]
    )
  }

  getConnectedItems(itemId: string): Promise<Array<Item>> {
    return db.$queryRaw<Array<Item>>`
      SELECT
        "Item".*
      FROM "Item"
        INNER JOIN "Connection"
            ON "Item"."id" = "Connection"."from"
      WHERE
        "Item"."id" <> ${itemId}
    `
  }

}