import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react'

const superscriptParas = [3, 4]

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
            <Text key={idx}>
              { text }
              {superscriptParas.includes(idx) && (
                <Text as="sup">{ idx - 2 }</Text>
              )}
            </Text>
          ))}
      </Stack>
      <Stack spacing="7" mt="10" p="5">
        {postContent.superscripts.map((text, idx) => (
          <Text as="sup" key={idx}>
            {idx + 1} {text}
          </Text>
        ))}
      </Stack>
    </Box>
  )
}