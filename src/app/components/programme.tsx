import { Text, Flex, Button } from "@chakra-ui/react"
import { CiAlarmOn, CiCalendar } from "react-icons/ci";
import { FaRegIdBadge } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Programme() {
  return (
    <Flex bg={{base: "#F8F9FF", _dark: "#000000"}} minH="268px" gap="72px" py="5rem" maxW="100%">
      <Flex minH="108px" maxW="1282px" gap="4rem" flexDirection={{base: "column", md: "row"}} alignItems={{base: "center", md: "initial"}} mx={{base: "auto", md: "auto"}}>
        <Flex maxW="301px" minH="80px" gap=".5rem" flexDirection="column" alignItems={{base: "center", md: "center", lg:"start"}}>
          <Flex maxW="301px" justifyContent={{base: "initial", md: "flex-end"}}>
            <Text maxW="301px" minH="28px" fontWeight="400" fontSize="1.25rem" lineHeight="1.75rem" color={{base: "#061C3D", _dark: "#FEFEFE"}} textAlign={{base: "center", md: "center" }} textTransform="uppercase">Start date</Text>
          </Flex>
          <Text maxW="301px" minH="44px" fontWeight="700" fontSize="2rem" lineHeight="44px" color={{base: "#061C3D", _dark: "#FEFEFE"}} textAlign={{base: "center", md: "center" }}>March 3, 2025</Text>
        </Flex>
        <Flex maxW="917px" minH="108px" gap="4rem" flexDirection={{base: "column", md: "row"}} flexWrap="wrap" alignItems={{base: "center", md: "initial"}}>
          <Flex maxW="677px" minH="108px" gap="40px" flexDirection={{base: "column", md: "row"}} alignItems={{base: "center", md: "initial"}}>
            <Flex maxW="199px" minH="108px" gap="12px" flexDirection="column" alignItems="center">
              <Flex bg={{base: "#CAECCD80", _dark: "#0A0A0A"}} maxW="72px" maxH="72px" borderRadius="10px" p="1.25rem" gap="10px">
                <CiAlarmOn size="2rem"/>
              </Flex>
              <Text minW="199px" minH="24px" fontWeight="600" fontSize="1.25rem" lineHeight="24px" color={{base: "#061C3D", _dark: "#FEFEFE"}} textAlign="center">12 Weeks Training</Text>
            </Flex>
            <Flex minW="199px" minH="108px" gap="12px" flexDirection="column" alignItems="center">
              <Flex bg={{base: "#F8D57E33", _dark: "#0A0A0A"}} maxW="72px" maxH="72px" borderRadius="10px" p="1.25rem" gap="10px">
                <CiCalendar size="2rem"/>
              </Flex>
              <Text maxW="199px" minH="24px" fontWeight="600" fontSize="1.25rem" lineHeight="24px" color={{base: "#061C3D", _dark: "#FEFEFE"}} textAlign="center">Virtual Life Classes</Text>
            </Flex>
            <Flex minW="199px" minH="108px" gap="12px" flexDirection="column" alignItems="center">
              <Flex bg={{base: "#EBEFF2", _dark: "#0A0A0A"}} maxW="72px" maxH="72px" borderRadius="10px" p="1.25rem" gap="10px">
                <FaRegIdBadge size="2rem"/>
              </Flex>
              <Text maxW="199px" minH="24px" fontWeight="600" fontSize="1.25rem" lineHeight="24px" color={{base: "#061C3D", _dark: "#FEFEFE"}} textAlign="center">Expert Instructors</Text>
            </Flex>
          </Flex>
          <Flex flexWrap="wrap">
            <Button
              bg="#005EDF"
              p="2rem"
              // gap="12px"
              display="flex"
              borderRadius="7px"
              maxH="56px"
              maxW="176px"
            >
              <Text as="span" color="#FFFFFF" fontWeight="700" fontSize="16px" lineHeight="48px" textAlign="center">Enroll now </Text>
              <IoIosArrowRoundForward color="#FFFFFF" size="24px" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

