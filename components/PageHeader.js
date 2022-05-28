import React from 'react';
import { 
  Stack,
  Text,
  Divider,
  useColorModeValue as mode
} from '@chakra-ui/react';

export const PageHeader = ({ title }) => {
  return (

    <Stack spacing="2" px="5" mt="16" mb="7">
      <Text 
        fontSize="4xl" 
        fontWeight="bold"
        color={mode('gray.900', 'white')}
        textAlign='center'
      >
        { title } 
      </Text>
      <Divider />
    </Stack>
  )
}