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
            <Link href='https://github.com/whroh'>
              <a>
                Github
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/whroh'>
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
        <style jsx>{`
          .sidebar {
            position: relative;
            padding-top: 16px;
            padding-bottom: 24px;
            padding-left: 15px;
            padding-right: 15px;
          }
          .name {
            padding-top: 16px;
            font-size: 15px;
            font-weight: 400;
            line-height: 1.45;
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
            margin-top: 48px;
          }
          .links a {
            border-bottom: 2px solid;
          }
          .year sup {
            position: relative;
            top: 3px;
            right: 1px;
            font-size: 20px;
            font-weight: 700;
          }
          .year {
            position: absolute;
            top: 20px;
            right: 15px;
          }

          @media screen and (min-width: 400px) {
            .sidebar {
              padding-left: 20px;
              padding-right: 20px;
            }
          }

          @media screen and (min-width: 720px) {
            .sidebar {
              width: 33.333333333%;
              padding-left: 50px;
              padding-right: 0;
            }

            .year {
              position: absolute;
              top: initial;
              bottom: 24px;
              left: 50px;
              right: initial;
              margin-bottom: 0;
            }
          }

          @media screen and (min-width: 960px) {
            .sidebar {
              position: relative;
              height: 100vh;
              padding-top: 16px;
              padding-bottom: 24px;
            }
            .name {
              font-size: 20px;
              line-height: 1.333333333;
            }
            .info {
              margin-top: 136px;
            }
          }
        `}</style>
      </header>
    )
  }
}

export default Sidebar