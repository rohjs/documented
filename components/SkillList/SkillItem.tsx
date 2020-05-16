import React, { useState } from 'react'

type SkillItemProps = {
  title: string
  contents: string[]
}

const SkillItem = ({ title, contents }: SkillItemProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setActive(!active)
  }

  return (
    <li className='list-item'>
      <h1>
        <button type='button' onClick={handleClick}>
          {title}
        </button>
      </h1>

      <ul className={active ? 'active' : ''}>
        {contents.map((content, index) => {
          return <li key={`${title}-${index}`}>{content}</li>
        })}
      </ul>

      <style jsx>{``}</style>
    </li>
  )
}

export default SkillItem
