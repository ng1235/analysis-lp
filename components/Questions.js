import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Box
} from '@chakra-ui/react';
import { PageHeader } from './PageHeader'
import { questions } from './text-data/questions-data'
import { Question } from './Question'

export const AllQuestions = () => (
  <Box maxWidth='2xl' mx='auto' my="16" px="10">
    <PageHeader title="Questions" />
    <Accordion mx='6' allowMultiple>
      {questions.map((question, idx) => (
        <Question 
          key={idx} 
          title={question.title}
          answer={question.answer}
        />
      ))}
    </Accordion>
  </Box>
)