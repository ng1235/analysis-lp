import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@chakra-ui/pro-theme';
import '@fontsource/inter';
import { extendTheme } from '@chakra-ui/react'
import customTheme from './theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
