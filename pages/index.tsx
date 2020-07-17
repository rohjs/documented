import React from 'react'

import aboutList from '../static/data/about.json'
import { Layout, Skill } from '../components'

const Index = (): JSX.Element => (
  <div id='wrap'>
    <Layout>
      <section className='section'>
        <h1 className='srOnly'>About</h1>
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

        <ul>
          {Object.entries(aboutList).map(([skill, details]) => (
            <Skill key={`about-${skill}`} skill={skill} details={details} />
          ))}
        </ul>
      </section>
    </Layout>
  </div>
)

export default Index
