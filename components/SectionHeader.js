import React from 'react';
import { 
  Stack,
  Text,
  Divider,
  useColorModeValue as mode
} from '@chakra-ui/react';

export const SectionHeader = ({ title }) => {
  return (
    <Stack spacing="2" px="5">
      <Text 
        fontSize="2xl" 
        fontWeight="medium"
        color={mode('gray.900', 'gray.400')}
      >
        { title } 
      </Text>
      <Divider />
    </Stack>
  )
  
}