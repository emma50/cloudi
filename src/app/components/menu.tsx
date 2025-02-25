import { Box, Text, Link, Stack, Flex, Button } from "@chakra-ui/react"
import { IoIosMenu,  } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { headerList, headerButtons } from "@/utils/data";
import { IoIosArrowRoundForward } from "react-icons/io";

//@ts-ignore
export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <IoClose color="#69C6FC" size="32px" /> : <IoIosMenu color="#69C6FC" size="32px" />}
    </Box>
  )
}

//@ts-ignore
export const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to} color="#838E9E"mr="1.25rem" minW="41px" gapX="8px" _active={{ color: { base: "#005EDF", _dark: "#E8ECEF" }}} _hover={{ color: { base: "#005EDF", _dark: "#E8ECEF" }}}>
      {/* h="84px" */}
      <Text display="block" {...rest} minW="35px" h="20px" lineHeight="20px" fontSize="14px" fontWeight="400" fontFamily="Lexend, sans-serif">
        {children}
      </Text>
    </Link>
  )
}

//@ts-ignore
export const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        // spacing={8}
        // align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        // pt={[4, 4, 0, 0]}
        gap={["auto", "auto", "301px", "301px"]}
      >
        <Flex>
          {headerList.map((item) => {
            return (
              <MenuItem to="/">{item.title}</MenuItem>
            )
          })}
        </Flex>
        <Flex minH="56px" maxW="18.813rem" gapX="29px" alignItems={{base: "normal", md: "center"}}>
          {/* w="381px" */}
          {headerButtons.map((item) => {
            return (
              <Button
              key={item.id}
              bg={{base: `${item.title === "Enroll now" ? "#005EDF" : "transparent"}}`, _dark: `${item.title === "Enroll now" ? "#005EDF" : "#000000"}}`}}
              border={item.title !== "Enroll now" ? "1px" : "none"}
              colorPalette={{ base: `${item.title !== "Enroll now" ? " #005EDF" : "none"}}`, _dark: `${item.title !== "Enroll now" ? " #FFFFFF" : "none"}}`}} 
              variant={item.title === "Enroll now" ? "solid" : "outline"}
              p="32px"
              gap="12px"
              display="flex"
              borderRadius="7px"
              h="56px"
              w="176px"
            >
              <Text as="span" color={{base: `${item.title === "Enroll now" ? "#FFFFFF" : "#005EDF"}}`, _dark: "#FFFFFF"}} fontWeight="700" fontSize="16px" lineHeight="48px" textAlign="center">{item.title} </Text>
              {item.title === "Enroll now" && <IoIosArrowRoundForward color="#FFFFFF" size="24px" />}
            </Button>
            )
          })}
        </Flex>
      </Stack>
    </Box>
  )
}
