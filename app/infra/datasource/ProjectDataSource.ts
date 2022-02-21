import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { db } from '~/utils/db.server'
import { Project } from '~/infra/datasource/generated'
import invariant from 'tiny-invariant'

export class ProjectDataSource implements ProjectRepository {
  async insert(name: string) {
    await db.project.create({
      data: { name }
    })
  }

  findAll(): Promise<Array<Project>> {
    return db.project.findMany()
  }

  async getById(projectId: string): Promise<Project> {
    const result = await db.project.findUnique({ where: { id: projectId } })
    invariant(result)
    return result
  }
}