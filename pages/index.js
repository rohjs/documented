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
      <div className='images'>
        <div className='image'>
          <img src='/static/images/computer-01.jpg'
            alt='Roh Woohyeon' />
        </div>
        <div className='image'>
          <img src='/static/images/computer-02.jpg'
            alt='Roh Woohyeon' />
        </div>
      </div>
    </section>
  </AppLayout>
  <style jsx>{`
    img {
      width: 100%;
      height: auto;
    }

    .image {
      width: 100%;
      margin-bottom: 1rem;
    }

    .images {
      margin-top: 3rem;
    }

    @media screen and (min-width: 768px) {
      .images {
        overflow-x: hidden;
        width: 100%;
        margin-top: 0;
      }

    }

    @media screen and (min-width: 992px) {
      .images {
        display: flex;
        align-items: flex-start;
      }

      .image:first-child {
        margin-right: 1rem;
      }

      .image {
        max-width: 50%;
      }
    }
  `}</style>
</div>


export default Index

