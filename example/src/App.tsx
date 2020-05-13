import * as React from 'react'
import { Box, Text, ThemeProvider, defaultTheme } from 'rn-ramen'

export default function App() {
  const [result, setResult] = React.useState<string | undefined>()

  React.useEffect(() => {
    setResult('Welcome to React Native Ramen')
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box bg="red.500" flex={1} justifyContent="center" alignItems="center">
        <Text color="white">{result}</Text>
      </Box>
    </ThemeProvider>
  )
}
