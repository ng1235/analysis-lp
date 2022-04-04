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
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi'
import { Logo } from './Logo'



function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <IconButton 
        colorScheme={colorMode === 'light' ? 'gray' : 'orange'}
        fontSize='24px'
        aria-label='toggle color mode'
        icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
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
      pb={{
        base: '12',
        md: '24',
      }}
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
                  {['About', 'Services', 'Testimonials'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <Box>
                  <Button variant="primary" py="10" px="6" my="-5" borderRadius="0">
                    Contact
                  </Button>
                </Box>
                <ToggleTheme />
              </HStack>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
      <Divider />
    </Box>
  )
}