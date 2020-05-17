import React from 'react'
import cx from 'classnames'
import Link from 'next/link'

interface WorkItemProps {
  id: string
  title: string
  status: string
  time: string
  categories: string[]
  description: string
  index: number
  active: boolean
  updateActiveItem: Function
}

const WorkItem = ({
  id,
  title,
  status,
  time,
  categories,
  description,
  index,
  active,
  updateActiveItem
}: WorkItemProps) => {
  const handleClick = () => {
    updateActiveItem(index)
  }

  return (
    <li className='list-item'>
      {status ? (
        <>
          <h1>
            <button type='button' onClick={handleClick}>
              {title}
            </button>
          </h1>

          <section className={cx('work-brief', { active })}>
            <a href={`/work/${id}`} className='work-brief__link'>
              <dl>
                <dt className='sr-only'>Production year</dt>
                {typeof time === 'number' ? (
                  <dd>{time}</dd>
                ) : (
                  <dd>
                    <span className='sr-only'>From</span>
                    {time[0]}
                    <span className='sr-only'>to</span>
                    <span>-</span>
                    {time[1]}
                  </dd>
                )}
              </dl>

              <dl className='work-brief__categories'>
                <dt className='sr-only'>Category</dt>
                {categories.map((item, i) => {
                  return <dd key={`work-brief-${i}`}>{item}</dd>
                })}
              </dl>

              <p className='work-brief__description'>{description}</p>
            </a>
          </section>
        </>
      ) : (
        <>
          <h1>
            <button type='button' onClick={handleClick}>
              {title}
            </button>
            <em className='wip'>⚡</em>
          </h1>

          <section className={`work-brief muted${active ? ' active' : ''}`}>
            <p className='work-brief__description text--muted'>
              <em>Will be updated soon.</em>
            </p>
          </section>
        </>
      )}
    </li>
  )
}

export default WorkItem
