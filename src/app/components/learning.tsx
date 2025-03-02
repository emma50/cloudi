import { Box, Flex, Text, Image, Card } from "@chakra-ui/react"
import { GoPackage } from "react-icons/go";
import { useColorMode } from "@/components/ui/color-mode";
import { useMediaQuery } from 'react-responsive'


export default function Learning() {
  const { colorMode } = useColorMode()
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1060, maxWidth: 1144 })
  const isDesktopOrLaptopTwo = useMediaQuery({ minWidth: 1144, maxWidth: 1296 })
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
      <Flex flexDirection="column" maxW="100%" minH="132px" gap="1rem" alignItems="center" py={{base: "7.5rem", md: "5.5rem"}}>
        <Text maxW="1260px" minH="60px" fontWeight="600" fontSize="3rem" lineHeight="3.75rem" textAlign="center" color={{base: "#000000", _dark: "#3E90F0"}} mx="auto" zIndex="99">What You Will Learn</Text>
        <Text maxW="646px" minH="66px" fontWeight="400" fontSize="1.5rem" lineHeight="1.75rem" textAlign="center" color={{base: "#000000", _dark: "#FEFEFE"}} mx="auto" zIndex="99">Master essential technical and soft skills to prepare you for a career in Devops Engineering in 12 weeks.</Text>
      </Flex>
      {/* Text and image 1 */}
      <Flex flexDirection={{base: "column", lg: "row"}} gap="2rem" position="relative" pr="-2rem"  pb={`${isDesktopOrLaptop || isDesktopOrLaptopTwo ? "2rem" : ".5rem"}`} justifyContent={{base: "initial", lg: "space-between"}} alignItems={{base: "center", lg: "initial"}} minH="708px">
        <Flex maxW="628px" minH="708px" gap="1.5rem" flexDirection="column" alignItems={{base: "center", lg: "initial"}}  pl="2rem" px={{base: "2rem", md: "initial"}}>
          {learningList.map((item: any) => {
            return (
              <CustomLearningCard key={item.id} {...item} />
            )
          })}
        </Flex>
        <Flex justifyContent="flex-end" position="relative" bottom={{base: "160px", sm: "250px", lg: "100px"}} >
          <Image src="/images/training-image-1.png" w="inherit" alt="" />
        </Flex>
      </Flex>
      {/* Text and image 2 */}
      <Flex flexDirection={{base: "column", lg: "row"}} gap="2rem" position="relative" pr="-2rem" justifyContent={{base: "initial", lg: "space-between"}} alignItems={{base: "center", lg: "initial"}} minH="708px">
        <Flex flexDirection="column" justifyContent="flex-end" position="relative" bottom={{base: "160px", sm: "360px", lg: "100px"}}>
          {isDesktopOrLaptop ? (
            <>
              <Image src="/images/training-star.png" w="inherit" alt="" position="relative" bottom="" top="-400px" />
              {/* bottom="520px" */}
              <Image src="/images/training-image-2-rect.png" w="inherit" alt="" position="absolute" bottom="" top="365px" />
              {/* bottom="340px" */}
              <Image src="/images/training-image-2.png" w="inherit" alt="" position="absolute" bottom="" top="380px" />
              {/* bottom="400px" */}
            </>
          ) : isDesktopOrLaptopTwo ? (
            <>
              <Image src="/images/training-star.png" w="inherit" alt="" position="relative" bottom={{base: "0", sm: "0", md: "0", lg: "520px", xl: "520px"}} top={{base: "0", sm: "120px", md: "0", lg: "-380px", xl: "-500px"}} />
              {/* bottom="520px" */}
              <Image src="/images/training-image-2-rect.png" w="inherit" alt="" position="absolute" bottom={{base: "0", sm: "0", md: "0", lg: "340px", }} top={{base: "90px", sm: "240px", md: "170px", lg: "290px", xl: "120px"}} />
              {/* bottom="340px" */}
              <Image src="/images/training-image-2.png" w="inherit" alt="" position="absolute" bottom={{base: "0", sm: "0", md: "0", lg: "400px"}} top={{base: "100px", sm: "260px", md: "195px", lg: "305px", xl: "140px"}} />
              {/* bottom="400px" */}
            </>
          ) : (
            <>
              <Image src="/images/training-star.png" w="inherit" alt="" position="relative" bottom={{base: "0", sm: "0", md: "0", lg: "520px", xl: "520px"}} top={{base: "0", sm: "120px", md: "0", lg: "-500px", xl: "-500px"}} />
              {/* bottom="520px" */}
              <Image src="/images/training-image-2-rect.png" w="inherit" alt="" position="absolute" bottom={{base: "0", sm: "0", md: "0", lg: "340px", }} top={{base: "90px", sm: "240px", md: "170px", lg: "350px", xl: "120px"}} />
              {/* bottom="340px" */}
              <Image src="/images/training-image-2.png" w="inherit" alt="" position="absolute" bottom={{base: "0", sm: "0", md: "0", lg: "400px"}} top={{base: "100px", sm: "260px", md: "195px", lg: "365px", xl: "140px"}} />
              {/* bottom="400px" */}
            </>
          )}
        </Flex>
        <Flex maxW="628px" minH="708px" gap="1.5rem" flexDirection="column" alignItems={{base: "center", lg: "initial"}} pr="2rem" px={{base: "2rem", md: "initial"}}>
          {learningList.map((item: any) => {
            return (
              <CustomLearningCard key={item.id} {...item} />
            )
          })}
        </Flex>
      </Flex>
      {/* --------------------------------------------------------------- */}
      <Flex maxW="1344px" minH="488px" gap="5rem" m={{base: "auto", md: "3.063rem"}} flexDirection="column" mt={{base: "6rem", lg: "8rem", xl: "6rem"}}>
        {/* mt={{base: "-6.543rem", sm: "-17.543rem", md: "-16.543rem", lg: "8rem", xl: "2rem"}} */}
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
    <Card.Root maxW="550px" overflow="hidden" minH="276px" borderRadius="20px" bg={{base: `${id === 1 ? "#005EDF" : "#FEFEFE"}`, _dark: `${id === 1 ? "#005EDF" : "#0A0A0A"}`}} border={{base: "none", _dark: `${id !== 1 ? "1px solid #3E90F0" : "none"}`}}>
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
    <Card.Root maxW="628px" minH="220px" borderRadius="1.25rem" py="2.5rem" px="1.875rem" gap="2rem" borderWidth="1px" borderStyle="solid" borderImage={{base: "linear-gradient(180deg, #E6E8EC 0%, rgba(0, 96, 231, 0.19) 100%) 1", _dark: "linear-gradient(180deg, #E1F5F2 0%, rgba(0, 96, 231, 0.44) 100%) 1"}}  bg={{base: "transparent", _dark: "#0A0A0A"}} boxShadow={{base: "none", _dark: "34.85px 29.63px 48.34px 0px #3366FF0D"}} zIndex="10">
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