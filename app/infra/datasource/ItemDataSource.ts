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
    return db.item.findMany({
      where: {
        pageId: pageId,
        NOT: { id: itemId }
      },
      include: {
        connections: {
          where: {
            NOT: {
              from: itemId
            }
          }
        }
      }
    })
  }

  async getById(itemId: string): Promise<Item> {
    const result = await db.item.findUnique({ where: { id: itemId } })
    invariant(result)

    return result
  }

}