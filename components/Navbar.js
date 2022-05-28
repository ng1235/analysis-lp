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
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiMail, FiCloud, FiFeather, FiBookOpen } from 'react-icons/fi'
import { Logo } from './Logo'
import Link from 'next/link'

const icons = [<FiFeather key={0} />, <FiCloud key={1} />];

const navbarLocations = ['about', 'service', 'approach'];
const navbarLabels = ['Who We Are', 'What We Do'];

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
  const [tab, setTab] = useState(null)

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      as="section"
    >
      <Box
        as="nav"
        bg="bg-surface"
        py={{
          base: '3',
          lg: '4',
        }}
      >
        <Container maxW='8xl'>
          <HStack spacing="4" justify="space-evenly">
            <Logo />
            {isDesktop ? (
              <HStack spacing="20">
                <ButtonGroup variant="link" spacing="8">
                  {navbarLabels.map((item, idx) => (
                    <Link 
                      href={`/#${navbarLocations[idx]}`}
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
                  onClick={ onOpen }
                  aria-label="Open Menu"
                />
                <Drawer placement='left' size='xs' isOpen={isOpen} finalFocusRef={tab} onClose={onClose}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>
                      <Logo />
                    </DrawerHeader>
                    <DrawerBody >
                      <Stack spacing="4" align='flex-start'>
                          {navbarLabels.map((item, idx) => (
                            <Link 
                              href={`/#${navbarLocations[idx]}`}
                              passHref
                              key={idx}
                            >
                              <Button
                                onClick={() => {
                                  setTab(navbarLocations[idx])
                                  onClose()
                                }}
                                leftIcon={icons[idx]}
                                variant="ghost"
                              >
                                {item}
                              </Button>
                            </Link>
                          ))}
                        <a target="_blank" href="mailto:matthewtng.2@gmail.com"
                        rel="noopener noreferrer"
                        >
                          <Button variant="ghost" borderRadius="5" onClick={onClose} leftIcon={<FiMail />}>
                            Contact
                          </Button>
                        </a>
                      </Stack>                      
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
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