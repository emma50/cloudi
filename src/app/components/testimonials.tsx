import { Box, Flex, Text, HStack, Stack, SimpleGrid, Grid } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { useSpring, useTrail } from '@react-spring/web';
import { Animated } from "@/externals";
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive'

export default function Testimonials() {
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
    <Box ref={ref} minH="625px" color={{base: "#FFFFFF", _dark: "#000000"}} mt="5rem">
      <Flex minH="465px" gap="72px" flexDirection="column">
        <Animated.Flex style={textStyles} flexDirection={{base: "column", lg: "row"}} maxW="1280px" minH="100px" gap={{base: "4rem", lg: "24rem", xl: "34.313rem"}} mx={{base: "auto", md: "80px"}}>
          {/* ml={{base: "auto", md: "80px"}} */}
          <Flex maxW="587px" minH="100px" gap="16px" flexDirection="column">
            <Text maxW="536px" minH="60px" fontWeight="700" fontSize="3.5rem" lineHeight="60px" color={{base: "#061C3D", _dark: "#005EDF"}} textAlign="start">Success Stories</Text>
            <Text maxW="587px" minH="24px" fontWeight="400" fontSize="20px" lineHeight="24.2px" color={{base: "#061C3D", _dark: "#FEFEFE"}} textAlign="start">What our students are saying about their learning experience.</Text>
          </Flex>
          <Flex maxW="144px" minH="64px" gap="16px">
            <Box w="64px" h="64px" borderRadius="150px" p="16px" gap="10px" bg="#F0F5FF">
              <IoIosArrowRoundBack size="32px" color="#333333"/>
            </Box>
            <Box w="64px" h="64px" borderRadius="150px" p="16px" gap="10px" bg="#333333">
              <IoIosArrowRoundForward size="32px" color="#F0F5FF"/>
            </Box>
          </Flex>
        </Animated.Flex>
        <Flex 
          flexDirection={{base: "column", md: "row"}} 
          maxW="1540px"
          minH="293px" 
          gap="1.5rem"
          ml={{base: "auto", lg: "-260px", xl: "-300px"}}
          mr={{base: "auto", lg: "1rem"}}
          display={{base: "flex", lg: "block"}}
        >
          <CustomCard />
        </Flex>
      </Flex>
    </Box>
  )
}

const customCard = [
  {
    id: 1,
    image: "/images/testimonial-image.png",
    name: "Michelle Akinyemi",
    desc: "My decision to enroll in software engineering classes was undoubtedly one of the best I have made. The course content was comprehensive, and our instructors guidance were invaluable in helping me grasp complex concepts.",
  },
  {
    id: 2,
    image: "/images/testimonial-image.png",
    name: "Michelle Akinyemi",
    desc: "My decision to enroll in software engineering classes was undoubtedly one of the best I have made. The course content was comprehensive, and our instructors guidance were invaluable in helping me grasp complex concepts.",
  },
  {
    id: 3,
    image: "/images/testimonial-image.png",
    name: "Michelle Akinyemi",
    desc: "My decision to enroll in software engineering classes was undoubtedly one of the best I have made. The course content was comprehensive, and our instructors guidance were invaluable in helping me grasp complex concepts.",
  },
  {
    id: 4,
    image: "/images/testimonial-image.png",
    name: "Michelle Akinyemi",
    desc: "My decision to enroll in software engineering classes was undoubtedly one of the best I have made. The course content was comprehensive, and our instructors guidance were invaluable in helping me grasp complex concepts.",
  },
]

const CustomCard = () => {
  const isStyleOne = useMediaQuery({ minWidth: 1024, maxWidth: 1135 })
  const isStyleTwo = useMediaQuery({ minWidth: 1036, maxWidth: 1160 })
  const isStyleThree = useMediaQuery({ minWidth: 1160, maxWidth: 1170 })
  const isStyleFour = useMediaQuery({ minWidth: 1171, maxWidth: 1200 })
  const isStyleFive = useMediaQuery({ minWidth: 1297 })

  const [ref, inView] = useInView({ 
    triggerOnce: false, 
    // threshold: 0.2 
  });

  // Use `useTrail` to animate an array of items
  const trail = useTrail(customCard.length, {
    triggerOnce: false, // Trigger every time the element comes into view
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.5)',
    config: { mass: 1, tension: 200, friction: 20, duration: 500 },
    delay: inView ? 200 : 0,
  });

  return (
    <Box ref={ref}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} columnGap={`${isStyleFive ? "7.5rem" : isStyleFour ? "2.5rem" : isStyleTwo ? "1rem" : "1.5rem"}`} rowGap={"2.5rem"} mr={{base: "auto", lg: "1rem", xl: "1rem"}}>
        {trail.map((styles, index) => (
          <>
          {isStyleOne ? (
            <Animated.Grid style={styles} w="19rem" maxW="21.5rem" minH="16.313rem" borderRadius="24px" bg="#005EDF">
              <Grid w="100%" minH="10.75rem" gap="1rem" py="1.5rem" px="1.063rem">
                {/* maxW="26.5rem" */}
                <HStack maxW="16.375rem" minH="48px" gap="0.75rem">
                  <Avatar
                    src={customCard[index].image}
                    name="Testimonial image"
                    w="3rem"
                    h="3rem"
                  />
                  <Stack gap="0" maxW="115.625rem" minH="24px">
                    <Text fontWeight="500" fontSize="1rem" lineHeight="1.5rem" color="#FEFEFE">{customCard[index].name}</Text>
                  </Stack>
                </HStack>
                <Box maxW="26.5rem" fontWeight="400" fontSize="1.125rem" lineHeight="1.625rem" color="#FEFEFE" textAlign='left'>{customCard[index].desc}</Box>
              </Grid>
            </Animated.Grid> 
          ) : isStyleTwo ? (
            <Animated.Grid style={styles} w="22rem" maxW="21.5rem" minH="16.313rem" borderRadius="24px" bg="#005EDF">
              <Grid w="100%" minH="10.75rem" gap="1rem" py="1.5rem" px="1.063rem">
                {/* maxW="26.5rem" */}
                <HStack maxW="16.375rem" minH="48px" gap="0.75rem">
                  <Avatar
                    src={customCard[index].image}
                    name="Testimonial image"
                    w="3rem"
                    h="3rem"
                  />
                  <Stack gap="0" maxW="115.625rem" minH="24px">
                    <Text fontWeight="500" fontSize="1rem" lineHeight="1.5rem" color="#FEFEFE">{customCard[index].name}</Text>
                  </Stack>
                </HStack>
                <Box maxW="26.5rem" fontWeight="400" fontSize="1.125rem" lineHeight="1.625rem" color="#FEFEFE" textAlign='left'>{customCard[index].desc}</Box>
              </Grid>
            </Animated.Grid> 
          ) : isStyleThree ? (
            <Animated.Grid style={styles} w="21rem" maxW="26.5rem" minH="16.313rem" borderRadius="24px" bg="#005EDF">
              <Grid w="100%" minH="13.75rem" gap="1rem" py="1.5rem" px="1.063rem">
                {/* maxW="26.5rem" */}
                <HStack maxW="16.375rem" minH="48px" gap="0.75rem">
                  <Avatar
                    src={customCard[index].image}
                    name="Testimonial image"
                    w="3rem"
                    h="3rem"
                  />
                  <Stack gap="0" maxW="115.625rem" minH="24px">
                    <Text fontWeight="500" fontSize="1rem" lineHeight="1.5rem" color="#FEFEFE">{customCard[index].name}</Text>
                  </Stack>
                </HStack>
                <Box maxW="26.5rem" fontWeight="400" fontSize="1.125rem" lineHeight="1.625rem" color="#FEFEFE" textAlign='left'>{customCard[index].desc}</Box>
              </Grid>
            </Animated.Grid> 
          ) : isStyleFour ? (
            <Animated.Grid style={styles} w="20rem" maxW="26.5rem" minH="16.313rem" borderRadius="24px" bg="#005EDF">
              <Grid w="100%" minH="13.75rem" gap="1rem" py="1.5rem" px="1.063rem">
                {/* maxW="26.5rem" */}
                <HStack maxW="16.375rem" minH="48px" gap="0.75rem">
                  <Avatar
                    src={customCard[index].image}
                    name="Testimonial image"
                    w="3rem"
                    h="3rem"
                  />
                  <Stack gap="0" maxW="115.625rem" minH="24px">
                    <Text fontWeight="500" fontSize="1rem" lineHeight="1.5rem" color="#FEFEFE">{customCard[index].name}</Text>
                  </Stack>
                </HStack>
                <Box maxW="26.5rem" fontWeight="400" fontSize="1.125rem" lineHeight="1.625rem" color="#FEFEFE" textAlign='left'>{customCard[index].desc}</Box>
              </Grid>
            </Animated.Grid> 
          ) : isStyleFive ? (
            <Animated.Grid style={styles} w="24.5rem" maxW="26.5rem" minH="16.313rem" borderRadius="24px" bg="#005EDF">
              <Grid w="100%" minH="13.75rem" gap="1.5rem" py="1.5rem" px="1.063rem">
                {/* maxW="26.5rem" */}
                <HStack maxW="16.375rem" minH="48px" gap="0.75rem">
                  <Avatar
                    src={customCard[index].image}
                    name="Testimonial image"
                    w="3rem"
                    h="3rem"
                  />
                  <Stack gap="0" maxW="115.625rem" minH="24px">
                    <Text fontWeight="500" fontSize="1rem" lineHeight="1.5rem" color="#FEFEFE">{customCard[index].name}</Text>
                  </Stack>
                </HStack>
                <Box maxW="26.5rem" fontWeight="400" fontSize="1.125rem" lineHeight="1.625rem" color="#FEFEFE" textAlign='left'>{customCard[index].desc}</Box>
              </Grid>
            </Animated.Grid> 
          ) : (
            <Animated.Grid style={styles} w={{base: "340px", sm: "440px", lg: "22rem", xl: "26rem"}} maxW="22.5rem" minH="16.313rem" borderRadius="24px" bg="#005EDF">
              <Grid w="100%" minH="13.75rem" gap="1rem" py="1.5rem" px="1.063rem">
                {/* maxW="26.5rem" */}
                <HStack maxW="16.375rem" minH="48px" gap="0.75rem">
                  <Avatar
                    src={customCard[index].image}
                    name="Testimonial image"
                    w="3rem"
                    h="3rem"
                  />
                  <Stack gap="0" maxW="115.625rem" minH="24px">
                    <Text fontWeight="500" fontSize="1rem" lineHeight="1.5rem" color="#FEFEFE">{customCard[index].name}</Text>
                  </Stack>
                </HStack>
                <Box maxW="26.5rem" fontWeight="400" fontSize="1.125rem" lineHeight="1.625rem" color="#FEFEFE" textAlign='left'>{customCard[index].desc}</Box>
              </Grid>
            </Animated.Grid>   
          )}</> 
        ))}
      </SimpleGrid>
    </Box>
  )
}
