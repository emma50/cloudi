import { 
  Box, 
  Text, 
  Flex, 
  AccordionItem, 
  AccordionItemContent,
  AccordionItemTrigger,
  // AccordionRoot, 
  Icon, 
  Stack 
} from "@chakra-ui/react"
import { GoPlus } from "react-icons/go";
import { useSpring } from '@react-spring/web';
import { Animated } from "@/externals";
import { useInView } from 'react-intersection-observer';

export default function Faq() {
  // Use the `useInView` hook to detect when the element is visible
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger every time the element comes into view
    // threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // Define the animation using `useSpring`
  const textStyles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(80px)',
    config: { mass: 1, tension: 200, friction: 20, duration: 500 },
    delay: 500,
  });

  return (
    <Flex ref={ref} maxW="100%" minH="785px" p="5rem" gap="3.688rem" flexDirection="column">
      <Animated.Text style={textStyles} textAlign="center" maxW="1284px" minH="60px" fontWeight="600" fontSize="3rem" lineHeight="3.75rem" color={{base: "#000000", _dark: "#FEFEFE"}}>{inView ? "Frequently Asked Questions" : ""}</Animated.Text>
      <Flex flexDirection="column" w="100%" alignItems="center">
        <Animated.Flex flexDirection="column" maxW="963px" minH="506px" gap="2.5rem">
          <CustomAccordion />
          {inView ? (
            <>
              <Text minW="182px" minH="26px" fontWeight="400" fontSize="1.25rem" lineHeight="1.625rem" color={{base: "#2D2D2D", _dark: "#E8ECEF"}} textAlign="start">Still got questions? Contact us via <Text as="span" color="#005EDF" fontWeight="600">Whatsapp</Text> or <Text as="span" color="#005EDF" fontWeight="600">Email</Text></Text>
            </>
          ) : <></>}
        </Animated.Flex>
      </Flex>
    </Flex>
  )
}

const CustomAccordion = () => {
  // Use the `useInView` hook to detect when the element is visible
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger every time the element comes into view
    // threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // Define the animation using `useSpring`
  const textStyles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(80px)',
    config: { mass: 1, tension: 200, friction: 20, duration: 500 },
    delay: 500,
  });

  return (
    <Stack ref={ref} maxW="full" mx="auto">
      <Animated.AccordionRoot style={textStyles} collapsible defaultValue={["reason"]} display="flex" flexDirection="column">
        <Box mx="auto">
          {inView ? (
            items.map((item) => (
              <AccordionItem key={item.value} value={item.value} border="1px solid #6C7275" mb="1.25rem" px="1rem" py="1rem" w={{base: "auto", md: "43.75rem", lg: "60rem"}} borderRadius="8px">
                <AccordionItemTrigger display="flex" justifyContent="space-between" alignItems="center">
                  <Box minW="256px" minH="32px" fontWeight="600" fontSize="1.5rem" lineHeight="2rem" color={{base: "#000000", _dark: "#FEFEFE"}} textAlign="start">{item.title}</Box>
                  <Icon fontSize="md" color="fg.subtle" w="32px" minH="32px" border="1px solid #6C7275" display="initial">
                    {item.icon}
                  </Icon>
                </AccordionItemTrigger>
                <AccordionItemContent textAlign="start">{item.content}</AccordionItemContent>
              </AccordionItem>
            )) 
          ) : <></>}
        </Box>
      </Animated.AccordionRoot>
    </Stack>
  )
}

const items = [
  {
    value: "reason",
    icon: <GoPlus />,
    title: "What is this course for?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
  {
    value: "learning",
    icon: <GoPlus />,
    title: "What tools will I learn?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
  {
    value: "cost",
    icon: <GoPlus />,
    title: "How much does the training cost?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
  {
    value: "certificate",
    icon: <GoPlus />,
    title: "Will I get a certificate?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
  },
]

