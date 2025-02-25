import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { MenuToggle, MenuLinks } from './menu'
import Logo from './logo'
import { ColorModeButton } from '@/components/ui/color-mode'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer>
      <Flex gapX="3.5rem" maxW="40.375rem">
        <Flex>
          <Logo
            w="50px"
            color={["white", "white", "primary.500", "primary.500"]}
          />
          <ColorModeButton />
        </Flex>
        {!isOpen && (
          <Flex>
            <MenuLinks isOpen={isOpen} />
          </Flex>
        )}
      </Flex>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      {isOpen && <MenuLinks isOpen={isOpen} />}
    </NavBarContainer>
  )
}

//@ts-ignore
const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      // align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      // mb={8}
      // p={8}
      px={{ base: "8", md: "5.25rem"}}
      py={{ base: "8", md: "0.75rem"}}
      h={{base: "auto", md: "108px"}}
      // bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      bg={{ base: "#FFFFFF", _dark: "#000000" }}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default Header
