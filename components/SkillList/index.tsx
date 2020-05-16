import React from 'react'

import aboutList from '../../static/data/about.json'
import SkillItem from './SkillItem'

const SkillList = (): JSX.Element => {
  return (
    <ul className='skill-list'>
      {Object.entries(aboutList).map(([title, contents]) => (
        <SkillItem key={title} title={title} contents={contents} />
      ))}
    </ul>
  )
}

export default SkillList
