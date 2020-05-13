import { Dimensions, Platform, PixelRatio } from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// based on iphone 5s scale
const wscale = windowWidth / 350
const hscale = windowHeight / 680

export function normalize(size: number, based = 'width') {
  const newSize = based === 'height' ? size * hscale : size * wscale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

const { width, height } = Dimensions.get('window')

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680

export const scale = (size: number) => (width / guidelineBaseWidth) * size
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor
