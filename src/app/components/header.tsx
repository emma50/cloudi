import React from "react";
import { Link, Box, Flex, Text, Button, Stack, Image, Separator, HStack } from "@chakra-ui/react";
import { headerList, headerButtons } from "@/utils/data";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useColorMode } from "@/components/ui/color-mode";

const NavBar = (props: any) => {
  const {colorMode} = useColorMode();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Flex w={{base: "100%", lg: "50%", xl: "initial"}} justifyContent="space-between" pr={{base: "initial", lg: ".2rem", xl: "2rem" }} pl={{base: "initial", lg: "0", xl: "4rem"}}>
        <Flex gap="2rem">
          {colorMode !== "dark" ? <Image src="/images/cloudi.png" /> : <Image src="/images/cloudi-white.png" />}
          <HStack gap="4" display={{base: "none", lg: "flex"}} pl={{base: "2rem", lg: ".2rem", xl: "2rem"}}>
            <Separator variant="solid" color="#E6E8EC" size="lg" w="20px" orientation="vertical" height="40px" />
          </HStack>
          <Flex pl={{base: "2rem", lg: ".2rem", xl: "2rem"}} alignItems="center">
            <LargeMenuLinks isOpen={isOpen} />
          </Flex>
        </Flex>
        <Flex>
          <MenuToggle toggle={toggle} isOpen={isOpen} />
        </Flex>
      </Flex>
      <Flex w={{base: "initial", lg: "50%", xl: "initial"}} alignItems={{base: "initial", lg: "flex-start"}} justifyContent={{base: "initial", lg: "flex-end"}} mt={{base: "initial", lg: "-2rem"}}>
        <MenuLinks isOpen={isOpen} />
      </Flex>
    </NavBarContainer>
  );
};

const CloseIcon = () => {
  const {colorMode} = useColorMode()
  return (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>Close</title>
      <path
        fill={`${colorMode !== "dark" ? "#005EDF" : "#ffffff" }`}
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
      />
    </svg>
  )
};

const MenuIcon = () => {
  const {colorMode} = useColorMode()
  return (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill={`${colorMode !== "dark" ? "#005EDF" : "#ffffff" }`}
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  )
};

const MenuToggle = ({ toggle, isOpen }: {toggle: any; isOpen: any;}) => {
  return (
    <Box display={{ base: "block", lg: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, to = "/", size, ...rest }: {children: any; to: any; size?: any}) => {
  return (
    <Link href={to} color="#838E9E" mr="1.25rem" minW="41px" gapX="8px" _active={{ color: { base: "#005EDF", _dark: "#E8ECEF" }}} _hover={{ color: { base: "#005EDF", _dark: "#E8ECEF" }}} my={size}>
      <Text display="block" {...rest} minW="35px" h="20px" lineHeight="20px" fontSize="14px" fontWeight="400" fontFamily="Lexend, sans-serif">
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }: {isOpen: any}) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", lg: "block" }}
      flexBasis={{ base: "100%", lg: "auto" }}
    >
      <Stack
        align="center"
        // justify={["center", "space-between", "flex-end", "flex-end"]}
        justify={["center", "center", "center", "flex-end"]}     
        // direction={["column", "row", "row", "row"]}
        direction={["column", "column", "column", "row"]}
        pt={[4, 4, 0, 0]}
        mx="auto"
      >
        <Flex display={{base: "flex", lg: "none"}} flexDirection={{base: "column", lg: "row"}} alignItems={{base: "initial", lg: "center"}}>
          {headerList.map((item) => {
            return (
              <MenuItem to="/" size={{base: "1rem", lg: "initial"}}>{item.title}</MenuItem>
            )
          })}
        </Flex>
        <Flex flexDirection={{base: "column", lg: "row"}}>
          {headerButtons.map((item) => {
            return (
              <MenuItem key={item.id} to="/" size={{base: "1rem", lg: "initial"}}>
                <Button
                  key={item.id}
                  bg={{base: `${item.title === "Enroll now" ? "#005EDF" : "transparent"}}`, _dark: `${item.title === "Enroll now" ? "#005EDF" : "#000000"}}`}}
                  style={{border: `${item.title === "Enroll now" ? "none" : colorMode !== "dark" ? "1px solid #005EDF" : "1px solid #ffffff" }`}}
                  variant={item.title === "Enroll now" ? "solid" : "outline"}
                  p="32px"
                  gap="12px"
                  display="flex"
                  borderRadius="7px"
                  h="56px"
                  w="176px"
                >
                  <Text fontWeight="700" fontSize="16px" lineHeight="48px" textAlign="center" style={{color: `${colorMode !== "dark" && item.title === "Enroll now" ? "#ffffff" : colorMode !== "dark" && item.title !== "Enroll now" ? "#005EDF" : "#ffffff" }`}}>{item.title} </Text>
                  {item.title === "Enroll now" && <IoIosArrowRoundForward color="#FFFFFF" size="24px" />}
                </Button>
              </MenuItem>
            )
          })}
        </Flex>
      </Stack>
    </Box>
  );
};

const LargeMenuLinks = ({ isOpen }: {isOpen: any}) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", lg: "block" }}
      flexBasis={{ base: "100%", lg: "auto" }}
    >
      <Stack
        align="center"
        // justify={["center", "space-between", "flex-end", "flex-end"]}
        justify={["center", "center", "center", "flex-end"]}
        // direction={["column", "row", "row", "row"]}
        direction={["column", "column", "column", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Flex display={{base: "none", lg: "flex"}} flexDirection={{base: "column", lg: "row"}} alignItems={{base: "initial", lg: "center"}} gap={{base: "0", lg: ".5rem", xl: "3.5rem"}}>
          {headerList.map((item) => {
            return (
              <MenuItem to="/" size={{base: "1rem", lg: "initial"}}>{item.title}</MenuItem>
            )
          })}
        </Flex>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }: {children: any}) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
