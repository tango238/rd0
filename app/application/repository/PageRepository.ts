import { PageId } from '~/domain/model/page/PageId'
import { Page } from '~/domain/model/page/Page'
import { ProjectId } from '~/domain/model/project/Projectid'
import { PageName } from '~/domain/model/page/PageName'

export interface PageRepository {

  insert: (projectId: ProjectId, name: PageName) => void

  findAll: (projectId: ProjectId) => Promise<Page[]>

  getById: (pageId: PageId) => Promise<Page>

  getProjectIdById: (pageId: PageId) => Promise<ProjectId>

}