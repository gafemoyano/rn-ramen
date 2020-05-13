import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Inline } from '.'
import { Box } from '../Box'
import { StyledText } from '../StyledText'
import { ScrollBox, Stack } from '../../components'
const stories = storiesOf('Inline', module)

stories.addDecorator((getStory) => (
  <Box flex={1} justifyContent="center" alignItems="center">
    <Box>{getStory()}</Box>
  </Box>
))

const Item = () => (
  <Box bg="red.300" p={2} borderRadius="md">
    <StyledText color="gray.600">Item</StyledText>
  </Box>
)

stories.add('Inline with different spacings', () => {
  return (
    <ScrollBox my={8}>
      <Stack spacing={5}>
        <Box>
          <StyledText color="gray.600">Spacing 0</StyledText>
          <Inline>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </Inline>
        </Box>
        <Box>
          <StyledText color="gray.600">Spacing 1</StyledText>
          <Inline spacing={4}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </Inline>
        </Box>
        <Box>
          <StyledText color="gray.600">Spacing 4</StyledText>
          <Inline spacing={4}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </Inline>
        </Box>
        <Box>
          <StyledText color="gray.600">Spacing 8</StyledText>
          <Inline spacing={8}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </Inline>
        </Box>
        <Box>
          <StyledText color="gray.600">Spacing 16</StyledText>
          <Inline spacing={16}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </Inline>
        </Box>
      </Stack>
    </ScrollBox>
  )
})

stories.add('Justify center', () => {
  return (
    <Inline spacing={4} justify="center">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Inline>
  )
})

stories.add('Justify end', () => {
  return (
    <Inline spacing={4} justify="flex-end">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Inline>
  )
})
