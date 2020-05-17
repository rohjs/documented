import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'

import { DefaultLayout } from '../components/Layout'
import MarkdownRenderer from '../components/markdown/MarkdownRenderer'

const Loading = () => {
  return <div>Loading...</div>
}

type WorkProps = {
  source?: string
}

const Work = ({ source }: WorkProps): JSX.Element => {
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
      <section className='section'>
        {source ? <MarkdownRenderer source={source} /> : <Loading />}
      </section>
    </DefaultLayout>
  )
}

Work.getInitialProps = async ({ query }) => {
  const id = query.id
  const hostname =
    typeof window === 'undefined' ? 'http://localhost:3000' : location.origin
  const res = await fetch(`${hostname}/static/works/${id}.md`)
  const source = await res.text()

  return {
    source
  }
}

export default Work
