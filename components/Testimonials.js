import { Box, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { Testimonial } from './Testimonial'

export const Testimonials = () => {
  return (
    <Box as="section" bg={useColorModeValue('white', 'gray.800')} py="16">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px="4"
        pt="12"
        pb="8"
      >
        <Text 
          fontWeight="semibold" 
          mb="8"
          textTransform='uppercase' 
          color={useColorModeValue('blue.600', 'blue.200')}
          textAlign='center'
        >
          What others have said
        </Text>
        {/* <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing="10"
        > */}
          <Testimonial
            accentColor="blue.500"
            name="Cameron Bateman"
            role="Chief Development Officer - Province Resources"
            image="./cam-bateman.jpeg"
          >
            Listened, understood and helped me get the insights I needed. Really good at your job... you provide well considered and quality work. So from my point of view, if I need more work I will come to you as my first point of call.
          </Testimonial>
          {/* <Testimonial
            accentColor="red.500"
            name="Melinda Doe"
            role="Marketing Coordinator"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkxfHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          >
            Vulputate sapien nec sagittis aliquam malesuada bibendum. Posuere lorem ipsum dolor sit
            amet consectetur adipiscing elit duis
          </Testimonial> */}
        {/* </SimpleGrid> */}
      </Box>
    </Box>
  )
}