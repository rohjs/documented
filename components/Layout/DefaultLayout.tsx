import React from 'react'

import Sidebar from './Sidebar'
import ContentLayout from './ContentLayout'

type DefaultLayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <div id='app'>
      <Sidebar />
      <ContentLayout>{children}</ContentLayout>
    </div>
  )
}

export default DefaultLayout
