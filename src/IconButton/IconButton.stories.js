import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { IconButton } from '.'
import { Box } from '../Box'
import { ScrollBox } from '..'
import { Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import theme from '../theme/defaultTheme'
import { Inline } from '..'
const colors = Object.keys(theme.colors)

const stories = storiesOf('IconButton', module)
stories.addDecorator((getStory) => (
  <Box flex={1} justifyContent="center" alignItems="center" bg="gray.100">
    <Box>{getStory()}</Box>
  </Box>
))

stories.add('Default', () => {
  return (
    <IconButton onPress={() => {}}>
      <MaterialIcons name="tune" color="blue" size={24} />
    </IconButton>
  )
})

stories.add('With background colors', () => (
  <Inline alignItems="center" justifyContent="center" spacing={4}>
    {colors.map((color, index) => (
      <IconButton key={index} backgroundColor={color} onPress={() => {}}>
        <MaterialIcons name="tune" color="gray" size={24} />
      </IconButton>
    ))}
  </Inline>
))

stories.add('Rounded', () => (
  <IconButton isRound backgroundColor="blue" onPress={() => {}}>
    <MaterialIcons name="tune" color="gray" size={24} />
  </IconButton>
))
