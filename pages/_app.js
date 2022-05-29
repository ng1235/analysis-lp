import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from '@chakra-ui/pro-theme';
import "@fontsource/inter";
import Head from 'next/head';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

function MyApp({ Component, pageProps }) {
  const myTheme = extendTheme({
    colors: {},
    fonts: {
      heading: `'Inter', 'sans-serif'`,
      body: `'Inter', 'sans-serif'`
    },
  },
  theme,
  config,
  )
  return (
    <ChakraProvider theme={myTheme}>
      <Head>
        <title>NG Insights - Tailored Commercial Evaluation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
