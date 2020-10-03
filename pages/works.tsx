import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import { getWorksData } from '../lib/works'
import { Layout, WorkItem } from '../components'

type TWorkData = {
  id: string
  title: string
  status: boolean
  time: number
  categories: string[]
  description: string
}

type WorksProps = {
  worksData: TWorkData[]
}

const Works = ({ worksData }: WorksProps): JSX.Element => {
  const [active, setActive] = useState<string>('')
  const sortedWorksData = worksData.sort((a, b) => {
    if (a.time > b.time) return -1
    if (a.time < b.time) return 1
    return 0
  })

  return (
    <Layout title='works'>
      <section className='sectionWide'>
        <h1 className='srOnly'>Works</h1>
        <ul className='works'>
          {sortedWorksData.map((work: TWorkData) => {
            const { id, title, status, time, categories, description } = work
            return (
              <WorkItem
                key={`work-${id}`}
                id={id}
                title={title}
                status={status}
                time={time}
                categories={categories}
                description={description}
                active={id === active}
                setActive={setActive}
              />
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default Works

export const getStaticProps: GetStaticProps = async () => {
  const worksData = getWorksData()
  return {
    props: {
      worksData
    }
  }
}
