import React from 'react'
import { Container, H4, P } from './TextCard.styles'

type TextProps = {
  title?: string
  titleColor?: string
  color?: string
  descriptiom?: string
  size?: 'sm' | 'md' | 'lg'
} & React.DetailsHTMLAttributes<HTMLDivElement>

const TextCard = React.forwardRef<HTMLDivElement, TextProps>(
  ({ title, children, titleColor, color, size, ...props }, ref) => {
    return (
      <Container ref={ref} {...props}>
        <H4 color={titleColor} size={size ?? 'md'}>
          {title}
        </H4>
        <P color={color} size={size ?? 'md'}>
          {children}
        </P>
      </Container>
    )
  },
)

TextCard.displayName = 'TextCard'

export { TextCard }
