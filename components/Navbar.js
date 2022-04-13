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

const icons = {
  'about': <FiFeather />,
  'approach': <FiCloud />,
  'service': <FiBookOpen />
}

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
                  {['About', 'Service', 'Approach'].map((item, idx) => (
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
                          {['About', 'Service', 'Approach'].map((item, idx) => (
                            <Link 
                              href={`/#${item.toLowerCase()}`}
                              passHref
                              key={idx}
                            >
                              <Button
                                onClick={() => {
                                  setTab(item.toLowerCase())
                                  onClose()
                                }}
                                leftIcon={icons[item.toLowerCase()]}
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