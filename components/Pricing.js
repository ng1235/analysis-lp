import { Box, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { SectionHeader } from './SectionHeader'
import { SectionText } from './SectionText'
import { priceBodyText } from './pricing-data'

export const Pricing = () => {
  return (
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
        <SectionHeader title={"Pricing"} />
        <SectionText bodyText={ priceBodyText } />
      </Box>
    </Box>
  )
}