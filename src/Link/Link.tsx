import * as React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Text } from '../../components'
import { BoxProps } from '../Box'
import { FontWeights } from '../theme/defaultTheme'

type LinkProps = {
  children: string
  location: string
  color: string
  weight: FontWeights
  rest: BoxProps
}

export function Link({
  children,
  location,
  color,
  // weight,
  ...rest
}: LinkProps) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity {...rest} onPress={() => navigation.navigate(location)}>
      <Text color={color}>{children}</Text>
    </TouchableOpacity>
  )
}
