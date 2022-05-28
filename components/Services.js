import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import * as React from 'react'
import { ServicesCard } from './ServicesCard'

export const Services = () => {
  return (
    <Box as="section" pb="20">
      <Box bg="blue.600" pt="20" pb="20">
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
          <Box mb="16" color="white" maxW="xl">
            <Heading size="2xl" letterSpacing="tight" fontWeight="bold" lineHeight="normal">
              A proven track record
            </Heading>
            <Text fontSize="lg" mt="4" fontWeight="medium">
              With experience in mega-projects, startups, mergers & acquisitions, joint-venture relationship management and alternate business development opportunities, we provide board & executive-ready information, analysis and tools at speed.
            </Text>
            <Text fontSize="lg" mt="4" fontWeight="medium">
              Read more about some of our experience below:
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="-20">
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '1',
          }}
        >
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 4,
            }}
            spacing="6"
          >
            <ServicesCard title="Onshore Unconventionals" value="Kitimat" pageLink='klng'>
              Model construction for a LNG megaproject
            </ServicesCard>
            <ServicesCard title="Hydrogen & New Energy" value="HyNet" pageLink='hynet'>
              Valuation & recommendation for participation in a Korean hydrogen consortium
            </ServicesCard>
            <ServicesCard title="Infrastructure / Gas Purchase" value="Port Arthur" pageLink='palng'>
              Economics for potential US Gulf of Mexico project buy-in
            </ServicesCard>
            <ServicesCard title="Alternate Business" value="Carbon" pageLink='carbon'>
              Analysis for purchase of land for bio-sequestration
            </ServicesCard>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}