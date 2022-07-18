import React, { DetailsHTMLAttributes, forwardRef } from 'react'
import { LightColor } from '../../../styles/theme/constant'
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
  isTyped?: boolean
}

type SearchInputProps = {
  icon?: React.ReactNode
} & Omit<SearchInputContainer & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, 'isTyped'>

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      id,
      placeholder,
      fontSize = '18px',
      containerClassName,
      backgroundColor = LightColor.searchBackGround,
      color,
      borderRadius = '50px',
      size = 'lg',
      placeholderColor = LightColor.searchPlaceholderText,
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
        isTyped={Boolean(props?.value) ? true : false}
      >
        <Label htmlFor={id}>
          <PlaceHolder placeholderColor={placeholderColor} className="placeholder">
            {placeholder}
          </PlaceHolder>
          <Input type="search" id={id} ref={ref} {...props} />
        </Label>
        {size !== 'sm' && icon}
      </InputContainer>
    )
  },
)

SearchInput.displayName = 'SearchInput'
