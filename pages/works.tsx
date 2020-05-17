import React, { useState } from 'react'
import Head from 'next/head'
import DefaultLayout from '../components/Layout/DefaultLayout'
import WorkItem from '../components/work/WorkItem'
import workData from '../static/data/works.json'

type TWork = {
  id: string
  title: string
  status: boolean
  time: number
  categories: string[]
  description: string
}

const Works = (): JSX.Element => {
  const [activeWork, setActiveWork] = useState<number | null>(null)

  return (
    <DefaultLayout>
      <Head>
        <title>works / roh woohyeon®</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
          key='viewport'
        />
      </Head>
      <section className='section--wide'>
        <h1 className='sr-only'>Works</h1>
        <ul className='works'>
          {workData.map((work, index) => {
            const {
              id,
              title,
              status,
              time,
              categories,
              description
            } = work as TWork

            return (
              <WorkItem
                key={`work-${index}`}
                id={id}
                index={index}
                title={title}
                status={status}
                time={time}
                categories={categories}
                description={description}
                active={index === activeWork}
                setActiveWork={setActiveWork}
              />
            )
          })}
        </ul>
      </section>
    </DefaultLayout>
  )
}

export default Works
