import { ButtonGroup, Container, IconButton, Stack, Divider, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Logo } from './Logo'

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{
      base: '12',
      md: '16',
    }}
  >
    <Divider />
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
      mt={8}
    >
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <Text fontSize="sm" color={mode("gray.900", "gray.400")} textAlign='center'>
          &copy; {new Date().getFullYear()} Matthew N. ABN: 994 810 476 63
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaEnvelope fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>

    </Stack>
  </Container>
)