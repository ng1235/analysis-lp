import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Box } from '@chakra-ui/react'
import { AllQuestions } from '../components/Questions'

export default function Questions() {
  return (
    <Box>
      <Navbar />
      <AllQuestions />
      <Footer />
    </Box>
  )
}