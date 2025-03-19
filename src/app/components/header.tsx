// import {useState} from "react";
import {
  Flex, 
  Image, 
  Separator, 
  HStack 
} from "@chakra-ui/react";
import CustomDialogModal from "./customDialogModal";
import {LargeMenuLinks, LargeHeaderButtons} from "../common/customMenu";

const NavBar = (props: any) => {
  return (
    <>
      <NavBarContainer {...props}>
        <Flex w="100%" justifyContent="space-between" pr={{base: "initial", lg: ".2rem", xl: "2rem" }} pl={{base: "initial", lg: "0", xl: "4rem"}}>
          {/* w={{base: "100%", lg: "50%", xl: "initial"}}  */}
          <Flex gap="2rem">
            <Image display={{base: "none", lg: "block"}} src="/images/cloudi.png" />
            <HStack gap="4" display={{base: "none", lg: "flex"}} pl={{base: "2rem", lg: ".2rem", xl: "2rem"}}>
              <Separator variant="solid" color="#E6E8EC" size="lg" w="20px" orientation="vertical" height="40px" />
            </HStack>
            <Flex pl={{base: "2rem", lg: ".2rem", xl: "2rem"}} alignItems="center" w="100%">
              <LargeMenuLinks />
            </Flex>
          </Flex>
          <Flex alignItems="start">
            <LargeHeaderButtons />
          </Flex>
        </Flex>
      </NavBarContainer>
      <Flex w="100%" justifyContent="space-between" px="1rem" pt="1rem" pb="2rem">
        <CustomDialogModal />
        <Image display={{base: "block", lg: "none"}} src="/images/cloudi.png" h="36px" w="36px" />
      </Flex>
    </>
  );
};

const NavBarContainer = ({ children, ...props }: {children: any}) => {
  return (
    <Flex
      display={{base: "none", lg: "flex"}}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      // mb={8}
      p={8}
      pb="0"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
