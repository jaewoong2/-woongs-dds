import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../../styles/Typography'
import { SearchInputContainer } from './index'

const getSize = (size?: 'sm' | 'md' | 'lg' | 'full') => {
  if (size === 'sm') {
    return css`
      width: 200px;
      font-size: 14px;
    `
  }

  if (size === 'md') {
    return css`
      width: 310px;
      font-size: 16px;
    `
  }

  if (size === 'lg') {
    return css`
      width: 620px;
      font-size: 18px;
    `
  }

  if (size === 'full') {
    return css`
      width: calc(100% - 50px);
      margin: 0 auto;
      font-size: 20px;
    `
  }
  return css``
}

export const InputContainer = styled.div<SearchInputContainer>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 8px;
  ${({ backgroundColor, fontSize, color, borderRadius, size, isTyped }) => css`
    background-color: ${backgroundColor};
    font-size: ${fontSize};
    color: ${color};
    border-radius: ${borderRadius};
    ${getSize(size)}

    ${isTyped &&
    css`
      .placeholder {
        width: fit-content;
        overflow: auto;
        white-space: normal;
        font-size: inherit;
        transform: translateY(-100%);
        transition: transform 0.4s ease;
      }
    `}
  `}
  ${getTypoStyle(Typography.Subtitle2)};
  box-shadow: 1px 1px 2px #00000033;
  position: relative;
`

export const Label = styled.label`
  width: calc(100% - 50px);
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus-within {
    .placeholder {
      width: fit-content;
      overflow: auto;
      white-space: normal;
      font-size: inherit;
      transform: translateY(-100%);
      transition: transform 0.4s ease;
    }
  }
`

export const PlaceHolder = styled.p<SearchInputContainer>`
  position: absolute;
  width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: inherit;
  padding: 10px 4px;
  left: 10px;
  cursor: text;
  transition: transform 0.4s ease;
  color: ${({ placeholderColor }) => placeholderColor};
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 10px;
  color: inherit;
  font-size: inherit;
`
