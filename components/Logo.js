import { useColorModeValue as mode } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'

export function Logo () {
  return (
    <Link href='/' passHref>
      <Image 
        htmlWidth='50px' 
        htmlHeight='25px' 
        src={mode("/logo-dark.svg", "./logo-light.svg")}
        cursor='pointer' 
      />
    </Link>
  )
}