import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'

export const ServicesCard = (props) => {
  const { title, value, children, pageLink } = props
  return (
    <Link href={`/experience/${pageLink}`}>
      <Box 
        cursor='pointer' 
        _hover={{
          background: useColorModeValue('gray.100', 'gray.900'),
        }} 
        as="dl" 
        bg={useColorModeValue('white', 'gray.700')}
        p="6" 
        rounded="lg" 
        shadow="md"
      >
        <Text
          as="dt"
          color={useColorModeValue('blue.500', 'blue.200')}
          fontSize="sm"
          fontWeight="bold"
          textTransform="uppercase"
        >
          {title}
        </Text>
        <Text as="dd" fontSize="3xl" fontWeight="extrabold" lineHeight="1" my="4">
          {value}
        </Text>
        <Text as="dd" color={useColorModeValue('gray.600', 'white')}>
          {children}
        </Text>
      </Box>
    </Link>

  )
}