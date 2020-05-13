import { system } from 'styled-system'
import * as StyledSystem from 'styled-system'

type borderRadius = StyledSystem.BorderRadiusProps['borderRadius']
type borderColor = StyledSystem.BorderColorProps['borderColor']

export interface CustomProps {
  // Custom borderRadius alias
  borderRadiusTop?: borderRadius
  borderRadiusBottom?: borderRadius
  borderRadiusLeft?: borderRadius
  borderRadiusRight?: borderRadius

  // Custom borderColor alias
  borderBottomColor?: borderColor
  borderTopColor?: borderColor
  borderRightColor?: borderColor
  borderLeftColor?: borderColor

  // Custom width alias
  w?: StyledSystem.WidthProps['width']
  minW?: StyledSystem.MinWidthProps['minWidth']
  maxW?: StyledSystem.MaxWidthProps['maxWidth']

  // Custom height alias
  h?: StyledSystem.HeightProps['height']
  minH?: StyledSystem.MinHeightProps['minHeight']
  maxH?: StyledSystem.MaxHeightProps['maxHeight']

  // Custom display alias
  d?: StyledSystem.DisplayProps['display']
}

export const config: any = {
  borderRadiusTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  borderRadiusBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  borderRadiusLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
  borderRadiusRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  d: {
    property: 'display',
  },
  w: {
    property: 'width',
    scale: 'sizes',
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
}

const extraConfig = system(config)

export default extraConfig
