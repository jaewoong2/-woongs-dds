import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { getTypoStyle, Typography } from '../../../styles/Typography'
import { SearchInputContainer } from './index'

const getSize = (size?: 'sm' | 'md' | 'lg' | 'full') => {
  if (size === 'sm') {
    return css`
      max-width: 200px;
      font-size: 14px;
      height: 20px;
    `
  }

  if (size === 'md') {
    return css`
      max-width: 310px;
      font-size: 16px;
      height: 20px;
    `
  }

  if (size === 'lg') {
    return css`
      max-width: 620px;
      font-size: 18px;
      height: 25px;
    `
  }

  if (size === 'full') {
    return css`
      max-width: calc(100% - 50px);
      margin: 0 auto;
      font-size: 20px;
    `
  }
  return css``
}

export const InputContainer = styled.div<SearchInputContainer>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 10px 8px;

  ${({ backgroundColor, fontSize, color, borderRadius, size, isTyped, boxShadow, maxWidth }) => css`
    background-color: ${backgroundColor};
    font-size: ${fontSize};
    color: ${color};
    border-radius: ${borderRadius};
    ${getSize(size)}
    max-width: ${maxWidth};

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
    ${boxShadow &&
    css`
      box-shadow: 1px 1px 2px #00000033;
    `}
  `}
  ${getTypoStyle(Typography.Subtitle2)};

  position: relative;
`

export const Label = styled.label`
  width: calc(100% - 50px);
  height: 100%;

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
