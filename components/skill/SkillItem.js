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
        .list-item ul {
          display: none;
          margin-bottom: 1rem;
        }

        .list-item ul.active {
          display: block;
        }

        .list-item h1 button {
          text-decoration: underline;
        }

        .list-item .inactive {
          display: none;
        }
      `}</style>
    </li>
  }
}

export default SkillItem