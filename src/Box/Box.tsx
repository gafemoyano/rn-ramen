import styled from '@emotion/native'
import * as React from 'react'
import {
  StylesProps,
  SpaceProps,
  LayoutProps,
  BorderProps,
  FlexboxProps,
  ColorProps,
  PositionProps,
} from 'styled-system'
import { CustomProps } from '../utils/config'
import { ViewStyle, ViewProps, StyleProp } from 'react-native'
import { viewProps } from '../utils/system'
import { useTheme, Theme } from '../theme'
import { Shadows } from '../theme/defaultTheme'

// import { styled } from './styled'

// With styled HOC
// const Box = styled(typography, space, color, layout, flexbox)(View)

// With emotion styled

const StyledBox = styled.View<StylesProps>(viewProps)

function mapShadowToStyle(key: keyof Shadows, theme: Theme) {
  const _obj: any = theme.shadows[key]
  if (!_obj) return {}
  return _obj
}

type OmitFlexBoxProps = Omit<FlexboxProps, 'flexDirection'>
export interface BoxProps
  extends ViewProps,
    CustomProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    OmitFlexBoxProps,
    ColorProps,
    PositionProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  shadow?: keyof Shadows
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

export const Box = React.forwardRef(
  (props: BoxProps, ref: React.Ref<unknown>) => {
    const { shadow, style, children, ...rest } = props
    const theme = useTheme() as Theme

    const _shadow = shadow && mapShadowToStyle(shadow, theme)

    return (
      <StyledBox ref={ref} {...rest} style={[style, { ..._shadow }]}>
        {children}
      </StyledBox>
    )
  }
)

Box.displayName = 'Box'
