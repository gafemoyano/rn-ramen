import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Button } from '.'
import { Box } from '../Box'
import { Stack } from '../Stack'
import { FontAwesome } from '@expo/vector-icons'
import { action } from '@storybook/addon-actions'
import theme from '../theme/defaultTheme'
import { ScrollBox } from '..'
import { Inline } from '../Inline'

const stories = storiesOf('Button', module)
const colors = Object.keys(theme.colors)

stories.addDecorator((getStory) => (
  <Box flex={1} justifyContent="center" alignItems="center">
    <Box>{getStory()}</Box>
  </Box>
))

stories.add('Colors', () => (
  <ScrollBox w="full" bg="gray.200" pt={6}>
    <Inline alignItems="center" justifyContent="center" spacing={4}>
      {colors.map((color, index) => (
        <Button
          key={index}
          variantColor={color}
          text={`Botón ${color}`}
          onPress={() => {}}
        />
      ))}
    </Inline>
  </ScrollBox>
))

stories
  .add('Variants', () => (
    <Stack alignItems="center" justifyContent="center" spacing={4}>
      <Button
        onPress={action('clicked-text')}
        variantColor="blue"
        text="Solid Button"
        variant="solid"
      />
      <Button
        onPress={action('clicked-text')}
        variantColor="blue"
        text="Outline Button"
        variant="outline"
      />
      <Button
        onPress={action('clicked-text')}
        variantColor="blue"
        text="Ghost button"
        variant="ghost"
      />
    </Stack>
  ))
  .add('Sizes', () => (
    <Stack justifyItems="center" spacing={4}>
      <Button
        onPress={action('clicked-text')}
        variantColor="blue"
        text="Sm Button"
        size="sm"
      />
      <Button
        onPress={action('clicked-text')}
        variantColor="blue"
        text="Md Button"
        size="md"
      />
      <Button
        onPress={action('clicked-text')}
        variantColor="blue"
        text="Lg Button"
        size="lg"
      />
    </Stack>
  ))

stories.add('With left icon', () => (
  <Button
    onPress={action('clicked-text')}
    variantColor="green"
    leftIcon={<FontAwesome name="envelope" size={16} color="white" />}
    text="Contáctenos"
  />
))
