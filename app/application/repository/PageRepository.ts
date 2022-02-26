import { PageId } from '~/domain/model/diagram/page/PageId'
import { Page } from '~/domain/model/diagram/page/Page'
import { ProjectId } from '~/domain/model/diagram/project/ProjectId'
import { PageName } from '~/domain/model/diagram/page/PageName'

export interface PageRepository {

  insert: (projectId: ProjectId, name: PageName) => void

  findAll: (projectId: ProjectId) => Promise<Page[]>

  getById: (pageId: PageId) => Promise<Page>

  getProjectIdById: (pageId: PageId) => Promise<ProjectId>

}