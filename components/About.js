import { Box, Container, Button, Flex, Divider, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { paragraphs } from './text-data/about-data'
import { SectionHeader } from './SectionHeader'
import Link from 'next/link'

export const About = () => {

  return (
    <Box as="section" bg="bg-red" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '12' }}>
      <Container>
        <SectionHeader title={"About"} />
        <Box>
          {paragraphs.map((paragraph, idx) => {
            return (
              <Text 
                mt={7} 
                key={idx} 
                px="5" 
                fontSize={{
                  base: 'lg',
                  lg: 'xl'
                }}
                color={mode("gray.900", 'gray.400')}
              >
                {paragraph}
              </Text>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}