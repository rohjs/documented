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
      <section className='section'>
        <h1 className='sr-only'>
          Hello
        </h1>
        <div className='video-container'>
          <iframe
            src='https://player.vimeo.com/video/193120491?autoplay=1&title=0&byline=0&portrait=0'
            className='video'
            width='640'
            height='360'
            frameborder='0'
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen>
          </iframe>
        </div>
      </section>
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

