import React from 'react'
import Link from 'next/link'
import cx from 'classnames'

type WorkBriefProps = {
  id: string
  time: number
  categories: string[]
  description: string
  active: boolean
}

const WorkBrief = ({
  active,
  id,
  time,
  categories,
  description
}: WorkBriefProps): JSX.Element => (
  <section className={cx('work-brief', { active })}>
    <Link href='/works/[id]' as={`/works/${id}`}>
      <a className='work-brief__link'>
        <dl>
          <dt className='sr-only'>Production year</dt>
          <dd>{time}</dd>
        </dl>

        <dl className='work-brief__categories'>
          <dt className='sr-only'>Category</dt>
          {categories.map((category: string) => (
            <dd key={`${id}-${category}`}>{category}</dd>
          ))}
        </dl>

        <p className='work-brief__description'>{description}</p>
      </a>
    </Link>
  </section>
)

export default WorkBrief
