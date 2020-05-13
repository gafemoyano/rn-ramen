import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Box } from '../Box'
import { StyledText } from '../StyledText'
import { ScrollBox, Stack } from '..'

const stories = storiesOf('Stack', module)

const Item = () => (
  <Box bg="red.300" p={2} borderRadius="md">
    <StyledText color="gray.600" mt={4}>
      Item
    </StyledText>
  </Box>
)

stories.add('Different spacings', () => {
  return (
    <ScrollBox my={8} flex={1} w="full" p={5}>
      <StyledText color="gray.600" mt={4}>
        Spacing 0
      </StyledText>
      <Stack spacing={0}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
      <StyledText color="gray.600" mt={4}>
        Spacing 1
      </StyledText>
      <Stack spacing={1}>
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
      </Stack>
      <StyledText color="gray.600" mt={4}>
        Spacing 4
      </StyledText>
      <Stack spacing={4}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
      <StyledText color="gray.600" mt={4}>
        Spacing 8
      </StyledText>
      <Stack spacing={8}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
      <StyledText color="gray.600" mt={4}>
        Spacing 16
      </StyledText>
      <Stack spacing={16}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
    </ScrollBox>
  )
})

stories.add('Left aligned stack', () => {
  return (
    <Stack
      spacing={4}
      justify="center"
      bg="red.200"
      w="full"
      align="flex-start"
    >
      <Box h={3} w={4} bg="blue.500" />
      <Box h={3} w={4} bg="blue.500" />
      <Box h={3} w={4} bg="blue.500" />
      <Box h={3} w={4} bg="blue.500" />
    </Stack>
  )
})
stories.add('Centered stack', () => {
  return (
    <Stack spacing={4} bg="red.200" w="full" align="center">
      <Box bg="blue.500">
        <StyledText>box</StyledText>
      </Box>
      <Box bg="blue.500">
        <StyledText>box</StyledText>
      </Box>
      <Box bg="blue.500">
        <StyledText>box</StyledText>
      </Box>
      <Box bg="blue.500">
        <StyledText>box</StyledText>
      </Box>
    </Stack>
  )
})

stories.add('End aligned stack', () => {
  return (
    <Stack spacing={4} justify="center" bg="red.200" w="full" align="flex-end">
      <Box h={8} w={8} bg="blue.500" />
      <Box h={8} w={8} bg="blue.500" />
      <Box h={8} w={8} bg="blue.500" />
      <Box h={8} w={8} bg="blue.500" />
    </Stack>
  )
})
