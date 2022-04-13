import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMail } from 'react-icons/fi'

export function Hero() {
  return (
    <Box as="section" bg={mode('white', 'gray.800')} pt={{base: "16", md: "24"}} pb="12" overflow="hidden">
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
        <Flex
          direction={{
            base: 'column',
            lg: 'row',
          }}
          maxW='2xl'
          mx='auto'
          justifyContent='center'
          mb="24"
        >
          <Flex
            direction='column'
            alignItems='center'
          >
            <Heading 
              fontWeight="bold" 
              as="h1" mt="8" 
              textAlign='center'
              size='3xl'
            >
              On-demand, industry standard project economic analysis.
            </Heading>
            <Text 
              color={mode('gray.600', 'gray.400')}
              mt="5" 
              fontSize="2xl" 
              textAlign='center' 
              p={{
                md: '0',
                lg: '5'
                }}
              >
              NextGen delivers professional, timely & robust project economics to support early opportunity decision making.
            </Text>
            <a 
              href="mailto: matthewtng.2@gmail.com" target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                mt="12"
                minW="10rem"
                bgColor={mode('blue.800', 'blue.200')}
                _hover={{ bg: mode('blue.700', 'blue.300') }}
                color={mode('white', 'gray.800')}
                size="lg"
                height="14"
                px="8"
                fontSize="md"
                leftIcon={<FiMail size='20' />}
                textAlign='center'
              >
                Get in touch
              </Button>
            </a>

          </Flex>
          {/* <Img
            pos="relative"
            marginEnd="-16rem"
            w="50rem"
            src="https://res.cloudinary.com/chakra-ui-pro/image/upload/v1621082943/pro-website/screenshot-dark_w6jpks.png"
            alt="Screenshot for Form builder"
          /> */}
        </Flex>
      </Box>
    </Box>
  )
}