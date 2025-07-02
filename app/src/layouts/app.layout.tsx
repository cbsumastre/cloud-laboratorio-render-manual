import React from 'react'
import * as classes from './app.layout.styles'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <>
      <main className={classes.content}>{children}</main>
    </>
  )
}
