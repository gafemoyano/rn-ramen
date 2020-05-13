import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Heading } from '.'
import { Box } from '../Box'
import theme from '../theme/defaultTheme'
import { ScrollBox, Stack } from '..'
import { ScrollView } from 'react-native'

const stories = storiesOf('Heading', module)

const sizes = Object.keys(theme.fontSizes)
const weights = Object.keys(theme.fontWeights)

stories.addDecorator((getStory) => (
  <Box flex={1} justifyContent="center" alignItems="center">
    <Box>{getStory()}</Box>
  </Box>
))

stories.add('Default', () => {
  return <Heading>Soy un encabezado Montserrat!</Heading>
})

stories.add('Sizes', () => {
  return (
    <ScrollView>
      <Stack p={8}>
        {sizes.map((size, index) => (
          <Heading
            key={index}
            size={size}
          >{`Soy un encabezado Montserrat ${size}`}</Heading>
        ))}
      </Stack>
    </ScrollView>
  )
})

stories.add('Weights', () => {
  return (
    <ScrollView>
      <Stack p={8}>
        {weights.map((weight, index) => (
          <Heading
            key={index}
            weight={weight}
          >{`Soy un encabezado Montserrat ${weight}`}</Heading>
        ))}
      </Stack>
    </ScrollView>
  )
})
