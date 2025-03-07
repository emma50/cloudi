import { Box, Flex, Text, Image, Card } from "@chakra-ui/react"
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { useSpring } from '@react-spring/web';
import { Animated } from "@/externals";
import { useInView } from 'react-intersection-observer';

export default function Instructor() {
  // Use the `useInView` hook to detect when the element is visible
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger every time the element comes into view
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // Define the animation using `useSpring`
  const textStyles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(80px)',
    config: { mass: 1, tension: 200, friction: 20, duration: 500 },
    delay: 500,
  });

  // Define the animation using `useSpring`
  const boxStyles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.5)',
    config: { mass: 1, tension: 200, friction: 20, duration: 500 },
    delay: 500,
  });

  return (
    <Box ref={ref} minH="1009px" bg={{base: "#F8F9FF", _dark: "#000000"}} mx="auto" pt={{base: "2rem", sm: "2rem", md: "5rem"}} >
      <Animated.Flex style={textStyles} maxW="1052px" minH="128px" gap="1rem" flexDirection="column" mx="auto" px="1rem">
       {inView ? (
          <>
            <Text minW={{base: "auto", md: "483px"}} minH="60px" color={{base: "#000000", _dark: "#3E90F0"}} fontWeight="600" fontSize="3rem" lineHeight="3.75rem" textAlign="center">Meet your Instructors</Text>
            <Text maxW="1052px" minH="52px" fontWeight="400" fontSize="1.125rem" lineHeight="1.625rem" textAlign="center" color={{base: "#2D2D2D", _dark: "#E8ECEF"}}>Our instructors are experienced practitioners who bring years of experience making sure you're learning the most up-to-date and practical skills companies around the world need.</Text>
            </>
       ) : ""}
      </Animated.Flex>
      <Animated.Flex style={boxStyles} maxW="1146px" minH="581px" gap="1rem" mt="5rem" mx="auto" flexWrap="wrap">
        {inView ? cardBox.map((item: any) => {
          return <CustomCard key={item.id} {...item} />
        }) : ""}
      </Animated.Flex>
    </Box>
  )
}


export const CustomCard = ({name, title, image}: {name: string; title: string; image: string}) => {
  return (
    <Card.Root 
      overflow="hidden" 
      bg={{base: "#FFFFFF", _dark: "#040E11"}} 
      gap="9px" 
      borderRadius="20px" 
      w="35.313rem" 
      minH="37.5rem" 
      pt="2.5rem" 
      boxShadow={{base: "none", _dark: "34.85px 29.63px 48.34px 0px #3366FF0D"}} 
      mx="auto"
      border={{base: "none", _dark: "1px solid #6C72753D" }}
    >
      {/* h="581px" */}
      <Image
        src={image}
        alt="Instructor image"
        w="533px"
        h="381px"
        borderRadius="20px"
        // border="7px solid #6C72753D"
        boxShadow="34.85px 29.63px 48.34px 0px #3366FF0D"
        mx="auto"
      />
      <Card.Body gap="6px" maxW="33.313rem" minH="6rem" px="1.875rem" mx="auto">
        {/* minH=5.563rem */}
        <Card.Title maxW="29.563rem" minH="1.938rem" fontWeight="600" fontSize="1.5rem" lineHeight="1.95rem" textAlign="center" color={{base: "#0A0C0C", _dark: "#FEFEFE"}}>{name}</Card.Title>
        <Card.Description maxW="29.563rem" minH="2rem" fontWeight="400" fontSize="1.25rem" lineHeight="2rem" textAlign="center" color={{base: "#0A0C0C", _dark: "#FEFEFE"}}>{title}</Card.Description>
      </Card.Body>
      <Card.Footer>
        {/* pass in links */}
        <Flex gap="16px" w="129px" h="32px" mx="auto" mt="20px">
          <Flex w="32px" h="32px" bg={{base: "#3E90F012", _dark: "#E8ECEF"}} justifyContent="center" alignItems="center" borderRadius="50%">
            <TiSocialTwitter size="24px" color="#2D2D2D"/>
          </Flex>
          <Flex w="32px" h="32px" bg={{base: "#3E90F012", _dark: "#E8ECEF"}} justifyContent="center" alignItems="center" borderRadius="50%">
            <TiSocialLinkedin size="24px" color="#2D2D2D"/>
          </Flex>
          <Flex w="32px" h="32px" bg={{base: "#3E90F012", _dark: "#E8ECEF"}} justifyContent="center" alignItems="center" borderRadius="50%">
            <FaInstagram size="24px" color="#2D2D2D" />
          </Flex>
        </Flex>
      </Card.Footer>
    </Card.Root>
  )
}

const cardBox = [
  {
    id: 1,
    name: "Mayowa Omotunde",
    title: "DevOps Engineer",
    image: "/images/instructor-image.jpeg",
  },
]
