import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Box } from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { About } from '../components/About'
import { Pricing } from '../components/Pricing'
import { Faq } from '../components/Faq'

export default function Index() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Faq />
      <Footer />
    </Box>
    // Navbar
    // Hero
    // About
    // Features / services
    // Testimonials
    // Contact
    // Footer
  )
}
