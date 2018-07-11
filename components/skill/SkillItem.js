import React from 'react'

class SkillItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false,
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    const {
      isActive
    } = this.state
    this.setState({
      isActive: !isActive
    })
  }

  renderSkillItems = () => {
    const {
      contents,
    } = this.props

    if (contents) {
      return contents.map((content, index) => {
        return (
          <li key={`list-content-${index}`}>
            {content}
          </li>
        )
      })
    }

    return null
  }

  render () {
    const {
      title,
    } = this.props

    return <li className='list-item'>
      <h1>
        <button
          type='button'
          onClick={this.handleClick}
        >
          {title}
        </button>
      </h1>

      <ul className={this.state.isActive ? 'active' : ''}>
        { this.renderSkillItems() }
      </ul>

      <style jsx>{`
        .list-item {
          margin-bottom: 2px;
        }

        .list-item h1 {
          font-size: 1rem;
          line-height: 1.45;
        }

        .list-item ul {
          display: none;
          margin-bottom: 24px;
        }

        .list-item ul.active {
          display: block;
        }

        .list-item li {
          margin-bottom: 4px;
        }

        .list-item h1 button {
          border-bottom: 2px solid;
          margin-bottom: 4px;
        }

        .list-item .inactive {
          display: none;
        }

        @media screen and (min-width: 992px) {
          .list-item h1 {
            font-size: 1rem;
            line-height: 1.5;
          }
        }
      `}</style>
    </li>
  }
}

export default SkillItem