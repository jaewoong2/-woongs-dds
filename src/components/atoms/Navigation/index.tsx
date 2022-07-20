import React, { useState } from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { HamburgerIcon } from '../../icons/HamburgerIcon'
import { Anchor, DropBox, IconContainer, NavContainer } from './Navigation.styles'

type Props = {
  children?: React.ReactNode
  gap?: string
}

export const Navigation = ({ children, gap }: Props) => {
  const isMobile = useMediaQuery(`(max-width: 700px)`)
  const [isOpen, setIsOpen] = useState(false)

  if (isMobile) {
    return (
      <NavContainer>
        <IconContainer role="button" tabIndex={0} onClick={() => setIsOpen((prev) => !prev)} onKeyDown={() => {}}>
          <HamburgerIcon />
        </IconContainer>
        <DropBox isOpen={isOpen}>{children}</DropBox>
      </NavContainer>
    )
  }

  return <NavContainer gap={gap}>{children}</NavContainer>
}

const NavigationAnchor = ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <Anchor {...props}>{children}</Anchor>
}

Navigation.Anchor = NavigationAnchor
