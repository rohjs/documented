import React from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'

type ContentLayoutProps = {
  children?: JSX.Element | JSX.Element[]
}

const ContentLayout = ({ children }: ContentLayoutProps): JSX.Element => {
  const { pathname } = useRouter()

  return (
    <main id='main'>
      <nav className='gnb'>
        <h1 className='sr-only'>Menu</h1>
        <ul className='gnb-menu'>
          <li className={cx({ active: pathname === '/' })}>
            <a href='/'>Index</a>
          </li>
          <li
            className={cx({
              active: pathname === '/work' || pathname === '/works',
            })}>
            <a href='/works'>Works</a>
          </li>
        </ul>
      </nav>

      {children}
    </main>
  )
}

export default ContentLayout
