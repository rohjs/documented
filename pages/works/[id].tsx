import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { getAllWorkIds, getWorkData } from '../../lib/works'
import { Layout, Loading, MarkdownRenderer } from '../../components'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllWorkIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const workData = getWorkData(params.id as string)
  return {
    props: {
      workData
    }
  }
}

const Work = ({ workData }): JSX.Element => {
  return (
    <Layout title='works'>
      <section className='section'>
        {workData ? <MarkdownRenderer source={workData} /> : <Loading />}
      </section>
    </Layout>
  )
}

export default Work
