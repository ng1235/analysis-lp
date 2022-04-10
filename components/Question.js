import {
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Box,
  useColorModeValue as mode
} from '@chakra-ui/react';

export const Question = ({ title, answer}) => (
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ 
          bg: mode('gray.100', 'gray.600'),   fontWeight: 'semibold' 
        }}>
        <Box flex='1' textAlign='left' fontSize='18px'>
          { title }
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      { answer }
    </AccordionPanel>
  </AccordionItem>
)