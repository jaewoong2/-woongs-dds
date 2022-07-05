import React, { DetailsHTMLAttributes, forwardRef } from 'react'
import { SearchLineIcon } from '../../icons/SearchLineIcon'
import { InputContainer, Label, Input, PlaceHolder } from './SearchInput.styles'

export type SearchInputContainer = {
  fontSize?: string
  backgroundColor?: string
  color?: string
  borderRadius?: string
  containerClassName?: string
  size?: 'md' | 'sm' | 'lg' | 'full'
  placeholderColor?: string
}

type SearchInputProps = {
  icon?: React.ReactNode
} & SearchInputContainer &
  DetailsHTMLAttributes<HTMLInputElement>

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      id,
      placeholder,
      fontSize = '18px',
      containerClassName,
      backgroundColor = '#fff',
      color = 'black',
      borderRadius = '50px',
      size = 'lg',
      placeholderColor = '#737373',
      icon = (
        <div style={{ width: '24px' }}>
          <SearchLineIcon />
        </div>
      ),
      ...props
    },
    ref,
  ) => {
    return (
      <InputContainer
        size={size}
        fontSize={fontSize}
        backgroundColor={backgroundColor}
        color={color}
        borderRadius={borderRadius}
        containerClassName={containerClassName}
      >
        <Label htmlFor={id}>
          <PlaceHolder placeholderColor={placeholderColor} className="placeholder">
            {placeholder}
          </PlaceHolder>
          <Input id={id} ref={ref} {...props} />
        </Label>
        {size !== 'sm' && icon}
      </InputContainer>
    )
  },
)

SearchInput.displayName = 'SearchInput'
