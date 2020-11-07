import React, { FC, ReactNode } from 'react'
import Header from '../Header'
// import styles from './styles.module.scss'

export interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
