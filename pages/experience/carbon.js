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
        heading={"Carbon & Greening Australia"} 
        image={mode('/cos-light.svg', '/cos-dark.svg')}
        overview={projects.carbon.overview}
        role={projects.carbon.role}
        deliverables={projects.carbon.deliverables}
        outcome={projects.carbon.outcome}
        url="www.woodside.com.au/docs/default-source/media-releases/woodside-and-greening-australia-partner-for-native-tree-project.pdf?sfvrsn=58e6f58b_1"
      />
      <Footer />
    </Box>
  )
}