import { PrismaClient } from '~/infra/datasource/generated'

const db = new PrismaClient()

seed()

async function seed() {
  const project = await db.project.create({ data: getProject() })
  await Promise.all(
    getPages().map(page => {
      return db.page.create({
        data: {
          projectId: project.id,
          level: page.level,
          name: page.name
        }
      })
    })
  )
  await Promise.all((
    getCategories().map(category => {
      return db.category.create({
        data: {
          projectId: project.id,
          name: category.name
        }
      })
    })
  ))
}

function getProject() {
  return { name: 'RDRA' }
}

function getPages() {
  return [
    { level: 1, name: '要求モデル' },
    { level: 2, name: 'システムコンテキスト' },
    { level: 3, name: 'ビジネスコンテキスト' },
    { level: 4, name: 'ビジネスユースケース' },
    { level: 5, name: '業務フロー' },
    { level: 6, name: '利用シーン' },
    { level: 7, name: 'UC複合図' },
  ]
}

function getCategories() {
  return [
    { name: 'Actor' },
    { name: 'BUC' },
    { name: 'Activity' },
    { name: 'UC' },
  ]
}