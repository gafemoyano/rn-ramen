import {
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  shadow,
  compose,
  typography,
} from 'styled-system'
import viewConfig from './config'
import textConfig from './textConfig'

export const viewProps = compose(
  layout,
  color,
  space,
  border,
  position,
  shadow,
  flexbox,
  viewConfig
)

export const textProps = compose(
  typography,
  space,
  color,
  layout,
  flexbox,
  border,
  textConfig
)
