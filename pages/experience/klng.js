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
        heading={"Kitimat LNG"} 
        image={mode('/cashflow-light.svg', '/cashflow-dark.svg')}
        overview={projects.kitimat.overview}
        role={projects.kitimat.role}
        deliverables={projects.kitimat.deliverables}
        outcome={projects.kitimat.outcome}
        url="www.woodside.com.au/docs/default-source/asx-announcements/2021-asx/029-woodside-to-exit-kitimat-lng.pdf?sfvrsn=10dee928_4"
      />
      <Footer />
    </Box>
  )
}