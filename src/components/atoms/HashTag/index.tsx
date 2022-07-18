import styled from '@emotion/styled'
import React from 'react'

type Props = {
  color?: string
  backgroundColor?: string
} & React.DetailsHTMLAttributes<HTMLSpanElement>

const Span = styled.span<Props>`
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 35px;
  padding: 10px;
  font-size: 1em;
`

export const HashTag = React.forwardRef<HTMLAnchorElement, Props>(({ children, ...props }, ref) => (
  <Span ref={ref} {...props}>
    #{children}
  </Span>
))

HashTag.displayName = 'HashTag'
