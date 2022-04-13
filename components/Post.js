import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react'

const superscriptParas = [2, 3]

export function Post ({ postContent, date} ) {
  return (
    <Box  mt={-3}>
      <Text textAlign='center'>{ date }</Text>
        <Stack 
          spacing='7' 
          p={5} 
          borderRadius='5px' 
        >
          {postContent.body.map((text, idx) => (
            <Text key={idx} fontSize={{
              base: 'sm',
              md: 'lg'
            }}>
              { text }
              {superscriptParas.includes(idx) && (
                <Text as="sup">{ idx - 1 }</Text>
              )}
            </Text>
          ))}
      </Stack>
      <Stack spacing="3" p="5">
        {postContent.superscripts.map((text, idx) => (
          <Text fontSize='xs' key={idx}>
            {idx + 1} {text}
          </Text>
        ))}
      </Stack>
    </Box>
  )
}