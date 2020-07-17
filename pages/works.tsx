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

export const getStaticProps: GetStaticProps = async () => {
  const worksData = getWorksData()
  return {
    props: {
      worksData
    }
  }
}

const Works = ({ worksData }: WorksProps): JSX.Element => {
  const [active, setActive] = useState<string>('')

  return (
    <Layout title='works'>
      <section className='section--wide'>
        <h1 className='sr-only'>Works</h1>
        <ul className='works'>
          {worksData.map((work: TWorkData) => {
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
