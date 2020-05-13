import React, { ReactNode } from 'react'
import { Text } from '../Text'
import { useTheme } from '../theme'
import { ThemeProps, FontSizes, LineHeights } from '../theme/defaultTheme'
import { TextStyle, TextProps } from 'react-native'
import { SpaceProps } from 'styled-system'
const fontFamilies = {
  medium: 'Montserrat-Medium',
  semibold: 'Montserrat-SemiBold',
  bold: 'Montserrat-Bold',
}
interface HeadingStyles {
  color?: string
  size?: keyof FontSizes
  weight?: 'medium' | 'semibold' | 'bold'
  lineHeight?: keyof LineHeights
  children: ReactNode
}

type OmitTextStyles = Omit<
  TextStyle,
  'lineHeight' | 'color' | 'size' | 'fontWeight' | 'textAlignVertical'
>

type HeadingProps = TextProps & OmitTextStyles & SpaceProps & HeadingStyles

export function Heading({
  color = 'gray.800',
  size = 'xl',
  weight = 'bold',
  lineHeight,
  ...props
}: HeadingProps) {
  const { lineHeights, fontSizes } = useTheme() as ThemeProps
  const _lineHeight = lineHeight && lineHeights[lineHeight] * fontSizes[size]

  return (
    <Text
      color={color}
      fontSize={size}
      lineHeight={_lineHeight}
      fontWeight={weight}
      fontFamily={fontFamilies[weight]}
      {...props}
    />
  )
}

Heading.displayName = 'Heading'
