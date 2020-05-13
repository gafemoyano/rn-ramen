import { moderateScale } from '../utils/normalize'
import { Dimensions, StyleSheet } from 'react-native'

export type ColorModes = 'light' | 'dark'
export interface ColorHues {
  50?: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900?: string
  1000?: string
}

interface Space {
  '0': number
  'hairline': number
  '1': number
  '2': number
  '3': number
  '4': number
  '5': number
  '6': number
  '8': number
  '10': number
  '12': number
  '16': number
  '20': number
  '24': number
  '32': number
  '40': number
  '48': number
  '56': number
  '64': number
}
export interface Colors {
  transparent: string
  black: string
  white: string
  petrol: ColorHues
  whiteAlpha: ColorHues
  blackAlpha: ColorHues
  gray: ColorHues
  red: ColorHues
  orange: ColorHues
  yellow: ColorHues
  green: ColorHues
  blue: ColorHues
  celeste: ColorHues
}
interface Sizes extends Space {
  'xs': number
  'sm': number
  'md': number
  'lg': number
  'xl': number
  // '2xl': number
  // '3xl': number
  // '4xl': number
  // '5xl': number
  // '6xl': number
  '1/2': string
  '1/3': string
  '2/3': string
  '1/4': string
  '2/4': string
  '3/4': string
  '1/5': string
  '2/5': string
  '3/5': string
  '4/5': string
  '1/6': string
  '2/6': string
  '3/6': string
  '4/6': string
  '5/6': string
  '1/12': string
  '2/12': string
  '3/12': string
  '4/12': string
  '5/12': string
  '6/12': string
  '7/12': string
  '8/12': string
  '9/12': string
  '10/12': string
  '11/12': string
  'full': string
  'screenHeight': number
  'screenWidth': number
}

export type Shadows = {
  sm: {
    shadowColor: string
    shadowOffset: {
      width: number
      height: number
    }
    shadowOpacity: number
    shadowRadius: number
    elevation: number
  }
  md: {
    shadowColor: string
    shadowOffset: {
      width: number
      height: number
    }
    shadowOpacity: number
    shadowRadius: number
    elevation: number
  }
  lg: {
    shadowColor: string
    shadowOffset: {
      width: number
      height: number
    }
    shadowOpacity: number
    shadowRadius: number
    elevation: number
  }
  xl: {
    shadowColor: string
    shadowOffset: {
      width: number
      height: number
    }
    shadowOpacity: number
    shadowRadius: number
    elevation: number
  }
  inset: {
    shadowColor: string
    shadowOffset: {
      width: number
      height: number
    }
    shadowOpacity: number
    shadowRadius: number
    borderWidth: number
    borderColor: string
  }
}
interface Borders {
  'none': number
  '1': number
  '2': number
  '4': number
  '8': number
}

interface Radii {
  'none': number
  'sm': number
  'md': number
  'lg': number
  'xl': number
  '2xl': number
  'full': number
}
export interface FontSizes {
  'xxs': number
  'xs': number
  'sm': number
  'md': number
  'lg': number
  'xl': number
  '2xl': number
  '3xl': number
  '4xl': number
  '5xl': number
  '6xl': number
}

export interface FontWeights {
  hairline: string
  thin: string
  light: string
  normal: string
  medium: string
  semibold: string
  bold: string
  extrabold: string
  black: string
  body: string
  heading: string
}

interface LetterSpacings {
  tighter: number
  tight: number
  normal: number
  wide: number
  wider: number
  widest: number
}

export interface LineHeights {
  none: number
  tight: number
  snug: number
  normal: number
  relaxed: number
  loose: number
  body: number
  heading: number
}

interface ZIndices {
  '0': number
  '10': number
  '20': number
  '30': number
  '40': number
  '50': number
}

export interface ThemeProps {
  colors: Colors
  borderWidths: Borders
  space: Space
  sizes: Sizes
  shadows: Shadows
  radii: Radii
  fontSizes: FontSizes
  fontWeights: FontWeights
  letterSpacings: LetterSpacings
  lineHeights: LineHeights
  zIndices: ZIndices
}

const theme: ThemeProps = {
  borderWidths: {
    'none': 0,
    '1': 1,
    '2': 2,
    '4': 4,
    '8': 8,
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#ffffff',

    whiteAlpha: {
      50: 'rgba(255, 255, 255, 0.04)',
      100: 'rgba(255, 255, 255, 0.06)',
      200: 'rgba(255, 255, 255, 0.08)',
      300: 'rgba(255, 255, 255, 0.16)',
      400: 'rgba(255, 255, 255, 0.24)',
      500: 'rgba(255, 255, 255, 0.36)',
      600: 'rgba(255, 255, 255, 0.48)',
      700: 'rgba(255, 255, 255, 0.64)',
      800: 'rgba(255, 255, 255, 0.80)',
      900: 'rgba(255, 255, 255, 0.92)',
    },

    blackAlpha: {
      50: 'rgba(0, 0, 0, 0.04)',
      100: 'rgba(0, 0, 0, 0.06)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.16)',
      400: 'rgba(0, 0, 0, 0.24)',
      500: 'rgba(0, 0, 0, 0.36)',
      600: 'rgba(0, 0, 0, 0.48)',
      700: 'rgba(0, 0, 0, 0.64)',
      800: 'rgba(0, 0, 0, 0.80)',
      900: 'rgba(0, 0, 0, 0.92)',
    },
    gray: {
      50: '#F5F7FA',
      100: '#E4E7EB',
      200: '#CBD2D9',
      300: '#9AA5B1',
      400: '#7B8794',
      500: '#616E7C',
      600: '#52606D',
      700: '#3E4C59',
      800: '#323F4B',
      900: '#1F2933',
    },

    red: {
      100: '#fff5f5',
      200: '#fed7d7',
      300: '#feb2b2',
      400: '#fc8181',
      500: '#f56565',
      600: '#e53e3e',
      700: '#c53030',
      800: '#9b2c2c',
      900: '#742a2a',
    },

    green: {
      100: '#f0fff4',
      200: '#c6f6d5',
      300: '#9ae6b4',
      400: '#68d391',
      500: '#48bb78',
      600: '#38a169',
      700: '#2f855a',
      800: '#276749',
      900: '#22543d',
    },

    orange: {
      100: '#ffecdf',
      200: '#ffc79f',
      300: '#ff8f40',
      400: '#ff7c20',
      500: '#ff6900',
      600: '#df5c00',
      700: '#bf4f00',
      800: '#9c4221',
      900: '#7b341e',
    },

    celeste: {
      100: '#f5fcff',
      200: '#F2F9FF',
      300: '#e3f8ff',
      400: '#b3ecff',
      500: '#81defd',
      600: '#5ed0fa',
      700: '#40c3f7',
      800: '#39B0E2',
    },

    yellow: {
      100: '#fcfbeb',
      200: '#fff9c2',
      300: '#fff382',
      400: '#fff066',
      500: '#ffed4a',
      600: '#f4d63e',
      700: '#f2d024',
      800: '#684f1d',
      900: '#453411',
    },

    blue: {
      100: '#f7faff',
      200: '#ebf2ff',
      300: '#bfdbff',
      400: '#7cc4fa',
      500: '#0053bf',
      600: '#00459f',
      700: '#003780',
      800: '#002a60',
      900: '#001c40',
      1000: '#000e20',
    },
    petrol: {
      100: '#e7eef2',
      200: '#a2bdcd',
      300: '#5d8ca8',
      400: '#2f6b90',
      500: '#185B84',
      600: '#134869',
      700: '#0e364f',
      800: '#092434',
      900: '#04121a',
    },
  },
  space: {
    '0': 0,
    'hairline': StyleSheet.hairlineWidth,
    '1': moderateScale(4),
    '2': moderateScale(8),
    '3': moderateScale(12),
    '4': moderateScale(16),
    '5': moderateScale(20),
    '6': moderateScale(24),
    '8': moderateScale(32),
    '10': moderateScale(40),
    '12': moderateScale(48),
    '16': moderateScale(64),
    '20': moderateScale(80),
    '24': moderateScale(96),
    '32': moderateScale(128),
    '40': moderateScale(160),
    '48': moderateScale(192),
    '56': moderateScale(224),
    '64': moderateScale(256),
  },
  sizes: {
    '0': 0,
    'hairline': StyleSheet.hairlineWidth,
    '1': moderateScale(4),
    '2': moderateScale(8),
    '3': moderateScale(12),
    '4': moderateScale(16),
    '5': moderateScale(20),
    '6': moderateScale(24),
    '8': moderateScale(32),
    '10': moderateScale(40),
    '12': moderateScale(48),
    '16': moderateScale(64),
    '20': moderateScale(80),
    '24': moderateScale(96),
    '32': moderateScale(128),
    '40': moderateScale(160),
    '48': moderateScale(192),
    '56': moderateScale(224),
    '64': moderateScale(256),
    'xs': moderateScale(320),
    'sm': moderateScale(384),
    'md': moderateScale(448),
    'lg': moderateScale(512),
    'xl': moderateScale(576),
    // '2xl': '42rem',
    // '3xl': '48rem',
    // '4xl': '56rem',
    // '5xl': '64rem',
    // '6xl': '72rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    'full': '100%',
    'screenHeight': Dimensions.get('window').height,
    'screenWidth': Dimensions.get('window').width,
  },
  radii: {
    'none': 0,
    'sm': 2,
    'md': 4,
    'lg': 8,
    'xl': 16,
    '2xl': 32,
    'full': 9999,
  },

  fontSizes: {
    'xxs': 10,
    'xs': 12,
    'sm': 14,
    'md': 16,
    'lg': 18,
    'xl': 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 64,
  },
  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    body: '400',
    heading: '700',
  },
  letterSpacings: {
    tighter: -0.8,
    tight: -0.4,
    normal: 0,
    wide: 0.4,
    wider: 0.8,
    widest: 1.6,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,

    body: 1.625,
    heading: 1.25,
  },
  zIndices: {
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },

    md: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },

    lg: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },

    xl: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
    },

    inset: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      borderWidth: 5,
      borderColor: '#FFF',
    },
  },
}

export function themeGet(key: string, fallback: unknown) {
  return fallback
}

export default theme
