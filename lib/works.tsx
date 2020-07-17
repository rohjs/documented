import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dirPath = path.join(process.cwd(), '/static/works')

export function getAllWorkIds() {
  const fileNames = fs.readdirSync(dirPath)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getWorksData() {
  const fileNames = fs.readdirSync(dirPath)
  const worksData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(dirPath, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  return worksData
}

export function getWorkData(id: string): string {
  const filePath = path.join(dirPath, `${id}.md`)
  const workData = fs.readFileSync(filePath, 'utf-8')

  return workData
}
