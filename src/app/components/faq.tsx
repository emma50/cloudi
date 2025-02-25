import { 
  Box, 
  Text, 
  Flex, 
  AccordionItem, 
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot, 
  Icon, 
  Stack 
} from "@chakra-ui/react"
import { GoPlus } from "react-icons/go";

export default function Faq() {
  return (
    <Flex maxW="100%" minH="785px" p="5rem" gap="3.688rem" flexDirection="column">
      <Text textAlign="center" maxW="1284px" minH="60px" fontWeight="600" fontSize="3rem" lineHeight="3.75rem" color={{base: "#000000", _dark: "#FEFEFE"}}>Frequently Asked Questions</Text>
      <Flex flexDirection="column" w="100%" alignItems="center">
        <Flex flexDirection="column" maxW="963px" minH="506px" gap="2.5rem">
          {/* alignContent="center" */}
          <CustomAccordion />
          <Text minW="182px" minH="26px" fontWeight="400" fontSize="1.25rem" lineHeight="1.625rem" color={{base: "#2D2D2D", _dark: "#E8ECEF"}} textAlign="start">Still got questions? Contact us via <Text as="span" color="#005EDF" fontWeight="600">Whatsapp</Text> or <Text as="span" color="#005EDF" fontWeight="600">Email</Text></Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

const CustomAccordion = () => {
  return (
    <Stack maxW="full" mx="auto">
      {/* maxW="400px" */}
      <AccordionRoot collapsible defaultValue={["reason"]} display="flex" flexDirection="column">
        {/* justifyContent="space-between"  flexWrap="wrap"*/}
        <Box mx="auto">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value} border="1px solid #6C7275" mb="1.25rem" px="1rem" py="1rem" maxW={{base: "auto", md: "60.188rem"}}>
              {/* h="80px" w={{base: "16rem", md: "60.188rem"}} */}
              <AccordionItemTrigger display="flex" justifyContent="space-between" alignItems="center">
                <Box minW="256px" minH="32px" fontWeight="600" fontSize="1.5rem" lineHeight="2rem" color={{base: "#000000", _dark: "#FEFEFE"}} textAlign="start">{item.title}</Box>
                <Icon fontSize="md" color="fg.subtle" w="32px" minH="32px" border="1px solid #6C7275" display="initial">
                  {item.icon}
                </Icon>
              </AccordionItemTrigger>
              <AccordionItemContent textAlign="start">{item.content}</AccordionItemContent>
            </AccordionItem>
        ))}
        </Box>
      </AccordionRoot>
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

