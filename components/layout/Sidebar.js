import React from 'react'
import Link from 'next/link'
import Perks from './Perks'

class Sidebar extends React.Component {
  render() {
    return (
      <header className="sidebar">
        <h1 className="name">
          <Link href="/">
            <a>
              roh woohyeon <sup>TM</sup>
            </a>
          </Link>
        </h1>
        <div className="sidebar__content">
          <div className="info">
            <Link href="mailto:roh.woohyeon@gmail.com">
              <a>roh.woohyeon@gmail.com</a>
            </Link>
            <p className="text">Seoul, Korea</p>
          </div>
          <div className="contact">
            <ul className="links">
              <li>
                <Link href="https://github.com/rohjs">
                  <a target="_blank">Github →</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/woohyeon.roh">
                  <a target="_blank">Facebook →</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UCFDbz39kFPvU0AUpgHx4ICw">
                  <a target="_blank">Youtube →</a>
                </Link>
              </li>
            </ul>
            <Perks />
          </div>
          <p className="year">
            2016/2019 <sup>®</sup>
          </p>
        </div>

        <style jsx>{`
          .sidebar {
            position: relative;
            padding: 1.5rem;
            padding-bottom: 2rem;
          }

          .name {
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.5;
          }

          .text {
            margin-bottom: 0;
          }

          .name a:hover {
            text-decoration: none;
          }

          .name sup {
            margin-left: -2px;
            font-size: 0.5rem;
            font-weight: 700;
            letter-spacing: -0.01em;
          }

          .info {
            margin-top: 1rem;
          }

          .links {
            margin-top: 1rem;
          }

          .links a {
            text-decoration: underline;
          }

          .year sup {
            position: relative;
            top: 3px;
            right: 2px;
            font-size: 1rem;
            font-weight: 500;
          }

          .year {
            position: absolute;
            top: 17px;
            right: 1rem;
          }

          .perks {
            display: none;
          }

          .contact {
            display: flex;
          }

          .contact .links {
            min-width: 50%;
          }

          @media screen and (min-width: 540px) {
            .year {
              top: 19px;
              right: 1.5rem;
            }
          }

          @media screen and (min-width: 768px) {
            .sidebar {
              width: 40%;
              padding-top: 50px;
              padding-left: 50px;
              padding-right: 0;
              padding-bottom: 50px;
            }

            .sidebar__content {
              display: block;
              margin-top: 4rem;
            }

            .text {
              margin-bottom: 1rem;
            }

            .year {
              position: absolute;
              top: initial;
              bottom: 24px;
              left: 50px;
              right: initial;
              margin-bottom: 0;
            }

            .links {
              margin: 1rem 0;
            }

            .perks {
              display: block;
            }

            .info {
              margin-top: 0;
            }
            u .name {
              line-height: 1.5;
            }

            .contact {
              display: block;
            }
          }

          @media screen and (min-width: 992px) {
            .sidebar {
              position: relative;
              width: 30%;
              height: 100vh;
              padding: 50px;
              padding-bottom: 1rem;
            }

            .sidebar__content {
              margin-top: 5rem;
            }
            .perks {
              margin-top: 3rem;
            }
          }
        `}</style>
      </header>
    )
  }
}

export default Sidebar
