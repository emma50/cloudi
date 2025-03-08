import { Text, Flex, Image, Button } from "@chakra-ui/react"
import { LuCheckCheck } from "react-icons/lu";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useColorMode } from "@/components/ui/color-mode";
import { useSpring } from '@react-spring/web';
import { Animated } from "@/externals";
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  return (
    <>
      <Flex gap={{base: "89px", lg:".5rem"}} align={{base: "center", lg: "start"}} justify="space-between" flexDirection={{ base: "column", lg: "row" }} minH="594px" pb={{base: "0", md: "80px"}} mx="auto" maxW="1232px">
        {/* py="80px" maxH={{base: "auto", lg: "594px"}}*/}
        <Left />
        <Right />
      </Flex>
    </>
  )
}

export const Left = () => {
  const { colorMode } = useColorMode()

  // Use the `useInView` hook to detect when the element is visible
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger every time the element comes into view
    // threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // Define the animation using `useSpring`
  const styles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.5)',
    config: { mass: 1, tension: 200, friction: 20, duration: 500 },
    delay: 500,
  });

  return (
    <Flex ref={ref} minH="508px" maxW="648px" flexDir="column" justify="center" mt={{base: "auto", lg: "3rem"}} w={{base: "auto", lg: "50%"}}>
      {/* height={{ base: "auto", lg: "508px" }} */}
      <Animated.Box style={styles}>
          {inView ? (
            <Flex flexDirection="column" gapY="2.5rem" mx={{base: "auto", md: "0", lg: "0"}}> 
              <Flex flexDirection="column" gapY="1rem" px={{base: "2rem", md: "0"}}>
                <Text fontSize="4rem" fontWeight="700" lineHeight="60px" color={{ base: "#000000", _dark: "transparent" }} maxW="100%" textAlign={{base: "center", md: "start"}} minH="180px" bgClip={{base: "border-box", _dark: "text"}} bgGradient={{base: "none", _dark: "linear-gradient(112.86deg, #0060E7 -29.72%, #0060E7 7.75%, #E1F5F2 57.86%)"}}>
                  Become a Certified DevOps Engineer in 12 Weeks!
                </Text>
                <Text textAlign={{base: "center", md: "start"}} color={{base: "#061C3D", _dark: "#ffffff"}} fontWeight="400" fontSize="20px" lineHeight="28px" minH="112px" maxW="592px">Join a structured, project-based DevOps training designed to make you job-ready. Whether you're a beginner or looking to level up, our expert-led sessions will equip you with real-world skills.</Text>
              </Flex>
  
              <Flex flexWrap="wrap" maxW="796px" gap="1.5rem" px={{base: "2rem", md: "0"}}>
                <Flex gap="8px" maxW="396px" minH="24px">
                  <LuCheckCheck color={colorMode !== "dark" ? "#005EDF" : "#6C7275"} size="1.5rem" />
                  <Text color={{base: "#005EDF", _dark: "#6C7275"}} fontWeight="500" fontSize="1rem" lineHeight="24px" maxW="354px" maxH="24px" textAlign="start">Master core DevOps principles and practices.</Text>
                </Flex>
                <Flex gap="8px" maxW="396px" minH="24px">
                  <LuCheckCheck color={colorMode !== "dark" ? "#005EDF" : "#6C7275"} size="24px" />
                  <Text color={{base: "#005EDF", _dark: "#6C7275"}} fontWeight="500" fontSize="16px" lineHeight="24px" maxW="354px" maxH="24px" textAlign="start">Learn to automate infrastructure.</Text>
                </Flex>
                <Flex gap="8px" maxW="396px" minH="24px">
                  <LuCheckCheck color={colorMode !== "dark" ? "#005EDF" : "#6C7275"} size="24px" />
                  <Text color={{base: "#005EDF", _dark: "#6C7275"}} fontWeight="500" fontSize="16px" lineHeight="24px" maxW="354px" maxH="24px" textAlign="start">Build and deploy applications faster.</Text>
                </Flex>
                <Flex gap="8px" maxW="396px" minH="24px">
                  <LuCheckCheck color={colorMode !== "dark" ? "#005EDF" : "#6C7275"} size="24px" />
                  <Text color={{base: "#005EDF", _dark: "#6C7275"}} fontWeight="500" fontSize="16px" lineHeight="24px" maxW="354px" maxH="24px" textAlign="start">Become Certified.</Text>
                </Flex>
              </Flex>
  
            {/* Buttons */}
              <Flex gap="1rem" flexDirection={{base: "row", md: "row"}} w={{base: "100%", md: "368px"}} minH="56px" alignItems={{base: "center", md:"normal"}} px={{base: "2rem", md: "0"}}>
                {buttonList.map((item: any) => {
                  return (
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
                  )
                })}
              </Flex>
            </Flex>
            ) : <></>
            }
      </Animated.Box>
    </Flex>
  )
}

export const Right = () => {
  const {colorMode} = useColorMode();
  
  return (
    <Flex maxW="606px" maxH="994px" borderRadius="8px" w={{base: "auto", lg: "50%"}}>
      {/*maxH="594px" w={{base: "auto", lg: "50%"}} */}
      {colorMode !== "dark" ? (
        <Image src="/images/hero-group.png" alt="hero-group" h={{base: "auto", lg: "724px"}} borderRadius="8px"/>
      ) : (
        <Image src="/images/hero-group-dark.png" alt="hero-group" h={{base: "auto", lg: "724px"}} borderRadius="8px"/>
      )}
    </Flex>
  )
}

const buttonList = [
  { id: 1, title: "Enroll now" },
  { id: 2, title: "Chat with us" }
]
