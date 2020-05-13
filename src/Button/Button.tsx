import React, { ReactNode, Fragment } from 'react'
import { TouchableHighlightProps, ActivityIndicator } from 'react-native'
import useButtonStyle from './styles'
import { Text } from '../Text'
import { Box, BoxProps } from '../Box'
import { SpaceProps } from 'styled-system'
import { Colors } from '../theme/defaultTheme'
import styled from '@emotion/native'

import { viewProps } from '../utils/system'
export type Variants = 'solid' | 'outline' | 'ghost' | 'link'
export type Sizes = 'xs' | 'sm' | 'md' | 'lg'

const TouchableHighlight = styled.TouchableHighlight<BoxProps>(viewProps) as any

type Button = {
  w?: string
  isDisabled?: boolean
  isLoading?: boolean
  isActive?: boolean
  isFullWidth?: boolean
  variantColor: keyof Colors
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: Variants
  loadingText?: string
  iconSpacing?: number
  size?: Sizes
  rest?: TouchableHighlightProps
  text: string
  testID?: string
  onPress: () => void
}
type ButtonProps = Button & SpaceProps

export function Button({
  isDisabled,
  isLoading,
  isFullWidth,
  variantColor = 'gray',
  leftIcon,
  rightIcon,
  variant = 'solid',
  loadingText,
  iconSpacing = 2,
  size = 'md',
  onPress,
  text,
  ...rest
}: ButtonProps) {
  const { buttonStyleProps, textStyleProps } = useButtonStyle({
    color: variantColor,
    variant,
    size,
  })
  const _isDisabled = isDisabled || isLoading

  const { color } = textStyleProps
  const { ...restButtonStyleProps } = buttonStyleProps

  return (
    <TouchableHighlight
      disabled={_isDisabled}
      borderRadius={'md'}
      width={isFullWidth ? 'full' : undefined}
      onPress={onPress}
      opacity={isDisabled && 0.8}
      {...restButtonStyleProps}
      {...rest}
      style={{ justifyContent: 'center' }}
    >
      <Fragment>
        {leftIcon && !isLoading && (
          <Box ml={-1} mr={iconSpacing}>
            {leftIcon}
          </Box>
        )}
        {isLoading && (
          <ActivityIndicator
            size="small"
            color={color}
            style={{ marginRight: loadingText ? iconSpacing : 0 }}
          />
        )}
        {isLoading ? (
          <Text {...textStyleProps}>{loadingText}</Text> || (
            <Text {...textStyleProps}>{text}</Text>
          )
        ) : (
          <Text {...textStyleProps}>{text}</Text>
        )}
        {rightIcon && !isLoading && (
          <Box ml={iconSpacing} mr={-1}>
            {leftIcon}
          </Box>
        )}
      </Fragment>
    </TouchableHighlight>
  )
}
