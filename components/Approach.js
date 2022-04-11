import React from 'react';
import { Box, Text } from '@chakra-ui/react'
import { PageHeader } from './PageHeader'
import { Post } from './Post'
import { postData } from './text-data/approach-data'

export const Approach = () => (
  <Box maxWidth='2xl' mx='auto' my="16" px="10">
    <PageHeader title="Models Are Wrong" />
    <Post postContent={ postData } date={"April 2022"}/>
  </Box>
)