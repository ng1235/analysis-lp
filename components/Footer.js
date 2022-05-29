import { ButtonGroup, Container, IconButton, Stack, Divider, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Logo } from './Logo'

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{
      base: '10',
      md: '10',
    }}
    maxW='100%'
  >
    <Divider />
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
      mt={6}
    >
      <Stack justify="center" spacing="14" direction="row" align="center">
        <Logo />
        <Text fontSize="sm" color={mode("gray.700", "gray.400")} textAlign='center'>
          &copy; {new Date().getFullYear()} Ng Insights
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/matthew-ng-2907ba11a/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="https://github.com/ng1235/" target="_blank" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton
            as="a"
            href="mailto:matthewtng.2@gmail.com"
            target="_blank"
            aria-label="Mail"
            icon={<FaEnvelope fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>

    </Stack>
  </Container>
)