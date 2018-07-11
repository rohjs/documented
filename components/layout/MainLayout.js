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
          padding: 2rem 1rem;
        }

        .gnb {
          padding-bottom: 0;
          margin-bottom: 3rem;
        }

        .gnb ul {
          display: flex;
        }

        .gnb li {
          margin-right: 1.5rem;
        }

        .active {
          border-bottom: 2px solid;
        }

        @media screen and (min-width: 400px) {
          #main {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media screen and (min-width: 768px) {
          #main {
            width: 66.6666666666%;
            height: 100vh;
            padding: 50px;
            padding-bottom: 24px;
          }

          .gnb {
            margin-bottom: 4rem;
          }

          .gnb ul {
            margin-bottom: 0;
          }

          .gnb li {
            margin-right: 2rem;
          }
        }

        @media screen and (min-width: 992px) {
          .gnb {
            margin-bottom: 136px;
          }
        }
      `}</style>
    </main>
  }
}


export default withRouter(MainLayout)