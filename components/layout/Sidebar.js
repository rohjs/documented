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
                  Github →
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://github.com/rohjs'>
                <a>
                  LinkedIn →
                </a>
              </Link>
            </li>
          </ul>
          <p className='perks'>
            Form follows function.
          </p>
          <p className='year'>
            2016/2018 <sup>®</sup>
          </p>
        </div>
        <style jsx>{`
          .sidebar {
            position: relative;
            padding: 2rem 1.5rem;
          }

          .sidebar__content {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }

          .name {
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
          }

          .text {
            margin-bottom: 0;
          }

          .name a:hover {
            text-decoration: none;
          }

          .name sup {
            font-size: .5rem;
            font-weight: 700;
          }

          .info {
            margin-top: 1.5rem;
          }

          .links a {
            text-decoration: underline;
          }

          .year sup {
            position: relative;
            top: 3px;
            right: 2px;
            font-size: 1rem;
            font-weight: 400;
          }

          .year {
            position: absolute;
            top: 20px;
            right: 15px;
          }

          .perks {
            display: none;
          }

          @media screen and (min-width: 400px) {
            .sidebar {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
            }
          }

          @media screen and (min-width: 768px) {
            .sidebar {
              width: 33.333333333%;
              padding-top: 50px;
              padding-left: 50px;
              padding-right: 0;
              padding-bottom: 24px;
            }

            .sidebar__content {
              display: block;
              margin-top: 4rem;
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

            .links {
              margin-bottom: 1.5rem;
            }

            .links li {
              margin-bottom: 2px;
            }

            .perks {
              display: block;
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
              margin-top: 6rem;
            }
          }
        `}</style>
      </header>
    )
  }
}

export default Sidebar