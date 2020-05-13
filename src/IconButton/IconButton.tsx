import React, { ReactNode } from 'react'
import { TouchableHighlight } from '../primitives'
import { Colors, ThemeProps } from '../theme/defaultTheme'
import { useTheme } from '../theme'
import { BoxProps } from '../Box'

type IconButton = {
  isRound?: boolean
  backgroundColor: keyof Colors
  onPress: () => void
  children: ReactNode
}

type IconButtonProps = IconButton & BoxProps

export function IconButton({
  children,
  isRound,
  backgroundColor = 'white',
  ...rest
}: IconButtonProps) {
  const theme = useTheme() as ThemeProps
  const { ...props } = rest

  function getUnderlay(color: keyof Colors) {
    switch (color) {
      case 'white':
        return theme.colors.gray[100]
      case 'gray':
        return theme.colors.gray[200]
      default:
        return theme.colors[color][700]
    }
  }

  function getBackground(color: keyof Colors) {
    switch (color) {
      case 'white':
        return theme.colors.white
      case 'gray':
        return theme.colors.gray[100]
      case 'petrol':
        return theme.colors.blue[700]
      default:
        return theme.colors[color][100]
    }
  }

  return (
    <TouchableHighlight
      bg={getBackground(backgroundColor)}
      underlayColor={getUnderlay(backgroundColor)}
      p={1}
      borderRadius={isRound ? 'full' : 'md'}
      {...props}
    >
      {children}
    </TouchableHighlight>
  )
}
