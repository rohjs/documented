import React from 'react'
import Sidebar from './Sidebar'
import MainLayout from './MainLayout'

const AppLayout = (props) => {
  return (
    <div id='app'>
      <Sidebar />
      <MainLayout>
        { props.children }
      </MainLayout>

      <style global jsx>{`
        * {
          margin: 0;
          box-sizing: border-box;
          color: #292b2c;
          font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
          letter-spacing: -.01em;
        }

        html {
          font-size: 15px;
          line-height: 1.55;
        }

        p {
          margin-bottom: 1rem;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        a:not(.link, .inactive, .active):hover {
          border-bottom: 2px solid;
        }

        button {
          padding: 0;
          border: none;
          border-radius: 0;
          font-size: 1rem;
          line-height: 1.45;
          background: transparent;
          box-shadow: none;
          cursor: pointer;
        }

        button:hover,
        button:focus,
        button:active {
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

        #app {
          width: 100%;
          max-width: 1920px;
          margin: 0 auto;
        }

        .list-item {
          margin-bottom: 4px;
        }

        .list-item h1 {
          font-size: 1rem;
          line-height: 1.45;
        }

        .list-item ul {
          display: none;
          margin-bottom: 24px;
        }

        .list-item ul.active {
          display: block;
        }

        .list-item li {
          margin-bottom: 4px;
        }

        .list-item h1 button {
          border-bottom: 2px solid;
          margin-bottom: 4px;
        }

        .btn--back {
          position: relative;
          bottom: 1.5rem;
          display: none;
          line-height: 32px;
        }

        .section {
          padding-bottom: 3rem;
        }

        @media screen and (min-width: 768px) {
          html {
            font-size: 18px;
            line-height: 1.5;
          }

          #app {
            display: flex;
            height: 100vh;
            align-items: stretch;
            overflow: hidden;
          }

          .section {
            width: 85%;
            padding-bottom: 6rem;
            overflow: auto;
          }

          .btn--back {
            display: inline-block;
          }
        }

        ::-webkit-scrollbar-thumb,
        ::-webkit-scrollbar-track,
        ::-webkit-scrollbar {
          width: 0;
          background-color: transparent;
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

        @media screen and (min-width: 992px) {
          html {
            font-size: 20px;
          }

          button {
            font-size: 1rem;
            line-height: 1.5;
          }

          .list-item h1 {
            font-size: 1rem;
            line-height: 1.333333333;
          }

          .section {
            width: 80%;
          }
        }

        @media screen and (min-width: 1200px) {
          .section {
            width: 72%;
          }
		    }
    `}</style>
    </div>
  )
}

export default AppLayout