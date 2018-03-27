import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/Layout/AppLayout'

const Index = () => (
  <div id='wrap'>
    <Head>
      <title>Roh Woohyeon</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <AppLayout>
      <Head>
        <title>roh woohyeon®</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
    </AppLayout>
    <style jsx>{`
      .video-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
      }
      .video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

export default Index

