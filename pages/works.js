import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/layout/AppLayout'
import WorkItem from '../components/work/WorkItem'
import workData from '../static/data/works.json'

class Works extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeItem: false,
    }
  }

  updateActiveItem = (index) => {
    this.setState({
      activeItem: index,
    })
  }

  renderWorkItems = () => {
    const {
      activeItem
    } = this.state

    return workData.map((work, index) => {
      const {
        id,
        title,
        status,
        time,
        categories,
        description,
      } = work

      return <WorkItem key={`work-${index}`}
        id={id}
        index={index}
        title={title}
        status={status}
        time={time}
        categories={categories}
        description={description}
        isActive={index === activeItem ? true : false}
        updateActiveItem={this.updateActiveItem}
      />
    })
  }

  render () {
    return (
      <AppLayout>
        <Head>
          <title>works / roh woohyeon®</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <section className='section--wide'>
          <h1 className='sr-only'>Works</h1>
          <ul className='works'>
            { this.renderWorkItems() }
          </ul>
          {/* <p>(Updating...)</p> */}
        </section>
      </AppLayout>
    )
  }
}

export default Works