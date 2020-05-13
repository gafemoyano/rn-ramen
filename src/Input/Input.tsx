import React, { forwardRef } from 'react'
// import { useFormControl } from '../FormControl'
import useInputStyle from './styles'
import styled from '@emotion/native'

import { textProps } from '../utils/system'
import { TextInputProps } from 'react-native'

export interface InputProps extends TextInputProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'outline' | 'flushed' | 'unstyled' | 'filled'
  isFullWidth?: boolean
  focusBorderColor?: string
  errorBorderColor?: string
}

const StyledTextInput = styled.TextInput(textProps) as any

export const Input = forwardRef((props: InputProps, ref) => {
  const {
    size = 'md',
    variant = 'outline',
    isFullWidth = false,
    focusBorderColor = 'blue.400',
    errorBorderColor = 'red.500',
    ...rest
  } = props

  const inputStyleProps = useInputStyle({
    size,
    variant,
    isFullWidth,
    focusBorderColor,
    errorBorderColor,
  })

  return (
    <StyledTextInput
      ref={ref}
      // disabled={formControl.isDisabled}
      // required={formControl.isRequired}
      {...inputStyleProps}
      {...rest}
    />
  )
})

Input.displayName = 'Input'
