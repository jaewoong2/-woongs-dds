import React from 'react'
import { Anchor, NavContainer } from './Navigation.styles'

type Props = {
  children?: React.ReactNode
  gap?: string
}

export const Navigation = ({ children, gap }: Props) => {
  return <NavContainer gap={gap}>{children}</NavContainer>
}

const NavigationAnchor = ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <Anchor {...props}>{children}</Anchor>
}

Navigation.Anchor = NavigationAnchor
