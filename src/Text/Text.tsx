import React, { ReactNode } from 'react'
import { FontWeights, FontSizes } from '../theme/defaultTheme'
import { TextStyle, TextProps } from 'react-native'
import styled from '@emotion/native'

import { textProps } from '../utils/system'
import {
  TextStyleProps,
  SpaceProps,
  FontSizeProps,
  LineHeightProps,
} from 'styled-system'
export const StyledText = styled.Text(textProps) as any

type Content = {
  size?: keyof FontSizes
  color?: string
  weight?: keyof FontWeights
  style?: TextStyle
  children: ReactNode
}

type OmitTextStyles = Omit<
  TextStyle,
  'lineHeight' | 'color' | 'fontSize' | 'fontWeight' | 'textAlignVertical'
>

type ContentProps = TextProps &
  OmitTextStyles &
  Content &
  LineHeightProps &
  TextStyleProps &
  SpaceProps &
  FontSizeProps

export function Text({
  size: fontSize = 'md',
  color = 'gray.700',
  weight: fontWeight,
  style,
  children,
  ...rest
}: ContentProps) {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}
      style={[style]}
    >
      {children}
    </StyledText>
  )
}
