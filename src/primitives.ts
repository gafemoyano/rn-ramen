import styled from '@emotion/native'
import { viewProps } from './utils/system'
import { StylesProps } from 'styled-system'

export const Image = styled.Image<StylesProps>(viewProps) as any
export const TouchableOpacity = styled.TouchableOpacity<StylesProps>(
  viewProps
) as any

export const TouchableHighlight = styled.TouchableHighlight<StylesProps>(
  viewProps
) as any

export const ScrollBox = styled.ScrollView<StylesProps>(viewProps) as any
