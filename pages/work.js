import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/layout/AppLayout'
import MarkdownRenderer from '../components/markdown/MarkdownRenderer'
import fetch from 'isomorphic-unfetch'

const Loading = () => {
  return <div>
    Loading...
  </div>
}

class Work extends React.Component {
  static async getInitialProps ({query}) {
    const id = query.id
    const hostname = typeof window === 'undefined'
      ? 'http://localhost:3000'
      : location.origin

    const res = await fetch(`${hostname}/static/works/${id}.md`)
    const source = await res.text()

    return {
      source
    }
  }

  renderWork = () => {
    const {
      source
    } = this.props

    if (source) {
      return <>
        <MarkdownRenderer source={source}/>
      </>
    }

    return <Loading/>
  }

  render () {

    return (
      <AppLayout>
        <Head>
          <title>works / roh woohyeon®</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>

        <section className='section'>
          {this.renderWork()}
        </section>
      </AppLayout>
    )
  }
}

export default Work