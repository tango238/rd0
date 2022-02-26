import invariant from 'tiny-invariant'
import { db } from '~/utils/db.server'
import { Project as ProjectRow } from '~/infra/datasource/generated'
import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { Project } from '~/domain/model/diagram/project/Project'
import { ProjectId } from '~/domain/model/diagram/project/ProjectId'
import { ProjectName } from '~/domain/model/diagram/project/ProjectName'

export class ProjectDataSource implements ProjectRepository {

  async insert(name: ProjectName) {
    await db.project.create({
      data: { name: name.value }
    })
  }

  async findAll(): Promise<Array<Project>> {
    const rows = await db.project.findMany()
    return rows.map(row => ProjectDataSource.toProject(row))
  }

  async getById(projectId: ProjectId): Promise<Project> {
    const result = await db.project.findUnique({ where: { id: projectId.value } })
    invariant(result)
    return ProjectDataSource.toProject(result)
  }

  private static toProject(row: ProjectRow) {
    return new Project(ProjectId.of(row.id), ProjectName.of(row.name))
  }
}