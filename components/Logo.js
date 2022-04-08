import { useColorMode } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import * as React from 'react'

export function Logo () {
  const { colorMode } = useColorMode();

  return (
    <Box 
      color={colorMode === 'light' ? 'blue.900' : 'blue.200'}
      fontWeight='bold'
    >
      NextGen
    </Box>
  )
}