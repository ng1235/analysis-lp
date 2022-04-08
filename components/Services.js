import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode
} from '@chakra-ui/react'
import * as React from 'react'
import { services } from './services-data'
import { SectionHeader } from './SectionHeader'

export const Services = () => {

  return (    
    <Box as="section" bg="bg-surface">
      <Container
        py={{
          base: '16',
          md: '24',
        }}
      >
        <SectionHeader title="Services" />
        <Stack
          spacing={{
            base: '12',
            md: '16',
          }}
        >
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
            }}
            columnGap={8}
            rowGap={{
              base: 10,
              md: 24,
            }}
            my={10}
          >
            {services.map((service) => (
              <Stack
                key={service.name}
                spacing={{
                  base: '4',
                  md: '5',
                }}
                align="center"
                textAlign="center"
              >
                <Square
                  size={{
                    base: '10',
                    md: '10',
                  }}
                  bg={mode('blue.800', 'blue.400')}
                  color='white'
                  borderRadius="lg"
                >
                  <Icon
                    as={service.icon}
                    boxSize={{
                      base: '5',
                      md: '6',
                    }}
                  />
                </Square>
                <Stack
                  spacing={{
                    base: '1',
                    md: '2',
                  }}
                >
                  <Text
                    fontSize={{
                      base: 'lg',
                      md: 'xl',
                    }}
                    fontWeight="medium"
                    color={mode('gray.900', 'gray.400')}
                  >
                    {service.name}
                  </Text>
                  <Text color={mode('gray.900', 'gray.400')}>{service.description}</Text>
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}
