import { Box, Button, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const CallToAction = () => {
  return (
    <Box as="section">
      <Box
        maxW="3xl"
        mx="auto"
        px={{
          base: '6',
          lg: '8',
        }}
        py={{
          base: '16',
          sm: '20',
        }}
        textAlign="center"
      >
        <Text fontWeight="semibold" textTransform='uppercase' color={useColorModeValue('blue.600', 'blue.200')}>
          Need more information?
        </Text>
        <Heading
          my="4"
          fontSize={{
            base: '4xl',
            md: '6xl',
          }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="1.2"
        >
          Reach out {' '}
          <Box
            as="mark"
            bg="unset"
            color={useColorModeValue('blue.600', 'blue.200')}
            whiteSpace="nowrap"
          >
            today
          </Box>
        </Heading>
        <Text fontSize="lg" maxW="lg" mx="auto">
          Contact us for an obligation-free discussion on how we can help, based on your specific requirements
        </Text>
        <Stack
          direction={{
            base: 'column',
            sm: 'row',
          }}
          mt="10"
          justify="center"
          spacing={{
            base: '3',
            md: '5',
          }}
          maxW="md"
          mx="auto"
        >
          <Button
            as="a"
            target="_blank" 
            href="mailto:matthewtng.2@gmail.com"
            rel="noopener noreferrer"
            size="lg"
            h="14"
            px="10"
            colorScheme="blue"
            fontWeight="bold"
            flex={{
              md: '1',
            }}
          >
            Get started
          </Button>
          <Button
            as="a"
            flex={{
              md: '1',
            }}
            variant="outline"
            href="/questions"
            size="lg"
            h="14"
            px="10"
            fontWeight="bold"
          >
            FAQs
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}