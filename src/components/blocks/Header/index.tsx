import React from 'react'
import { HeaderContainer } from './Header.styles'

type Props = {
  children?: React.ReactNode
}

export const Header = ({ children }: Props) => {
  return <HeaderContainer>{children}</HeaderContainer>
}
