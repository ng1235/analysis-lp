import { Project } from '../../components/experience/ProjectOutline'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Box, useColorModeValue as mode } from '@chakra-ui/react'
import { projects } from '../../components/text-data/projects-data'

export default function ProjectDescription() {
  return (
    <Box>
      <Navbar />
      <Project 
        heading={"Port Arthur LNG"} 
        image={mode('/table-light.svg', '/table-dark.svg')}
        overview={projects.palng.overview}
        role={projects.palng.role}
        deliverables={projects.palng.deliverables}
        outcome={projects.palng.outcome}
        url="www.reuters.com/article/us-woodside-lng-sempra-idUSKBN1KA2TA"
      />
      <Footer />
    </Box>
  )
}