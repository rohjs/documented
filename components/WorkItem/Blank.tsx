import React from 'react'
import cx from 'classnames'

type BlankProps = {
  active: boolean
}

const Blank = ({ active }: BlankProps): JSX.Element => (
  <section className={cx('work-brief', 'muted', { active })}>
    <p className='work-brief__description text--muted'>
      <em>Will be updated soon.</em>
    </p>
  </section>
)

export default Blank
