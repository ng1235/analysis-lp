import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue as mode
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu, FiMoon, FiSun, FiMail } from 'react-icons/fi'
import { Logo } from './Logo'
import Link from 'next/link'

function ToggleTheme() {
  const { toggleColorMode } = useColorMode()
  return (
    <header>
      <IconButton 
        fontSize='24px'
        aria-label='toggle color mode'
        icon={mode(<FiMoon />, <FiSun />)}
        onClick={toggleColorMode}
      />
    </header>
  )
}

export const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box
      as="section"
    >
      <Box
        as="nav"
        bg="bg-surface"
        py={{
          base: '4',
          lg: '5',
        }}
      >
        <Container>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <HStack spacing="10">
                <ButtonGroup variant="link" spacing="8">
                  {['About', 'Service'].map((item, idx) => (
                    <Link 
                      href={`/#${item.toLowerCase()}`}
                      passHref
                      key={idx}
                    >
                      <Button 
                        variant="ghost" 
                      >
                        {item}
                      </Button>
                    </Link>
                  ))}
                </ButtonGroup>
                <Box>
                  <a target="_blank" href="mailto:matthewtng.2@gmail.com"
                  rel="noopener noreferrer"
                  >
                    <Button variant="outline" px="6" borderRadius="5" leftIcon={<FiMail />}>
                      Contact
                    </Button>
                  </a>
                </Box>
                <ToggleTheme />
              </HStack>
            ) : (
              <HStack spacing="10">
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
                <ToggleTheme />
              </HStack>
            )}
          </HStack>
        </Container>
      </Box>
      <Divider />
    </Box>
  )
}