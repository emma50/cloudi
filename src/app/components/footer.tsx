import { Text, Flex, Input, Button, Separator, Image, Link } from "@chakra-ui/react"
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useColorMode } from "@/components/ui/color-mode";
import { useSpring } from '@react-spring/web';
import { Animated } from "@/externals";
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const { colorMode } = useColorMode()

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
    <Flex ref={ref} flexDirection="column" maxW="100%" maxH="637px" px={{base: "2rem", md: "7rem"}} gap="10px" bg={{base: "#F3F5F7", _dark: "#0A0C0C"}}>
      <Animated.Flex style={textStyles} flexDirection="column" maxW="1216px" maxH="637px" py="4rem" gap="2.5rem" alignItems="center">
        {inView ? (
          <>
            <Flex flexDirection="column" maxW="674px" minH="170px" gap="1rem">
              <Flex flexDirection="column" mx="auto" maxW="312px" minH="83px" gap=".5rem">
                <Text minW="312px" minH="29px" fontWeight="700" fontSize="1.5rem" lineHeight="28.8px" textAlign="center" color={{base: "#232627", _dark: "#FEFEFE"}}>Join our newsletter</Text>
                <Text minW="312px" minH="46px" fontWeight="400" fontSize="1rem" lineHeight="23.2px" textAlign="center" color={{base: "#232627", _dark: "#FEFEFE"}}>Get all the latest Cloudi news delivered to your inbox.</Text>
              </Flex>
              <Flex maxW="674px" minH="71px" gap=".5rem">
                <Input placeholder="Email address" minW ={{base:"200px", md: "532px"}} minH="56px" borderRadius="6px" p="1rem" bg={{base: "#E8ECEF", _dark: "#232627"}} border={{base: "1px solid #E8ECEF", _dark: "1px solid #343839"}} color="#98A2B3" fontWeight="400" fontSize="0.875rem" lineHeight="20.3px"/>
                <Button
                  bg={{base: "#232627", _dark: "#FEFEFE"}}
                  px="1.5rem"
                  py="1rem"
                  gap="10px"
                  // display="flex"
                  borderRadius="8px"
                  h="55px"
                  maxW="135px"
                >
                  <Text as="span" color={{base: "#ffffff", _dark: "#000000"}} fontWeight="600" fontSize="1rem" lineHeight="23.2px" textAlign="center" maxW="79px" minH="23px">Subscribe</Text>
                </Button>
              </Flex>
            </Flex>
            <Separator variant="solid" colorPalette="gray" size="lg" maxW="100%" w="1216px" orientation="horizontal" height="1px" />
          </>
        ) : <></>}
        {/*  */}
        {inView ? (
          <>
            <Flex flexDirection="column" maxW="1216px" minH="162px" gap="12px">
              {/*  */}
              <Flex justifyContent="center">
                <Image src="/images/cloudi.png" alt="" maxW="60px" maxH="64.62px" />
              </Flex>
              <Flex maxW="1216px" minH="23px" gap="1rem">
                {links.map((item: any) => {
                  return (
                    <Link key={item.id} href={item.link} minW="46px" minH="23px" fontWeight="500" fontSize="1rem" lineHeight="23.2px" textAlign="center" color={{base: "#232627", _dark: "#F3F5F7"}}>{item.name}</Link>
                  )
                })}
              </Flex>
              <Flex gap="8px" maxW="1216px" minH="40px" mx="auto">
                <Flex w="40px" h="40px" bg={{base: "#E8ECEF", _dark: "#232627"}} justifyContent="center" alignItems="center" borderRadius="50px">
                  <FaFacebook size="20px" color={colorMode !== "dark" ? "#005EDF" : "#ffffff"}/>
                </Flex>
                <Flex w="40px" h="40px" bg={{base: "#E8ECEF", _dark: "#232627"}} justifyContent="center" alignItems="center" borderRadius="50px">
                  <TiSocialTwitter size="20px" color={colorMode !== "dark" ? "#005EDF" : "#ffffff"}/>
                </Flex>
                <Flex w="40px" h="40px" bg={{base: "#E8ECEF", _dark: "#232627"}} justifyContent="center" alignItems="center" borderRadius="50px">
                  <FaInstagram size="20px" color={colorMode !== "dark" ? "#005EDF" : "#ffffff"} />
                </Flex>
                <Flex w="40px" h="40px" bg={{base: "#E8ECEF", _dark: "#232627"}} justifyContent="center" alignItems="center" borderRadius="50px">
                  <TiSocialLinkedin size="20px" color={colorMode !== "dark" ? "#005EDF" : "#ffffff"}/>
                </Flex>
              </Flex>
            </Flex>
            <Separator variant="solid" colorPalette="gray.100" size="sm" maxW="100%" w="1216px" orientation="horizontal" height="1px" />
          </>
        ) : <></>}
        <Animated.Flex style={textStyles} maxW="1216px" minH="56px" gap="2rem">
          {inView ? (
            <Flex maxW="359px" minH="23px" gap="1rem">
              <Text minW="262px" minH="23px" fontWeight="400" fontSize="1rem" lineHeight="23.2px" textAlign="center" color={{base: "#6C7275", _dark: "#E8ECEF"}}>© 2025 Cloudi. All rights reserved.</Text>
            </Flex>
          ) : <></>}
        </Animated.Flex>
      </Animated.Flex>
    </Flex>
  )
}

const links = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Courses",
    link: "/",
  },
  {
    id: 3,
    name: "Testimonials",
    link: "/",
  },
  {
    id: 4,
    name: "Pricing",
    link: "/",
  },
  {
    id: 5,
    name: "FAQ",
    link: "/",
  },
]
