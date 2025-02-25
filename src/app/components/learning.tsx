import { Box, Flex, Text, Image, Card } from "@chakra-ui/react"
import { GoPackage } from "react-icons/go";
import { useColorMode } from "@/components/ui/color-mode";

export default function Learning() {
  const { colorMode } = useColorMode()
  return (
    <Box maxW="1440px" minH="2035px" pt="5rem">
      {/* bg={{base: "#F8F9FF", _dark: "#000000"}} */}
      <Flex position="relative" maxW="1440px" px="-2rem">
        <Box zIndex="5" position="absolute" maxW="22.115rem" display={{base: "none", lg: "block"}}>
          <Image src="/images/training-shape.png" alt="" />
          {/* maxW="42.115rem" maxW="22.115rem" */}
        </Box>
        <Box zIndex="5" position="absolute">
          {colorMode === "dark" ? <Image src="/images/training-ellipse-dark.png" alt="" opacity="0.5" /> : <Image src="/images/training-ellipse.png" alt="" />}
        </Box>
      </Flex>
      <Flex flexDirection="column" maxW="100%" minH="132px" gap="1rem" alignItems="center" py="7.5rem">
        <Text maxW="1260px" minH="60px" fontWeight="600" fontSize="3rem" lineHeight="3.75rem" textAlign="center" color={{base: "#000000", _dark: "#3E90F0"}} mx="auto">What You Will Learn</Text>
        <Text maxW="646px" minH="66px" fontWeight="400" fontSize="1.5rem" lineHeight="1.75rem" textAlign="center" color={{base: "#000000", _dark: "#FEFEFE"}} mx="auto">Master essential technical and soft skills to prepare you for a career in Devops Engineering in 12 weeks.</Text>
      </Flex>
      {/* Text and image 1 */}
      <Flex flexDirection={{base: "column", md: "row"}} gap="2rem" position="relative" pr="-2rem" justifyContent={{base: "initial", md: "space-between"}}>
        <Flex maxW="628px" minH="708px" gap="1.5rem" flexDirection="column">
          {learningList.map((item: any) => {
            return (
              <CustomLearningCard key={item.id} {...item} />
            )
          })}
        </Flex>
        <Flex justifyContent="flex-end" position="relative" bottom="100px">
          <Image src="/images/training-image-1.png" w="inherit" alt="" />
        </Flex>
      </Flex>
      {/* Text and image 2 */}
      <Flex flexDirection={{base: "column", md: "row"}} gap="2rem" justifyContent="space-between">
        <Flex position="relative" maxW="628px" minW="150px" display={{base: "none", md: "flex"}}>
          <Box position="absolute">
            <Image src="/images/training-star.png" w="auto" alt="" />
          </Box>
          <Box position="absolute" top="320px" zIndex="11">
            {/* top={{base: "1600px", md: "320px"}} */}
            <Image src="/images/training-image-2.png" w="auto" alt="" />
          </Box>
          <Box position="absolute" top="300px" zIndex="10">
            <Image src="/images/training-image-2-rect.png"  w="auto" alt="" />
          </Box>
        </Flex>
        <Flex maxW="628px" minH="708px" gap="1.5rem" flexDirection="column">
          {learningList.map((item: any) => {
            return (
              <CustomLearningCard key={item.id} {...item} />
            )
          })}
        </Flex>
        <Flex position="relative" maxW="628px" minW="150px" display={{base: "flex", md: "none"}}>
          <Box position="absolute">
            <Image src="/images/training-star.png" w="auto" alt="" />
          </Box>
          <Box position="absolute" top="120px" zIndex="11">
            {/* top={{base: "1600px", md: "320px"}} */}
            <Image src="/images/training-image-2.png" w="auto" alt="" />
          </Box>
          <Box position="absolute" top="100px" zIndex="10">
            <Image src="/images/training-image-2-rect.png"  w="auto" alt="" />
          </Box>
        </Flex>
      </Flex>
      {/*  */}
      <Flex maxW="1344px" minH="488px" gap="5rem" m={{base: "auto", md: "3.063rem"}} mt={{base: "32.063rem", md: "3.063rem"}} flexDirection="column">
        {/* 3.063rem */}
        <Flex maxW="1260px" minH="132px" gap="1rem" flexDirection="column">
          <Text maxW="1260px" minH="60px" fontWeight="500" fontSize="3rem" lineHeight="3.75rem" textAlign="center" color={{base: "#000000", _dark: "#3E90F0"}}>Our Payment Options</Text>
          <Text maxW="648px" minH="56px" fontWeight="400" fontSize="1.25rem" lineHeight="1.75rem" textAlign="center" color={{base: "#000000", _dark: "#FEFEFE"}} mx="auto">Master essential technical and soft skills to prepare you for a career in DevOps Engineering in 12 weeks.</Text>
        </Flex>
        <Flex flexDirection={{base: "column", md: "row"}} maxW="1344px" minH="276px" justifyContent={{base: "initial", md: "space-between"}} flexWrap="wrap" gap="2rem">
          {/* Payment methods */}
          {paymentMethods.map((item: any) => {
            return (
              <CustomCard key={item.id} {...item} />
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}

const CustomCard = ({id, title, amount, desc}: {id: number; title: string; amount: string; desc: string;}) => {
  return (
    <Card.Root maxW="660px" overflow="hidden" minH="276px" borderRadius="20px" bg={{base: `${id === 1 ? "#005EDF" : "#FEFEFE"}`, _dark: `${id === 1 ? "#005EDF" : "#0A0A0A"}`}} border={{base: "none", _dark: `${id !== 1 ? "1px solid #3E90F0" : "none"}`}}>
      <Card.Body gap="4px" minW="252px" minH="124px" py="1.5rem" px="1.75rem">
        <Card.Title minW="209px" minH="60px" fontWeight="400" fontSize="2.25rem" lineHeight="3.75rem" textAlign="start" color={{base: `${id === 1 ? "#ffffff" : "#000000"}`, _dark: "#ffffff"}}>{title}</Card.Title>
        <Text minW="139px" maxW={{base: "232px", sm: "352px"}} minH="60px" fontWeight="600" fontSize="2.5rem" lineHeight="3.75rem" textAlign="start" color={{base: `${id === 1 ? "#ffffff" : "#000000"}`, _dark: "#ffffff"}}>
          {amount}
        </Text>
        <Card.Description pt="2rem" maxW="542px" minH="72px" fontWeight="400" fontSize="1.5rem" lineHeight="2.25rem" textAlign="start" color={{base: `${id === 1 ? "#ffffff" : "#000000"}`, _dark: "#ffffff"}} pr="1.75rem">{desc}</Card.Description>
      </Card.Body>
      {/* <Card.Footer gap="2">
        <Text></Text>
      </Card.Footer> */}
    </Card.Root>
  )
}

const CustomLearningCard = ({icon, title, desc}: {icon: any; title: string; desc: string;}) => {
  return (
    <Card.Root maxW="628px" minH="220px" borderRadius="1.25rem" py="2.5rem" px="1.875rem" gap="2rem" border={{base: "1px solid linear-gradient(180deg, #E6E8EC 0%, rgba(0, 96, 231, 0.19) 100%)", _dark: "1px solid linear-gradient(180deg, #E1F5F2 0%, rgba(0, 96, 231, 0.44) 100%)"}} bg={{base: "transparent", _dark: "#0A0A0A"}} boxShadow={{base: "none", _dark: "34.85px 29.63px 48.34px 0px #3366FF0D"}} zIndex="10">
      <Card.Body gap="1.5rem" maxW="549px" minH="140px" display="flex" flexDirection={{base: "column", md: "row"}}>
        <Flex maxW="4.75rem" maxH="4.75rem" p="1.25rem" gap="10px" bg={{base: " #AEC6EA80", _dark: "#333333"}} justifyContent="center" alignItems="center">{icon}</Flex>
        <Flex maxW="449px" minH="140px" gap="1.25rem" flexDirection="column">
          {/* gap="0.75rem" */}
          <Card.Title maxW="449px" minH="32px" fontWeight="600" fontSize="1.5rem" lineHeight="2rem" color={{base: "#333333", _dark: "#F3F5F7"}}>{title}</Card.Title>
          <Card.Description maxW="449px" minH="96px" fontWeight="400" fontSize="1rem" lineHeight="1.5rem" color={{base: "#333333", _dark: "#F3F5F7"}}>{desc}</Card.Description>
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}



const paymentMethods = [
  {
    id: 1,
    title: "Full Payment",
    amount: "350,000",
    desc: "Pay your fees 100% upfront. No other charges come up during your learning.",
  },
  {
    id: 2,
    title: "2 Installment Option",
    amount: "175,000/payment",
    desc: "Complete your payment within 2 months of the program in 2 installments.",
  },
]

const learningList = [
  {
    id: 1,
    icon: <GoPackage color=" #3E90F0" size="2.25rem" />,
    title: "Linux & Shell Scripting for Automation",
    desc: "Learn how to gather and analyze user research data. define problem statements, understand and employ ideation techniques and translate insights into actionable design decisions.",
  },
  {
    id: 2,
    icon: <GoPackage color=" #3E90F0" size="2.25rem" />,
    title: "Linux & Shell Scripting for Automation",
    desc: "Learn how to gather and analyze user research data. define problem statements, understand and employ ideation techniques and translate insights into actionable design decisions.",
  },
  {
    id: 3,
    icon: <GoPackage color=" #3E90F0" size="2.25rem" />,
    title: "Linux & Shell Scripting for Automation",
    desc: "Learn how to gather and analyze user research data. define problem statements, understand and employ ideation techniques and translate insights into actionable design decisions.",
  },
]