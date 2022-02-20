import { Page } from '~/infra/datasource/generated'

export interface PageRepository {

  insert: (projectId:string, name:string) => void

  findAll: (projectId: string) => Promise<Page[]>

  getById: (pageId: string) => Promise<(Page)>

}