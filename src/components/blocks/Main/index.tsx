import React, { PropsWithChildren } from 'react'
import { Column, MainContainer, MainWrapper } from './Main.styles'

export type MainProps = {
  backgroundColor?: string
}

export const Main = ({ children, backgroundColor }: PropsWithChildren<MainProps>) => {
  return (
    <MainContainer backgroundColor={backgroundColor}>
      <MainWrapper>{children}</MainWrapper>
    </MainContainer>
  )
}

Main.Column = Column
