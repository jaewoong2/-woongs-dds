import styled from '@emotion/styled'
import { MainProps } from '.'
import { getTypoStyle, Typography } from '../../../styles/Typography'

export const MainContainer = styled.div<MainProps>`
  width: 100%;
  background-color: ${({ backgroundColor, theme }) => backgroundColor ?? theme.color.bannerBackGround};
  display: flex;
  justify-content: center;
  border-radius: 16px;
`

export const MainWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoint.maxWidth};
  display: flex;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${getTypoStyle(Typography.Title2)}
  padding: 20px 0;
`
