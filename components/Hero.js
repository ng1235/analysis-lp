import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

export function Hero() {
  return (
    <Box as="section" bg={mode('white', 'gray.800')} pt="24" pb="12" overflow="hidden">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Flex
          alignItems="center"
          direction={{
            base: 'column',
            lg: 'row',
          }}
          justify='center'
          mb="20"
        >
          <Box
            flex="1"
            maxW={{
              lg: 'xl',
            }}
          >
            <Heading as="h1" size="3xl" mt="8" fontWeight="bold" textAlign='center'>
              On-demand, industry standard economic modelling.
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mt="5" fontSize="2xl" textAlign='center'>
              NextGen delivers professional, timely & robust project economics to support early opportunity decision making.
            </Text>
            <Button
              mt="12"
              minW="10rem"
              colorScheme="blue"
              size="lg"
              height="14"
              px="8"
              fontSize="md"
              ml="35%"
            >
              Get in touch
            </Button>
          </Box>
          {/* <Img
            pos="relative"
            marginEnd="-16rem"
            w="50rem"
            src="https://res.cloudinary.com/chakra-ui-pro/image/upload/v1621082943/pro-website/screenshot-dark_w6jpks.png"
            alt="Screenshot for Form builder"
          /> */}
        </Flex>
      </Box>
    </Box>
  )
}