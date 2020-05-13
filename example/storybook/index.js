import React from 'react'
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native'
import { ThemeProvider, defaultTheme } from 'rn-ramen'
import './rn-addons'
import { loadStories } from './storyLoader'

// import stories
configure(() => {
  loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
const AppProvider = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

addDecorator((story) => <AppProvider>{story()}</AppProvider>)

export default StorybookUIRoot
