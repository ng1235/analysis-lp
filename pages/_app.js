import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from '@chakra-ui/pro-theme';
import '@fontsource/inter/variable.css'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

function MyApp({ Component, pageProps }) {
  const myTheme = extendTheme({
    colors: {},
  },
  theme,
  config,
  )
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
