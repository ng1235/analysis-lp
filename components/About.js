import {
  Box,
  Button,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiPlay } from 'react-icons/hi'

export function About() {
  return (
    <Box as="section" bg={mode('white', 'gray.800')} pt="20" pb="24">
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
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          spacing={{
            base: '3rem',
            lg: '2rem',
          }}
          mt="8"
          align={{
            lg: 'center',
          }}
          justify="space-between"
        >
          <Box
            pos="relative"
            w={{
              base: 'full',
              lg: '560px',
            }}
            h={{
              base: 'auto',
              lg: '560px',
            }}
          >
            <Img
              w="100"
              pos="relative"
              zIndex="2"
              h={{
                lg: '80%',
              }}
              objectFit="cover"
              src= {mode("./tornado-light.svg", "./tornado-dark.svg")}
              alt="Screening talent"
            />
            <Box
              pos="absolute"
              zIndex="1"
              w="100%"
              h="80%"
              top="-4"
              left="-4"
              bg={mode('white', 'gray.800')}
            />
          </Box>
          <Box
            flex="1"
            maxW={{
              lg: '520px',
            }}
          >
            <Text
              size="xs"
              textTransform="uppercase"
              fontWeight="semibold"
              color={mode('blue.600', 'blue.300')}
              letterSpacing="wide"
            >
              About Us
            </Text>
            <Heading
              as="h1"
              size="3xl"
              color={mode('blue.600', 'blue.300')}
              mt="8"
              fontWeight="bold"
              letterSpacing="tight"
            >
              Analysis on call
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
              With professional training in valuation and analysis technique, we work autonomously with you on an on-demand basis, with no fixed term or full-time arrangements required.
            </Text>
            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
              Our key competencies include:
            </Text>
            <UnorderedList color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium" spacing="3">
              <ListItem>
                New valuation model builds with key investment metrics to determine project viability
              </ListItem>
              <ListItem>
                Existing valuation model modifications & additions to reflect alternate business model considerations
              </ListItem>
              <ListItem>
                Scenario (i.e. price & cost) analysis & optimization 
              </ListItem>
              <ListItem>
                Commercial negotiation support / participation
              </ListItem>
            </UnorderedList>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              spacing="4"
              mt="8"
            >
            </Stack>
          </Box>          
        </Stack>
      </Box>
    </Box>
  )
}