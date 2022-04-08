import { Box, Container, Button, Flex, Divider, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { paragraphs } from './about-data.js'
import { SectionHeader } from './SectionHeader'

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
                fontSize='lg'
                color={mode("gray.900", 'gray.400')}
              >
                {paragraph}
              </Text>
            )
          })}
        </Box>
        <Box mt={10}>
          <Flex justifyContent='space-around'>
            <Button variant='outline'>Our Approach</Button>
            <Button variant='outline'>Who is this service for?</Button>
            <Button variant='outline'>FAQs</Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}