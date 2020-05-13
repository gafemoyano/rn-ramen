import Color from 'color'

export const getColor = (color: any, hue: number) => `${color}.${hue}`

export const addOpacity = (color: any, opacity: number) =>
  Color(color)
    .fade(1 - opacity)
    .rgb()
    .string()

export const addWhite = (color: any, opacity: number | undefined) => {
  return Color(color).mix(Color('#fff'), opacity).hex()
}

export const addBlack = (color: any, opacity: number | undefined) =>
  Color(color).mix(Color('#000'), opacity).hex()

export const isDarkColor = (color: any) => Color(color).isDark()

export const generateAlphaColors = (color: any) => ({
  900: addOpacity(color, 0.92),
  800: addOpacity(color, 0.8),
  700: addOpacity(color, 0.6),
  600: addOpacity(color, 0.48),
  500: addOpacity(color, 0.38),
  400: addOpacity(color, 0.24),
  300: addOpacity(color, 0.16),
  200: addOpacity(color, 0.12),
  100: addOpacity(color, 0.08),
  50: addOpacity(color, 0.04),
})

export const colorEmphasis = (color: any, emphasis: any) => {
  switch (emphasis) {
    case 'high':
      return color
    case 'medium':
      return generateAlphaColors(color)[700]
    case 'low':
      return generateAlphaColors(color)[500]
    case 'lowest':
      return generateAlphaColors(color)[300]
    default:
      return
  }
}
