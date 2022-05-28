import React from 'react';
import Link  from 'next/link'
import { Button, Flex, Box, useColorModeValue as mode } from '@chakra-ui/react'
import { SectionHeader } from './SectionHeader'


export const Overview = () =>  (
  <Box as="section" bg={mode('white', 'gray.800')} py="10">
    <Box
      maxW={{
        base: 'xl',
        md: '2xl',
      }}
      mx="auto"
      px={{
        base: '6',
        md: '8',
      }}
    >
      <SectionHeader title="Our Approach" />
      <Flex justifyContent='space-around' mt={10} >
        <Link href="/our-approach" passHref>
          <Button fontWeight='medium' fontSize={{base: 'md', md: 'lg'}}variant='outline'>Models Are Wrong</Button>
        </Link>
        <Link href='/questions' passHref>
          <Button fontSize={{base: 'md', md: 'lg'}}
          fontWeight='light' variant='outline'>Questions</Button>
        </Link>
      </Flex>
    </Box>
  </Box>
)