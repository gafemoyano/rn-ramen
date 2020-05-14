# rn-ramen

A delicious component library for React Native based un styled system and inspired by Charka UI

## Installing React Native Ramen UI

To use React Native Ramen components, all you need to do is install the `rn-ramen`
package and its peer dependencies:

```sh
$ yarn add @rn-ramen @emotion/react@next @emotion/native@next emotion-theming@next

# or

$ npm install @rn-ramen @emotion/react@next @emotion/native@next emotion-theming@next
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `ThemeProvider` provided by
   **rn-ramen**.

```jsx
import { ThemeProvider } from "rn-ramen".

// Do this at the root of your application
const App = ({ children }) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
