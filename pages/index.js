import React from 'react'
import Head from 'next/head'
import DefaultLayout from '../components/layout/DefaultLayout'
import SkillItem from '../components/skill/SkillItem'
import aboutList from '../static/data/about.json'

const Index = () => (
  <div id="wrap">
    <DefaultLayout>
      <Head>
        <title>roh woohyeon®</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <section className="section">
        <h1 className="sr-only">Hello</h1>
        <div className="images">
          <div className="image">
            <img src="/static/images/computer-01.jpg" alt="Roh Woohyeon" />
          </div>
          <div className="image">
            <img src="/static/images/computer-02.jpg" alt="Roh Woohyeon" />
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="sr-only">About</h1>
        <p>
          Hello, I’m Woohyeon Roh, a UI/UX developer based in South Korea. For
          past 3+ years, I've worked as a both designer and frontend developer
          with a UX driven background. Typography passionate, clean and pure
          code pursuing, I bridge the gap between design and development. I am
          able to quickly adapt to new challenges. Being quite hands-on, I enjoy
          getting involved in the whole process, starting from ideation and
          conceptualizing to designing, prototyping, and building. I also love
          learning new stuff and endeavor to quickly follow latest trend of
          technology.
        </p>
        <ul className="skill-list">
          {Object.entries(aboutList).map(([title, contents], index) => (
            <SkillItem key={index} title={title} contents={contents} />
          ))}
        </ul>
      </section>
    </DefaultLayout>
    <style jsx>{`
      p {
        margin-bottom: 1rem;
      }

      img {
        width: 100%;
        height: auto;
      }

      .image {
        width: 100%;
        margin-bottom: 1rem;
      }

      @media screen and (min-width: 768px) {
        .images {
          overflow-x: hidden;
          width: 100%;
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
)

export default Index
