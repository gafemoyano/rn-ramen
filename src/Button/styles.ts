// import { addOpacity } from '../theme/colors-utils'
// import { useColorMode } from '../ColorModeProvider'
import { useTheme } from '../theme'
import { ThemeProps, Colors, ColorModes } from '../theme/defaultTheme'
import { Variants, Sizes } from '.'

const grayGhostStyle = (theme: ThemeProps) => ({
  light: {
    buttonStyle: {
      bg: 'transparent',
      underlayColor: theme.colors.gray[200],
    },
    textStyle: {
      color: 'gray.800',
    },
  },
  dark: {
    buttonStyle: {
      bg: 'transparent',
      underlayColor: theme.colors.whiteAlpha[300],
    },
    textStyle: {
      color: 'whiteAlpha.900',
    },
  },
})

type ghostVariantPropsProps = {
  color: keyof Colors
  colorMode: 'light' | 'dark'
  theme: ThemeProps
}

function ghostVariantProps({
  color,
  colorMode,
  theme,
}: ghostVariantPropsProps) {
  const _color = theme.colors[color] && theme.colors[color][200]
  let result
  if (color === 'gray') {
    result = grayGhostStyle(theme)
  } else {
    result = {
      light: {
        buttonStyle: {
          bg: 'transparent',
          underlayColor: theme.colors[color][100],
        },
        textStyle: {
          color: theme.colors[color][500],
        },
      },
      dark: {
        buttonStyle: {
          bg: 'transparent',
          underlayColor: _color,
          opacity: 0.24,
        },
        textStyle: {
          color: theme.colors[color][200],
        },
      },
    }
  }

  return result[colorMode]
}

////////////////////////////////////////////////////////////

const outlineVariantProps = (props: {
  color: keyof Colors
  colorMode: 'light' | 'dark'
  theme: ThemeProps
}) => {
  const { color, colorMode, theme } = props
  const borderColor: any = {
    light: 'gray.200',
    dark: 'whiteAlpha.300',
  }

  const { buttonStyle, textStyle } = ghostVariantProps(props)
  return {
    buttonStyle: {
      bg: 'transparent',
      borderWidth: 2,
      borderColor:
        color === 'gray' ? borderColor[colorMode] : theme.colors[color][500],
      ...buttonStyle,
    },
    textStyle: {
      ...textStyle,
    },
  }
}

////////////////////////////////////////////////////////////

const graySolidStyle = (theme: ThemeProps) => ({
  light: {
    buttonStyle: {
      bg: 'gray.100',
      underlayColor: theme.colors.gray[300],
    },
    textStyle: {
      color: 'gray.700',
    },
  },
  dark: {
    buttonStyle: {
      bg: 'whiteAlpha.200',
      underlayColor: theme.colors.whiteAlpha[400],
    },
    textStyle: {
      color: 'whiteAlpha.900',
    },
  },
})

const whiteSolidStyle = (theme: ThemeProps) => ({
  light: {
    buttonStyle: {
      bg: 'white',
      underlayColor: theme.colors.whiteAlpha[600],
    },
    textStyle: {
      color: 'gray.800',
    },
  },
  dark: {
    buttonStyle: {
      bg: 'white',
      underlayColor: theme.colors.whiteAlpha[400],
    },
    textStyle: {
      color: 'whiteAlpha.900',
    },
  },
})

const solidVariantProps = ({
  color,
  colorMode,
  theme,
}: {
  color: keyof Colors
  colorMode: 'light' | 'dark'
  theme: ThemeProps
}) => {
  let style = {
    light: {
      buttonStyle: {
        bg: `${color}.500`,
        underlayColor: theme.colors[color][700],
      },
      textStyle: {
        color: 'white',
      },
    },
    dark: {
      buttonStyle: {
        bg: `${color}.200`,
        underlayColor: theme.colors[color][300],
      },
      textStyle: {
        color: 'gray.800',
      },
    },
  }

  if (color === 'gray') {
    style = graySolidStyle(theme)
  }

  if (color === 'white') {
    style = whiteSolidStyle(theme)
  }

  return style[colorMode]
}

////////////////////////////////////////////////////////////

const linkVariantProps = ({
  color,
  colorMode,
}: {
  color: string
  colorMode: 'light' | 'dark'
}) => {
  const _color = { light: `${color}.500`, dark: `${color}.200` }
  // const _activeColor = { light: `${color}.700`, dark: `${color}.500` }
  return {
    buttonStyle: {
      bg: 'transparent',
    },
    textStyle: {
      p: 0,
      height: 'auto',
      lineHeight: 'normal',
      color: _color[colorMode],
    },
  }
}

////////////////////////////////////////////////////////////

const disabledProps = {
  _disabled: {
    opacity: '0.4',
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
}

////////////////////////////////////////////////////////////

const sizeStyles = {
  lg: {
    buttonStyle: {
      height: 12,
      minWidth: 12,
      px: 6,
    },
    textStyle: {
      fontSize: 'lg',
      fontWeight: 'bold',
    },
  },
  md: {
    buttonStyle: {
      height: 10,
      minWidth: 10,
      px: 4,
    },
    textStyle: {
      fontSize: 'lg',
      fontWeight: 'bold',
    },
  },
  sm: {
    buttonStyle: {
      height: 8,
      minWidth: 8,
      px: 3,
    },
    textStyle: {
      fontSize: 'md',
      fontWeight: 'bold',
    },
  },
  xs: {
    buttonStyle: {
      height: 6,
      minWidth: 6,
      px: 2,
    },
    textStyle: {
      fontSize: 'sm',
      fontWeight: 'bold',
    },
  },
}

type sizes = typeof sizeStyles

const sizeProps = ({ size }: { size: keyof sizes }) => sizeStyles[size]

////////////////////////////////////////////////////////////
interface VariantPropsArgs extends ButtonStyleProps {
  colorMode: ColorModes
  theme: ThemeProps
}
const variantProps = (props: VariantPropsArgs) => {
  switch (props.variant) {
    case 'solid':
      return solidVariantProps(props)
    case 'ghost':
      return ghostVariantProps(props)
    case 'link':
      return linkVariantProps(props)
    case 'outline':
      return outlineVariantProps(props)
    // TODO: Unstyled button
    // case 'unstyled':
    //   return unstyledStyle
  }
}

////////////////////////////////////////////////////////////

const baseProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  flexDirection: 'row',
  alignSelf: 'flex-start',
}

////////////////////////////////////////////////////////////

const defaultTextProps = {
  textAlignVertical: 'middle' as const,
  fontWeight: 'semibold' as const,
}

////////////////////////////////////////////////////////////

type ButtonStyleProps = {
  color: keyof Colors
  variant: Variants
  size: Sizes
}

const useButtonStyle = (props: ButtonStyleProps) => {
  const colorMode = 'light' as ColorModes
  const theme = useTheme() as ThemeProps

  const _props = { ...props, colorMode, theme }
  const {
    buttonStyle: buttonVariantProps,
    textStyle: textVariantProps,
  } = variantProps(_props)

  const { buttonStyle: buttonSizeProps, textStyle: textSizeProps } = sizeProps(
    _props
  )
  return {
    buttonStyleProps: {
      ...baseProps,
      ...buttonSizeProps,
      ...disabledProps,
      ...buttonVariantProps,
    },
    textStyleProps: {
      ...defaultTextProps,
      ...textVariantProps,
      ...textSizeProps,
    },
  }
}

export default useButtonStyle
