import { Model } from '~/infra/datasource/generated'

export interface ModelRepository {

  insert: (pageId: string, name: string) => void

  findByPageId: (pageId: string) => Promise<Array<Model>>

}