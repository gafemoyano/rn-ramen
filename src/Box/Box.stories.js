import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Box } from '.'
import { StyledText } from '../StyledText'
import { StyledImage } from '../StyledImage'
import { Heading } from '../Heading'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native'

const stories = storiesOf('Box', module)

stories.add('Generic', () => (
  <Box mx="auto" maxWidth={320} mt={8}>
    <Box
      mt={5}
      borderRadius="md"
      shadow="sm"
      bg="red.200"
      justifyContent="center"
    >
      <StyledText>This is a box</StyledText>
    </Box>
    <Box mt={5} borderRadius="md" shadow="md" height="16" bg="red.500">
      <StyledText>This is a box</StyledText>
    </Box>
    <Box mt={5} borderRadius="md" shadow="lg" height="16" bg="orange.200">
      <StyledText>This is a box</StyledText>
    </Box>
    <Box
      mt={5}
      borderRadius="full"
      shadow="xl"
      height="16"
      bg="blue.900"
      justifyContent="center"
      alignItems="center"
    >
      <StyledText color="white">This is a box</StyledText>
    </Box>
    <Box mt={5} borderRadius="lg" shadow="inset" height="16" bg="red.200">
      <StyledText>This is a box</StyledText>
    </Box>
  </Box>
))

stories.add('With shadows', () => (
  <Box mx="auto" maxWidth={320} mt={8}>
    <Box mt={5} shadow="sm" bg="red.200" justifyContent="center">
      <StyledText>Shadow sm</StyledText>
    </Box>
    <Box mt={5} shadow="md" bg="red.200" justifyContent="center">
      <StyledText>Shadow md</StyledText>
    </Box>
    <Box mt={5} shadow="lg" bg="red.200" justifyContent="center">
      <StyledText>Shadow lg</StyledText>
    </Box>

    <Box mt={5} shadow="lg" bg="red.200" justifyContent="center">
      <StyledText>Shadow xl</StyledText>
    </Box>
  </Box>
))

stories.add('With rounded corners', () => (
  <Box mx="auto" maxWidth={320} mt={8}>
    <Box mt={5} borderRadius="sm" bg="red.200" p={2}>
      <StyledText>Border radius sm</StyledText>
    </Box>
    <Box mt={5} borderRadius="md" bg="red.200" p={2}>
      <StyledText>Border radius md</StyledText>
    </Box>
    <Box mt={5} borderRadius="lg" bg="red.200" p={2}>
      <StyledText>Border radius lg</StyledText>
    </Box>

    <Box mt={5} borderRadius="full" bg="red.200" p={2}>
      <StyledText>Border radius full</StyledText>
    </Box>
  </Box>
))

stories.add('With align items', () => (
  <ScrollView>
    <Box mx="auto" maxWidth={320} my={8}>
      <StyledText>Align items flex-start</StyledText>
      <Box mb={5} alignItems="flex-start" bg="red.200" p={2} w={64} h={64}>
        <Box bg="blue.500" mt={1}>
          <StyledText>1</StyledText>
        </Box>
        <Box bg="blue.500" mt={1}>
          <StyledText>2</StyledText>
        </Box>
        <Box bg="blue.500" mt={1}>
          <StyledText>3</StyledText>
        </Box>
      </Box>
      <StyledText>Align items center</StyledText>
      <Box mb={5} alignItems="center" bg="red.200" p={2} w={64} h={64}>
        <Box bg="blue.500" mt={1}>
          <StyledText>1</StyledText>
        </Box>
        <Box bg="blue.500" mt={1}>
          <StyledText>2</StyledText>
        </Box>
        <Box bg="blue.500" mt={1}>
          <StyledText>3</StyledText>
        </Box>
      </Box>
      <StyledText>Align items flex-end</StyledText>
      <Box mb={5} alignItems="flex-end" bg="red.200" p={2} w={64} h={64}>
        <Box bg="blue.500" mt={1}>
          <StyledText>1</StyledText>
        </Box>
        <Box bg="blue.500" mt={1}>
          <StyledText>2</StyledText>
        </Box>
        <Box bg="blue.500" mt={1}>
          <StyledText>3</StyledText>
        </Box>
      </Box>

      <StyledText>Align items strech</StyledText>
      <Box mb={5} alignItems="stretch" bg="red.200" p={2} w={64} h={64}>
        <Box bg="blue.500" mt={1}>
          <StyledText>1</StyledText>
        </Box>
        <Box bg="blue.500" mt={1}>
          <StyledText>2</StyledText>
        </Box>
        <Box bg="blue.500" mt={1}>
          <StyledText>3</StyledText>
        </Box>
      </Box>

      <StyledText>Align items baseline</StyledText>
      <Box mb={5} alignItems="baseline" bg="red.200" p={2} w={64} h={64}>
        <Box bg="blue.500" mt={1}>
          <StyledText>1</StyledText>
        </Box>
        <Box bg="blue.500" mt={1}>
          <StyledText>2</StyledText>
        </Box>
        <Box bg="blue.500" mt={1}>
          <StyledText>3</StyledText>
        </Box>
      </Box>
    </Box>
  </ScrollView>
))

stories.add('With justify content', () => (
  <ScrollView>
    <Box mx="auto" maxWidth={320} my={8}>
      <StyledText>Justify content flex-start</StyledText>
      <Box mb={5} justifyContent="flex-start" bg="red.200" p={2} w={64} h={64}>
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
      </Box>
      <StyledText>Justify content center</StyledText>
      <Box mb={5} justifyContent="center" bg="red.200" p={2} w={64} h={64}>
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
      </Box>
      <StyledText>Justify content flex-end</StyledText>
      <Box mb={5} justifyContent="flex-end" bg="red.200" p={2} w={64} h={64}>
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
      </Box>

      <StyledText>Justify content space-between</StyledText>
      <Box
        mb={5}
        justifyContent="space-between"
        bg="red.200"
        p={2}
        w={64}
        h={64}
      >
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
      </Box>

      <StyledText>Justify content space-around</StyledText>
      <Box
        mb={5}
        justifyContent="space-around"
        bg="red.200"
        p={2}
        w={64}
        h={64}
      >
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
      </Box>
    </Box>
  </ScrollView>
))

stories.add('With direction', () => (
  <ScrollView>
    <Box mx="auto" maxWidth={320} my={8}>
      <StyledText>Row</StyledText>
      <Box flexDirection="row" mb={5} bg="red.200" p={2} w={64}>
        <Box w={8} h={8} bg="blue.500" m={1} />
        <Box w={8} h={8} bg="red.500" m={1} />
        <Box w={8} h={8} bg="green.500" m={1} />
      </Box>
      <StyledText>Col</StyledText>
      <Box flexDirection="column" mb={5} bg="red.200" p={2} w={64}>
        <Box w={8} h={8} bg="blue.500" m={1} />
        <Box w={8} h={8} bg="red.500" m={1} />
        <Box w={8} h={8} bg="green.500" m={1} />
      </Box>
      <StyledText>Row reverse</StyledText>
      <Box flexDirection="row-reverse" mb={5} bg="red.200" p={2} w={64}>
        <Box w={8} h={8} bg="blue.500" m={1} />
        <Box w={8} h={8} bg="red.500" m={1} />
        <Box w={8} h={8} bg="green.500" m={1} />
      </Box>
      <StyledText>Column reverse</StyledText>
      <Box flexDirection="column-reverse" mb={5} bg="red.200" p={2} w={64}>
        <Box w={8} h={8} bg="blue.500" m={1} />
        <Box w={8} h={8} bg="red.500" m={1} />
        <Box w={8} h={8} bg="green.500" m={1} />
      </Box>
    </Box>
  </ScrollView>
))

stories.add('Card', () => {
  return (
    <Box
      alignSelf="center"
      justifySelf="center"
      w={48}
      h={64}
      my="auto"
      shadow="lg"
      borderRadius="md"
      alignItems="center"
      justifyContent="space-between"
      p={4}
      transition="all 0.2s"
    >
      <StyledImage
        h={24}
        w="full"
        mb={4}
        source={{ uri: 'https://i.picsum.photos/id/237/536/354.jpg' }}
      />
      <Heading>Felipe Moyano</Heading>
      <StyledText color="red.800">Servicio técnico</StyledText>
      <StyledText fontSize="md" color="green.800">
        felipe.moyano
      </StyledText>
      <StyledText fontSize="xs" color="blue.900">
        + 57 310 212 4705
      </StyledText>
      <Button title="nativo" />
    </Box>
  )
})
