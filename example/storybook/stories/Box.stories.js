import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Box, Text, Image, Heading } from 'rn-ramen'
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
      <Text>This is a box</Text>
    </Box>
    <Box mt={5} borderRadius="md" shadow="md" height="16" bg="red.500">
      <Text>This is a box</Text>
    </Box>
    <Box mt={5} borderRadius="md" shadow="lg" height="16" bg="orange.200">
      <Text>This is a box</Text>
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
      <Text color="white">This is a box</Text>
    </Box>
    <Box mt={5} borderRadius="lg" shadow="inset" height="16" bg="red.200">
      <Text>This is a box</Text>
    </Box>
  </Box>
))

stories.add('With shadows', () => (
  <Box mx="auto" maxWidth={320} mt={8}>
    <Box mt={5} shadow="sm" bg="red.200" justifyContent="center">
      <Text>Shadow sm</Text>
    </Box>
    <Box mt={5} shadow="md" bg="red.200" justifyContent="center">
      <Text>Shadow md</Text>
    </Box>
    <Box mt={5} shadow="lg" bg="red.200" justifyContent="center">
      <Text>Shadow lg</Text>
    </Box>

    <Box mt={5} shadow="lg" bg="red.200" justifyContent="center">
      <Text>Shadow xl</Text>
    </Box>
  </Box>
))

stories.add('With rounded corners', () => (
  <Box mx="auto" maxWidth={320} mt={8}>
    <Box mt={5} borderRadius="sm" bg="red.200" p={2}>
      <Text>Border radius sm</Text>
    </Box>
    <Box mt={5} borderRadius="md" bg="red.200" p={2}>
      <Text>Border radius md</Text>
    </Box>
    <Box mt={5} borderRadius="lg" bg="red.200" p={2}>
      <Text>Border radius lg</Text>
    </Box>

    <Box mt={5} borderRadius="full" bg="red.200" p={2}>
      <Text>Border radius full</Text>
    </Box>
  </Box>
))

stories.add('With align items', () => (
  <ScrollView>
    <Box mx="auto" maxWidth={320} my={8}>
      <Text>Align items flex-start</Text>
      <Box mb={5} alignItems="flex-start" bg="red.200" p={2} w={64} h={64}>
        <Box bg="blue.500" mt={1}>
          <Text>1</Text>
        </Box>
        <Box bg="blue.500" mt={1}>
          <Text>2</Text>
        </Box>
        <Box bg="blue.500" mt={1}>
          <Text>3</Text>
        </Box>
      </Box>
      <Text>Align items center</Text>
      <Box mb={5} alignItems="center" bg="red.200" p={2} w={64} h={64}>
        <Box bg="blue.500" mt={1}>
          <Text>1</Text>
        </Box>
        <Box bg="blue.500" mt={1}>
          <Text>2</Text>
        </Box>
        <Box bg="blue.500" mt={1}>
          <Text>3</Text>
        </Box>
      </Box>
      <Text>Align items flex-end</Text>
      <Box mb={5} alignItems="flex-end" bg="red.200" p={2} w={64} h={64}>
        <Box bg="blue.500" mt={1}>
          <Text>1</Text>
        </Box>
        <Box bg="blue.500" mt={1}>
          <Text>2</Text>
        </Box>
        <Box bg="blue.500" mt={1}>
          <Text>3</Text>
        </Box>
      </Box>

      <Text>Align items strech</Text>
      <Box mb={5} alignItems="stretch" bg="red.200" p={2} w={64} h={64}>
        <Box bg="blue.500" mt={1}>
          <Text>1</Text>
        </Box>
        <Box bg="blue.500" mt={1}>
          <Text>2</Text>
        </Box>
        <Box bg="blue.500" mt={1}>
          <Text>3</Text>
        </Box>
      </Box>

      <Text>Align items baseline</Text>
      <Box mb={5} alignItems="baseline" bg="red.200" p={2} w={64} h={64}>
        <Box bg="blue.500" mt={1}>
          <Text>1</Text>
        </Box>
        <Box bg="blue.500" mt={1}>
          <Text>2</Text>
        </Box>
        <Box bg="blue.500" mt={1}>
          <Text>3</Text>
        </Box>
      </Box>
    </Box>
  </ScrollView>
))

stories.add('With justify content', () => (
  <ScrollView>
    <Box mx="auto" maxWidth={320} my={8}>
      <Text>Justify content flex-start</Text>
      <Box mb={5} justifyContent="flex-start" bg="red.200" p={2} w={64} h={64}>
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
      </Box>
      <Text>Justify content center</Text>
      <Box mb={5} justifyContent="center" bg="red.200" p={2} w={64} h={64}>
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
      </Box>
      <Text>Justify content flex-end</Text>
      <Box mb={5} justifyContent="flex-end" bg="red.200" p={2} w={64} h={64}>
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
        <Box w={8} h={8} bg="blue.500" mt={1} />
      </Box>

      <Text>Justify content space-between</Text>
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

      <Text>Justify content space-around</Text>
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
      <Text>Row</Text>
      <Box flexDirection="row" mb={5} bg="red.200" p={2} w={64}>
        <Box w={8} h={8} bg="blue.500" m={1} />
        <Box w={8} h={8} bg="red.500" m={1} />
        <Box w={8} h={8} bg="green.500" m={1} />
      </Box>
      <Text>Col</Text>
      <Box flexDirection="column" mb={5} bg="red.200" p={2} w={64}>
        <Box w={8} h={8} bg="blue.500" m={1} />
        <Box w={8} h={8} bg="red.500" m={1} />
        <Box w={8} h={8} bg="green.500" m={1} />
      </Box>
      <Text>Row reverse</Text>
      <Box flexDirection="row-reverse" mb={5} bg="red.200" p={2} w={64}>
        <Box w={8} h={8} bg="blue.500" m={1} />
        <Box w={8} h={8} bg="red.500" m={1} />
        <Box w={8} h={8} bg="green.500" m={1} />
      </Box>
      <Text>Column reverse</Text>
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
      <Image
        h={24}
        w="full"
        mb={4}
        source={{ uri: 'https://i.picsum.photos/id/237/536/354.jpg' }}
      />
      <Heading>Felipe Moyano</Heading>
      <Text color="red.800">Servicio técnico</Text>
      <Text fontSize="md" color="green.800">
        felipe.moyano
      </Text>
      <Text fontSize="xs" color="blue.900">
        + 57 310 212 4705
      </Text>
      <Button title="nativo" />
    </Box>
  )
})
