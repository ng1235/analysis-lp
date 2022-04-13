import React from 'react';
import { Text, useColorModeValue as mode } from '@chakra-ui/react';



export const SectionText = ({ bodyText }) => (
  <Text 
    mt="6" 
    px={'5'} 
    fontSize={{
      base: 'lg',
      lg: 'xl'
    }}
    color={mode('gray.900', 'gray.400')}
  >  
    { bodyText }
  </Text>
)