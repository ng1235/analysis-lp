import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Box } from '@chakra-ui/react'
import { Approach } from '../components/Approach'

export default function OurApproach() {
  return (
    <Box>
      <Navbar />
      <Approach />
      <Footer />
    </Box>
  )
}