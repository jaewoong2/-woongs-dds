import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../../styles/Typography'

export const NavContainer = styled.nav<{ gap?: string }>`
  width: fit-content;
  display: flex;
  gap: ${({ gap }) => gap ?? '20px'};
  position: relative;
`

export const Anchor = styled.a`
  ${getTypoStyle(Typography.Body2)};
  text-decoration: none;
  color: ${({ theme }) => theme.color.navButtonText};

  &:hover {
    color: ${({ theme }) => theme.color.primaryText};
  }
  transition: color 0.2s;
`
export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.color.buttonNormalBackGround};
  cursor: pinter;
`

export const DropBox = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    !isOpen
      ? css`
          width: 0;
          height: 0;
          opacity: 0;
          visibility: hidden;
        `
      : css`
          width: initial;
          height: initial;
          opacity: 1;
          visibility: visible;
        `}
  position: absolute;
  top: calc(100%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 2px 5px #00000060;
  right: 0;
  padding: 10px 20px;
  background-color: white;
  border-radius: 10px;
  transition: opacity 0.2s;
`
