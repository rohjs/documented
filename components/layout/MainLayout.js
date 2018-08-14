import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

class MainLayout extends React.Component {
  render () {
    const {
      pathname
    } = this.props.router

    return <main id='main'>
      <nav className='gnb'>
        <h1 className='sr-only'>
          메뉴
        </h1>
        <ul>
          <li>
            <Link href='/'>
              <a className={pathname === '/' ? 'active' : ''}>
                Index
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className={pathname === '/about' ? 'active' : ''}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href='/works'>
              <a className={pathname === '/works' || pathname === '/work' ? 'active' : ''}>
                Works
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      { this.props.children }

      <style jsx>{`
        #main {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 0 1.5rem;
        }

        .gnb {
          padding-bottom: 0;
          margin-bottom: 3rem;
        }

        .gnb ul {
          display: flex;
        }

        .gnb li {
          margin-right: .75rem;
        }

        .active {
          text-decoration: underline;
        }

        @media screen and (min-width: 568px) {
          #main {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        @media screen and (min-width: 768px) {
          #main {
            width: 60%;
            height: 100vh;
            padding: 50px;
            padding-bottom: 1rem;
          }

          .gnb {
            width: 90%;
            margin-left: 5%;
            margin-bottom: 4rem;
          }

          .gnb ul {
            margin-bottom: 0;
          }

          .gnb li {
            margin-right: 1.5rem;
          }
        }

        @media screen and (min-width: 992px) {
          #main {
            width: 70%;
          }
          .gnb {
            margin-bottom: 5rem;
          }
        }
      `}</style>
    </main>
  }
}


export default withRouter(MainLayout)