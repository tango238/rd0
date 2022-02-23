import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { db } from '~/utils/db.server'
import { Project as ProjectRow } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'
import { Project } from '~/domain/model/project/Project'
import { ProjectId } from '~/domain/model/project/Projectid'
import { ProjectName } from '~/domain/model/project/ProjectName'

export class ProjectDataSource implements ProjectRepository {
  async insert(name: ProjectName) {
    await db.project.create({
      data: { name: name.value }
    })
  }

  async findAll(): Promise<Array<Project>> {
    const rows = await db.project.findMany()
    const result = rows.map(row => ProjectDataSource.toProject(row))
    console.log(result)
    return result
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