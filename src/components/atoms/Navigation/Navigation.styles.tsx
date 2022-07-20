import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../../styles/Typography'

export const NavContainer = styled.nav<{ gap?: string }>`
  width: fit-content;
  display: flex;
  gap: ${({ gap }) => gap ?? '20px'};
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
