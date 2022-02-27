import { PageId } from '~/domain/model/board/page/PageId'
import { Page } from '~/domain/model/board/page/Page'
import { ProjectId } from '~/domain/model/board/project/ProjectId'
import { PageName } from '~/domain/model/board/page/PageName'

export interface PageRepository {

  insert: (projectId: ProjectId, name: PageName) => void

  findAll: (projectId: ProjectId) => Promise<Page[]>

  getById: (pageId: PageId) => Promise<Page>

  getProjectIdById: (pageId: PageId) => Promise<ProjectId>

}