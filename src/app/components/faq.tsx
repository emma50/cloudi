import { 
  Box, 
  Text, 
  Flex, 
  AccordionItem, 
  AccordionItemContent,
  AccordionItemTrigger,
  // AccordionRoot, 
  Icon, 
  Stack, 
  List
} from "@chakra-ui/react"
import { GoPlus } from "react-icons/go";
import { useSpring } from '@react-spring/web';
import { Animated } from "@/externals";
import { useInView } from 'react-intersection-observer';
import { IoCheckbox } from "react-icons/io5";

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
    title: "Who is this course for?",
    content: <Text>This course is for <Text as="span" fontWeight="700">aspiring DevOps engineers, software developers, IT professionals, and system administrators</Text> who want to master DevOps principles, automation, cloud computing, and CI/CD pipelines. Whether you're a <Text as="span" fontWeight="700">beginner looking to break into DevOps</Text> or an experienced professional wanting to <Text as="span" fontWeight="700">level up your skills</Text>, this training is designed for you!</Text>,
  },
  {
    value: "learning",
    icon: <GoPlus />,
    title: "What tools will I learn?",
    content: <>
      <Text pb="1rem">You’ll get hands-on experience with industry-standard tools, including:
      </Text>
      <List.Root gap="2" variant="plain" align="center">
        <List.Item>
          <List.Indicator asChild color="green.500">
            <IoCheckbox />
          </List.Indicator>
          <Text><Text as="span" fontWeight="700">Version Control:</Text> Git, GitHub</Text>
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <IoCheckbox />
          </List.Indicator>
          <Text><Text as="span" fontWeight="700">Scripting & Automation:</Text> Python</Text>
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <IoCheckbox />
          </List.Indicator>
          <Text><Text as="span" fontWeight="700">Cloud Services:</Text>AWS (EC2, S3, IAM, VPC, EKS)</Text>
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <IoCheckbox />
          </List.Indicator>
          <Text><Text as="span" fontWeight="700">Infrastructure as Code (IaC):</Text>Terraform</Text>
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <IoCheckbox />
          </List.Indicator>
          <Text><Text as="span" fontWeight="700">Containerization:</Text>Docker, Docker Compose</Text>
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <IoCheckbox />
          </List.Indicator>
          <Text><Text as="span" fontWeight="700">Orchestration:</Text>Kubernetes</Text>
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="green.500">
            <IoCheckbox />
          </List.Indicator>
          <Text><Text as="span" fontWeight="700">CI/CD Pipelines:</Text>Jenkins, GitHub Actions
          </Text>
        </List.Item>
      </List.Root>
    </>,
  },
  {
    value: "cost",
    icon: <GoPlus />,
    title: "How much does the training cost?",
    content: <Text>We offer flexible pricing plans to make this training accessible. Visit our <Text as="span" fontWeight="700">pricing section</Text> or contact us for details on available <Text as="span" fontWeight="700">discounts, payment plans, and scholarships.</Text></Text>,
  },
  {
    value: "certificate",
    icon: <GoPlus />,
    title: "Will I get a certificate?",
    content: <Text>Yes! Upon successful completion of the training and capstone project, you’ll receive a <Text as="span" fontWeight="700">verified certificate</Text> that showcases your expertise and can be added to your <Text as="span" fontWeight="700">resume and LinkedIn profile</Text>.</Text>,
  },
]

