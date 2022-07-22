import React from 'react'
import { Header, Main } from '../../blocks'

type HomeProps = {
  a?: string
}

export const Home = ({}: HomeProps) => {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}
