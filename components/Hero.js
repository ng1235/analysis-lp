import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  Center,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiArrowRight } from 'react-icons/hi'

export const Hero = () => {
  return (
    <Box
      as="section"
      bg={mode('white', 'gray.800')}
      pos="relative"
      px={{
        base: '6',
        lg: '12',
      }}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          maxW={{
            lg: 'md',
            xl: 'xl',
          }}
          pt={{
            base: '20',
          }}
          pb={{
            base: '16',
            lg: '20',
          }}
        >
          <Heading as="h1" size="3xl" lineHeight="1" fontWeight="bold" letterSpacing="tight">
            Tailored opportunity and commercial evaluation {' '}
            <Box as="mark" color={mode('blue.600', 'blue.300')} bg="transparent">
              on demand
            </Box>
          </Heading>
          <Text mt={4} fontSize="xl" fontWeight="medium" color={mode('gray.600', 'gray.400')}>
            Get personalised opportunity analysis, valuations and tools for your project decisions at speed - whenever required.
          </Text>
            <a target="_blank" href="mailto:matthewtng.2@gmail.com"
            rel="noopener noreferrer">
              <Button mt="8" size="lg" width={{
                base: '100%', md: '40%'
              }} colorScheme="blue" height="14" px="8" fontSize="md" rightIcon={<HiArrowRight />}>
                Get in touch
              </Button>
            </a>
        </Box>
      </Box>
      <Box
        pos={{
          lg: 'absolute',
        }}
        insetY={{
          lg: '0',
        }}
        insetEnd={{
          lg: '0',
        }}
        w={{
          base: 'full',
          lg: '50%',
          '2xl': '70%'
        }}
        height={{
          base: '64',
          lg: 'full',
        }}
        // sx={{
        //   clipPath: {
        //     lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
        //   },
        // }}
      >
        <Img
          h="100%"
          w="100%"
          src={mode('./hero-light.svg', './hero-dark.svg')}
          alt="Value Proposition Graphic"
        />
      </Box>
    </Box>
  )
}