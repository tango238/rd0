import { PrismaClient } from '~/infra/datasource/generated'

const db = new PrismaClient()

async function seed() {
  await Promise.all(
    getProjects().map(p => {
      return db.project.create({ data: p })
    })
  )
}

seed()

function getProjects() {
  return [
    { name: 'sample' }
  ]
}