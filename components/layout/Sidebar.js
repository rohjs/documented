import React from 'react'
import Link from 'next/link'

class Sidebar extends React.Component {
  render () {
    return (
      <header className='sidebar'>
        <h1 className='name'>
          <Link href='/'>
            <a>
              roh woohyeon <sup>TM</sup>
            </a>
          </Link>
        </h1>
        <div className='sidebar__content'>
          <div className='info'>
            <Link href='mailto:roh.woohyeon@gmail.com'>
              <a>
                roh.woohyeon@gmail.com
              </a>
            </Link>
            <p className='text'>
              Seoul, Korea
            </p>
          </div>
          <ul className='links'>
            <li>
              <Link href='https://github.com/rohjs'>
                <a>
                  Github
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://github.com/rohjs'>
                <a>
                  LinkedIn
                </a>
              </Link>
            </li>
            <li>
              <p className='year'>
                2016/2018 <sup>®</sup>
              </p>
            </li>
          </ul>
        </div>
        <style jsx>{`
          .sidebar {
            position: relative;
            padding-top: 2rem;
            padding-left: 15px;
            padding-right: 15px;
          }

          .sidebar__content {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }

          .name {
            font-size: 15px;
            font-weight: 400;
            line-height: 1.5;
          }

          .text {
            margin-bottom: 0;
          }

          .name a:hover {
            text-decoration: none;
            border-bottom: none;
          }

          .name sup {
            font-size: 10px;
            font-weight: 700;
          }

          .info {
            margin-top: 1.5rem;
          }

          .links li {
            margin-bottom: 2px;
          }
          .links a {
            border-bottom: 2px solid;
          }
          .year sup {
            position: relative;
            top: 3px;
            right: 1px;
            font-size: 1rem;
            font-weight: 700;
          }
          .year {
            position: absolute;
            top: 20px;
            right: 15px;
          }

          .language {
            margin-top: 3rem;
          }

          @media screen and (min-width: 400px) {
            .sidebar {
              padding-left: 20px;
              padding-right: 20px;
            }
          }

          @media screen and (min-width: 768px) {
            .sidebar {
              width: 33.333333333%;
              padding-left: 50px;
              padding-right: 0;
              padding-bottom: 24px;
            }

            .sidebar__content {
              display: block;
            }

            .text {
              margin-bottom: 1.5rem;
            }

            .year {
              position: absolute;
              top: initial;
              bottom: 24px;
              left: 50px;
              right: initial;
              margin-bottom: 0;
              height: 32px;
            }

            .links li {
              margin-bottom: 8px;
            }

            .sidebar__content {
              margin-top: 4rem;
            }

            .info {
              margin-top: 0;
            }

            .name {
              font-size: 1rem;
              line-height: 1.5;
            }
          }

          @media screen and (min-width: 992px) {
            .sidebar {
              position: relative;
              height: 100vh;
              padding-bottom: 24px;
            }

            .name {
              font-size: 1rem;
            }

            .sidebar__content {
              margin-top: 136px;
            }
          }
        `}</style>
      </header>
    )
  }
}

export default Sidebar