import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios, { AxiosResponse, AxiosError } from 'axios'
import { useRouter } from 'next/router'

import { getAllWorkIds, getWorkData } from '../../lib/works'
import { DefaultLayout } from '../../components/Layout'
import MarkdownRenderer from '../../components/markdown/MarkdownRenderer'

const Loading = () => {
  return <div>Loading...</div>
}

const Work = ({ workData }): JSX.Element => {
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
        {workData ? <MarkdownRenderer source={workData} /> : <Loading />}
      </section>
    </DefaultLayout>
  )
}

export default Work

export async function getStaticPaths() {
  const paths = getAllWorkIds()
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const workData = getWorkData(params.id)
  return {
    props: {
      workData
    }
  }
}
