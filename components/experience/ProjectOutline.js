import {
  Box,
  Center,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Button,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaCommentDots, FaCopy, FaCompress, FaCircleNotch, FaChevronCircleRight } from 'react-icons/fa'
import { Feature } from './Feature'

export const Project = ({ heading, image, overview, role, deliverables, outcome, url }) => {
  return (
    <Box as="section" bg={mode('white', 'gray.800')} pt="14" pb="32">
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
        <Heading textAlign="center" letterSpacing="tight" fontWeight="extrabold">
          { heading }
        </Heading>        
        <Box mt="12">
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
            }}
            spacing={{
              base: '16',
              md: '12',
            }}
          >
            <Stack p={8} spacing="8" maxW="lg">
              <Feature icon={<Box as={FaCommentDots} w="6" h="6" />} title="Overview">
                { overview }
              </Feature>
              <Feature icon={<Box as={FaCompress} w="6" h="6" />} title="Our Role">
                { role }
              </Feature>
              <Feature icon={<Box as={FaCopy} w="6" h="6" />} title="What We Delivered">
                { deliverables }
              </Feature>
              <Feature icon={<Box as={FaCircleNotch} w="6" h="6" />} title="Business Outcome">
                { outcome }
              </Feature>
            </Stack>
            <Center minH="26rem">
              <Img
                w="100%"
                h="100%"
                src={image}
                alt="Analytical chart"
              />
            </Center>
          </SimpleGrid>
          <Center>
            <Button 
              as="a"
              href={`https://${url}`}
              target="_blank"
              rightIcon={<FaChevronCircleRight />}
            >
              Read More
            </Button>
          </Center>
        </Box>
      </Box>
    </Box>
  )
}