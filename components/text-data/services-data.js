import { BsFillMoonFill, BsStars } from 'react-icons/bs'
import { FaAccessibleIcon, FaExpandAlt, FaPaintBrush } from 'react-icons/fa'
import { IoRocketSharp } from 'react-icons/io5'

export const services = [
  {
    name: 'Life-Cycle Economics',
    description: 'Full project economics evaluation, using industry-standard discounted cash flow valuation technique',
    icon: BsStars,
  },
  {
    name: 'Sensitivity Analysis',
    description:
      "Capable of delivering a comprehensive set of flex cases to understand key project value levers",
    icon: IoRocketSharp,
  },
  {
    name: 'Segmented Value Chain',
    description: 'Capable of delivering assessments of complex business models, including multiple segments of the value chain with differing rates of return',
    icon: BsFillMoonFill,
  },
  {
    name: 'On-demand',
    description:
      "We work autonomously and independently - no fixed-term or full-time contracts required",
    icon: FaPaintBrush,
  },
]