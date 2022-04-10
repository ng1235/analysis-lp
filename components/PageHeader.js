import React from 'react';
import { 
  Stack,
  Text,
  Divider,
  useColorModeValue as mode
} from '@chakra-ui/react';

export const PageHeader = ({ title }) => {
  return (

    <Stack spacing="2" px="5" my="16">
      <Text 
        fontSize="5xl" 
        fontWeight="medium"
        color={mode('gray.900', 'gray.400')}
        textAlign='center'
      >
        { title } 
      </Text>
      <Divider />
    </Stack>
  )
}