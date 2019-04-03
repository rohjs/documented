import React from 'react'
import Sidebar from './Sidebar'
import ContentLayout from './ContentLayout'

const DefaultLayout = props => {
  return (
    <div id="app">
      <Sidebar />
      <ContentLayout>{props.children}</ContentLayout>

      <style global jsx>{`
        * {
          margin: 0;
          box-sizing: border-box;
          color: #292b2c;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI,
            Roboto, Helvetica Neue, Arial, sans-serif;
          line-height: 1.5;
          letter-spacing: -0.01em;
        }

        html {
          font-size: 15px;
          line-height: 1.5;
        }

        p {
          margin-bottom: 1rem;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          padding: 0;
          border: none;
          border-radius: 0;
          font-size: 1rem;
          line-height: inherit;
          background: transparent;
          box-shadow: none;
          cursor: pointer;
        }

        button:hover,
        button:focus,
        button:active {
          border: none;
          outline: none;
          box-shadow: none;
        }

        ul,
        ol {
          list-style-type: none;
          padding-left: 0;
        }

        .sr-only {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        .muted {
          opacity: 0.3;
        }

        em.wip {
          margin-left: 0.25rem;
          font-size: 0.875em;
        }

        #app {
          width: 100%;
          max-width: 1920px;
          margin: 0 auto;
        }

        .list-item h1 {
          font-weight: 400;
          font-size: 1rem;
          line-height: inherit;
          text-decoration: underline;
        }

        .list-item ul {
          display: none;
          margin-bottom: 1.2rem;
        }

        .list-item ul.active {
          display: block;
        }

        .list-item h1 button {
          text-decoration: underline;
        }

        .btn--back {
          position: relative;
          bottom: 1rem;
          display: none;
          line-height: 1.5rem;
        }

        .section,
        .section--wide {
          padding-bottom: 3rem;
        }

        ::-webkit-scrollbar-thumb,
        ::-webkit-scrollbar-track,
        ::-webkit-scrollbar {
          width: 0;
          background-color: transparent;
        }

        ::selection {
          background: #292b2c;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%;
        }

        .video {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
        }

        @media screen and (min-width: 568px) {
          html {
            font-size: 16px;
          }

          #app {
            width: 540px;
            margin: 0 auto;
          }
        }

        @media screen and (min-width: 768px) {
          html {
            font-size: 18px;
          }

          #app {
            display: flex;
            width: 100%;
            align-items: stretch;
            overflow: hidden;
          }

          .section,
          .section--wide {
            width: 100%;
            padding-bottom: 6rem;
            overflow: auto;
            margin-left: 5%;
          }

          .section {
            width: 85%;
          }

          .btn--back {
            display: inline-block;
          }
        }

        @media screen and (min-width: 992px) {
          html {
            font-size: 20px;
          }

          #main {
            padding-left: 4rem;
          }

          .section {
            width: 85%;
          }
        }

        @media screen and (min-width: 1200px) {
          #main {
            padding-left: 4rem;
          }

          .section {
            width: 80%;
          }

          .section--wide {
            width: 95%%;
          }
        }
      `}</style>
    </div>
  )
}

export default DefaultLayout
