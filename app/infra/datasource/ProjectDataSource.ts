import { ProjectRepository } from '~/application/repository/ProjectRepository'
import { db } from '~/utils/db.server'
import { Project } from '~/infra/datasource/generated'

export class ProjectDataSource implements ProjectRepository {
  async insert(name: string) {
    await db.project.create({
      data: { name }
    })
  }

  findAll(): Promise<Array<Project>> {
    return db.project.findMany()
  }
}