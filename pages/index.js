import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/layout/AppLayout'

const Index = () => <div id='wrap'>
  <AppLayout>
    <Head>
      <title>roh woohyeon®</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <section className='section'>
      <h1 className='sr-only'>
        Hello
      </h1>
    </section>
  </AppLayout>

</div>


export default Index

