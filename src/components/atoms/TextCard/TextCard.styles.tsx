import { css } from '@emotion/react'
import styled from '@emotion/styled'

type StyleProps = {
  titleColor?: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
}

const getParagraphTypo = (size: StyleProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;
      `
    case 'md':
      return css`
        font-size: 24px;
        line-height: 34px;
        font-weight: 700;
        text-align: center;
      `

    case 'lg':
      return css`
        font-size: 32;
        line-height: 34px;
        text-align: center;
        font-weight: 700;
      `
  }
}

const getH4Typo = (size: StyleProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: 12px;
        line-height: 12px;
        font-weight: 600;
      `
    case 'md':
      return css`
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        font-weight: 600;
      `

    case 'lg':
      return css`
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;
      `
  }
}

export const Container = styled.section`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const H4 = styled.h4<StyleProps>`
  ${({ size }) => getH4Typo(size)}
  color: ${({ titleColor }) => titleColor};
`

export const P = styled.p<StyleProps>`
  ${({ size }) => getParagraphTypo(size)}
  color: ${({ color }) => color};
`
