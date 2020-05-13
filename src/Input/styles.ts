import { ThemeProps } from '../theme/defaultTheme'
import { useTheme } from '../theme'
import { get } from 'styled-system'
import { InputProps } from './Input'

const baseProps = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  color: 'gray.800',
}

const outlinedStyle = ({
  theme,
  colorMode,
  focusBorderColor,
  errorBorderColor,
}: InputStyleProps) => {
  const bg = { light: 'white', dark: 'whiteAlpha.100' }
  const borderColor = { light: 'gray.400', dark: 'whiteAlpha.50' }
  const hoverColor = { light: 'gray.300', dark: 'whiteAlpha.200' }

  /**
   * styled-system's get takes 3 args
   * - object or array to read from
   * - key to get
   * - fallback value
   */
  const _focusBorderColor = get(
    theme.colors,
    focusBorderColor,
    focusBorderColor // If color doesn't exist in theme, use it's raw value
  )
  const _errorBorderColor = get(
    theme.colors,
    errorBorderColor,
    errorBorderColor
  )

  return {
    ...readOnly,
    borderWidth: get(theme.space, 'hairline', 1),
    borderColor: get(theme.colors, borderColor[colorMode], 'gray'),
    bg: bg[colorMode],
    _hover: {
      borderColor: hoverColor[colorMode],
    },
    _disabled: {
      opacity: '0.4',
      cursor: 'not-allowed',
    },
    _focus: {
      zIndex: 1,
      borderColor: _focusBorderColor,
      boxShadow: `0 0 0 1px ${_focusBorderColor}`,
    },
    _invalid: {
      borderColor: _errorBorderColor,
      boxShadow: `0 0 0 1px ${_errorBorderColor}`,
    },
  }
}

const readOnly = {
  _readOnly: {
    bg: 'transparent',
    userSelect: 'all',
  },
}

const filledStyle = ({
  theme,
  focusBorderColor,
  errorBorderColor,
  colorMode,
}: InputStyleProps) => {
  const bg = { light: 'gray.100', dark: 'whiteAlpha.50' }
  const hoverColor = { light: 'gray.200', dark: 'whiteAlpha.100' }

  const _focusBorderColor = get(
    theme.colors,
    focusBorderColor,
    focusBorderColor
  )
  const _errorBorderColor = get(
    theme.colors,
    errorBorderColor,
    errorBorderColor
  )

  return {
    ...readOnly,
    border: '2px',
    borderColor: 'transparent',
    bg: bg[colorMode],
    _hover: {
      bg: hoverColor[colorMode],
    },
    _disabled: {
      opacity: '0.4',
      cursor: 'not-allowed',
    },
    _focus: {
      zIndex: 1,
      bg: 'transparent',
      borderColor: _focusBorderColor,
    },
    _invalid: {
      borderColor: _errorBorderColor,
    },
  }
}

const flushedStyle = ({
  theme,
  focusBorderColor,
  errorBorderColor,
}: {
  theme: ThemeProps
  focusBorderColor: string
  errorBorderColor: string
}) => {
  const _focusBorderColor = get(
    theme.colors,
    focusBorderColor,
    focusBorderColor
  )
  const _errorBorderColor = get(
    theme.colors,
    errorBorderColor,
    errorBorderColor
  )

  return {
    ...readOnly,
    borderBottom: '2px',
    borderColor: 'inherit',
    rounded: 0,
    px: undefined,
    bg: 'transparent',
    _focus: {
      zIndex: 1,
      borderColor: _focusBorderColor,
    },
    _invalid: {
      borderColor: _errorBorderColor,
    },
  }
}

const unstyledStyle = {
  bg: 'transparent',
  px: 0,
  height: 'auto',
}

const variantProps = (props: InputStyleProps) => {
  switch (props.variant) {
    case 'flushed':
      return flushedStyle(props)
    case 'unstyled':
      return unstyledStyle
    case 'filled':
      return filledStyle(props)
    case 'outline':
      return outlinedStyle(props)
    default:
      return {}
  }
}

export const inputSizes = {
  lg: {
    fontSize: 'lg',
    px: 4,
    height: 12,
    rounded: 'md',
  },
  md: {
    fontSize: 'md',
    px: 3,
    height: 10,
    rounded: 'md',
  },
  sm: {
    fontSize: 'sm',
    px: 2,
    height: 8,
    rounded: 'sm',
  },
}

const sizeProps = (props: InputStyleProps) => inputSizes[props.size]

type ColorMode = 'light' | 'dark'

interface InputStyleProps extends InputProps {
  colorMode: ColorMode
  theme: ThemeProps
}

const useInputStyle = (props: InputProps) => {
  const theme = useTheme() as ThemeProps
  const colorMode = 'light' as ColorMode

  const _props = { ...props, theme, colorMode }

  return {
    width: props.isFullWidth ? '100%' : undefined,
    ...baseProps,
    ...sizeProps(_props),
    ...variantProps(_props),
  }
}

export default useInputStyle
