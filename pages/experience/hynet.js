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
        heading={"Hydrogen Network"} 
        image={mode('/lc-light.svg', '/lc-dark.svg')}
        overview={projects.hynet.overview}
        role={projects.hynet.role}
        deliverables={projects.hynet.deliverables}
        outcome={projects.hynet.outcome}
        url="www.woodside.com.au/docs/default-source/media-releases/woodside-joins-korean-hydrogen-consortium.pdf?sfvrsn=a0b38037_2"
      />
      <Footer />
    </Box>
  )
}