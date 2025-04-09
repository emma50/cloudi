import { Link, Text, Box, Flex, Button } from "@chakra-ui/react";
import { headerList, headerButtons } from "@/utils/data";
import { useColorMode } from "@/components/ui/color-mode";
import { IoIosArrowRoundForward } from "react-icons/io";
import { handleWhatsAppClick } from "@/utils/functions";

export const MenuItem = ({ children, to = "/", size, ...rest }: {children: any; to?: any; size?: any}) => {
  return (
    <Link href={to || ""} color="#838E9E" mr="1.25rem" minW="41px" gapX="8px" _active={{ color: { base: "#005EDF", _dark: "#E8ECEF" }}} _hover={{ color: { base: "#005EDF", _dark: "#E8ECEF" }}} my={size}>
      <Text display="block" {...rest} minW="35px" h={{base: "20px", lg: "20px"}} lineHeight="20px" fontSize={{base: "20px", lg: "14px" }} fontWeight="400" fontFamily="Lexend, sans-serif">
        {children}
      </Text>
    </Link>
  );
};

export const LargeMenuLinks = () => {
  return (
    <Box
      // display={{ base: isOpen ? "block" : "none", lg: "block" }}
      display={{base: "none", lg: "flex"}}
      flexBasis={{ base: "100%", lg: "auto" }}
    >
      <Flex display={{base: "none", lg: "flex"}} flexDirection={{base: "column", lg: "row"}} alignItems={{base: "initial", lg: "center"}} gap={{base: "0", lg: ".5rem", xl: "3.5rem"}}>
        {headerList.map((item) => {
          return (
            <MenuItem key={item.id} to={item.href} size={{base: "1rem", lg: "initial"}}>{item.title}</MenuItem>
          )
        })}
      </Flex>
    </Box>
  );
};

export const LargeHeaderButtons = () => {
  const {colorMode} = useColorMode();
  return (
    <Flex flexDirection={{base: "column", lg: "row"}} display={{base: "none", lg: "flex"}}>
    {/*  */}
      {headerButtons.map((item) => {
        return (
          <MenuItem key={item.id} size={{base: "1rem", lg: "initial"}}>
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
              onClick={handleWhatsAppClick}
            >
              <Text fontWeight="700" fontSize="16px" lineHeight="48px" textAlign="center" style={{color: `${colorMode !== "dark" && item.title === "Enroll now" ? "#ffffff" : colorMode !== "dark" && item.title !== "Enroll now" ? "#005EDF" : "#ffffff" }`}}>{item.title} </Text>
              {item.title === "Enroll now" && <IoIosArrowRoundForward color="#FFFFFF" size="24px" />}
            </Button>
          </MenuItem>
        )
      })}
    </Flex>
  )
}

export const MenuLinks = () => {
  return (
    <Box
      display="flex"
      h="calc(85vh / 1.4)"
    >
      <Flex flexDirection="column" alignItems="center" alignContent="center" justifyContent="space-between"> 
        {headerList.map((item) => {
          return (
            <MenuItem key={item.id} to={item.href} size={{base: "1rem", lg: "initial"}}>{item.title}</MenuItem>
          )
        })}
      </Flex>
    </Box>
  );
};

export const HeaderButtons = () => {
  const {colorMode} = useColorMode();
  return (
    <Flex flexDirection="column" alignItems="center" gap="1rem" h="calc(85vh - (85vh / 1.4))" justifyContent="flex-end">
    {/*  */}
      {headerButtons.map((item) => {
        // href={item.href}
        return (
          <Link key={item.id} href="">
            <Button
              // key={item.id}
              bg={{base: `${item.title === "Enroll now" ? "#005EDF" : "transparent"}}`, _dark: `${item.title === "Enroll now" ? "#005EDF" : "#000000"}}`}}
              style={{border: `${item.title === "Enroll now" ? "none" : colorMode !== "dark" ? "1px solid #005EDF" : "1px solid #ffffff" }`}}
              variant={item.title === "Enroll now" ? "solid" : "outline"}
              p="32px"
              gap="12px"
              display="flex"
              borderRadius="7px"
              size="xl"
              // h="76px"
              w="10px"
              onClick={handleWhatsAppClick}
            >
              <Text fontWeight="700" fontSize="18px" lineHeight="48px" textAlign="center" style={{color: `${colorMode !== "dark" && item.title === "Enroll now" ? "#ffffff" : colorMode !== "dark" && item.title !== "Enroll now" ? "#005EDF" : "#ffffff" }`}}>{item.title} </Text>
              {item.title === "Enroll now" && <IoIosArrowRoundForward color="#FFFFFF" size="24px" />}
            </Button>
          </Link>
        )
      })}
    </Flex>
  )
}