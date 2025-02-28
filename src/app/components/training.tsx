import { Box, Flex, Text, Button, Card } from "@chakra-ui/react"
import { IoIosArrowRoundForward } from "react-icons/io"
import { RiFolder2Line } from "react-icons/ri";
import { PiMagicWand } from "react-icons/pi";
import { LuNotepadText } from "react-icons/lu";

export default function Training() {
  return (
    <Flex maxW="100%" minH="762px" gap="72px" flexWrap="wrap" pt={{base: "0", sm: "10rem", md: "10rem", lg: "0"}} >
      {/* px="5rem" mt={{base: "10rem", md: "5rem"}} pt="5rem" pb="7.75rem"*/}
      <Flex maxW="1274px" minH="136px" flexWrap="wrap" mx="auto" pt={{base: "5rem", md: "auto"}} gap={{base: "1.5rem", md: "0"}}>
        <Text maxW="608px" minH="120px" fontWeight="600" fontSize="3rem" lineHeight="60px" color={{base: "#061C3D", _dark: "#3E90F0"}} textAlign={{base: "center", md: "center", lg: "start"}} mx={{base: "auto", md: "initial"}}>Why Choose This Training?</Text>
        <Flex flexDirection="column" maxW="569px" minH="136px" gap="24px" alignItems={{base: "center", md: "normal"}} mx="auto" pt={{base: "2rem", lg: "initial"}}>
          <Text maxW="568px" minH="56px" fontWeight="400" fontSize="20px" lineHeight="28px" color={{base: "#061C3D", _dark:"#FEFEFE"}} textAlign={{base: "center", md: "start"}}>Go from Beginner to Pro with expert mentorship and practical projects in 8 weeks.</Text>
          <Flex justifyContent="start">
            <Button
              bg="#005EDF"
              p="32px"
              gap="12px"
              display="flex"
              borderRadius="7px"
              h="56px"
              w="176px"
              variant="solid"
            >
              <Text color="#FFFFFF" fontWeight="700" fontSize="16px" lineHeight="48px" textAlign="center">Enroll now </Text>
              <IoIosArrowRoundForward color="#FFFFFF" size="24px" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* Next category */}
      <Flex flexDirection={{base: "column", md: "row"}} maxW="1282px" minH="21.875rem" justifyContent={{base: "normal", md: "space-between"}} alignItems={{base: "center", md: "normal"}} flexWrap="wrap" mx="auto" gap="3.5rem">
        {trainingCard.map((item) => {
          return (
            <CustomCard key={item.id} {...item} />
          )
        })}
      </Flex>
    </Flex>
  )
}

const CustomCard = ({id, icon, title, desc}: {id: number; icon: any; title: string; desc: string}) => {
  return (
    <Card.Root 
      display="flex" 
      bg={{base: "#FBFDFF", _dark: "#0A0A0A"}} maxW="23.125rem" minH="21.875rem" borderRadius="20px" 
      px="1.25rem" 
      py="2.5rem" 
      border={{base: "none", _dark: "1px solid" }}
      borderImage={{base: "initial", _dark: "linear-gradient(180deg, #E1F5F2 0%, rgba(0, 96, 231, 0.44) 100%) 1"}} 
      // "#e5f4f2"
      boxShadow={{base: "34.85px 29.63px 48.34px 0px #3366FF0D", _dark: "-15px -22px 48.34px 0px #3366FF0D"}} 
    >
      {/* width="320px" border={{base: "1px solid #e5f4f2", _dark: "1px solid linear-gradient(180deg, #E1F5F2 0%, rgba(0, 96, 231, 0.44) 100%)"}} */}
      <Card.Body display="flex" maxW="19.375rem" minH="15.75rem" gap="1.875rem" flexDirection="column">
        <Box w="4rem" h="4rem" borderRadius="10px" p="1.25rem" gap="0.625rem" bg={{base: `${id === 1 ? "#F8D57E33" : id === 2 ? "#CAECCD" : "#D7EAF8"}`, _dark: "#D7EAF8"}} mx="auto" >{icon}</Box>
        <Flex maxW="19.375rem" minH="9.875rem" gap="1.5rem" flexDirection="column">
          <Card.Title mt="2" w="100%" minH="3.875rem" fontWeight="600" fontSize="1.5rem" lineHeight="1.95rem" textAlign="center">{title}</Card.Title>
          <Card.Description color={{base: "#2D2D2D", _dark: "#E8ECEF"}} maxW="19.375rem" minH="4.5rem" fontWeight="400" fontSize="1rem" textAlign="center" lineHeight="1.5rem">{desc}</Card.Description>
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}

const trainingCard = [
  {
    id: 1,
    icon: <RiFolder2Line size="1.5rem" color="#2D2D2D" />,
    title: "100% Practical & Interactive Sessions",
    desc: "No boring lectures - engage in live, hands-on training with real-time feedback.",
  },
  {
    id: 2,
    icon: <PiMagicWand size="1.5rem" color="#2D2D2D" />,
    title: "Build Real-World Projects",
    desc: "Work on industry-relevant projects that showcase your skills and problem-solving abilities.",
  },
  {
    id: 3,
    icon: <LuNotepadText size="1.5rem" color="#2D2D2D" />,
    title: "Job-Ready Portfolio",
    desc: "Create a job-ready portfolio that highlights your expertise and stands out in the hiring process.",
  },
]
