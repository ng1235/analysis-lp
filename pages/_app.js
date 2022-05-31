import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from '@chakra-ui/pro-theme';
import "@fontsource/inter";
import Head from 'next/head';
import Script from 'next/script';

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
    <>
      <Script id="get-gtag" strategy="lazyOnload" async src= 'https://www.googletagmanager.com/gtag/js?id=G-Y5N1099QLF' />

      <Script id="activate-gtag" strategy="lazyOnLoad">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y5N1099QLF');
        `}
      </Script>
      <ChakraProvider theme={myTheme}>
        <Head>
          <title>NG Insights - Tailored Commercial Evaluation</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
