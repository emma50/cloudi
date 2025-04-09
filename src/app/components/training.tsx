import { Box, Flex, Text, Button, Card } from "@chakra-ui/react"
import { IoIosArrowRoundForward } from "react-icons/io"
import { RiFolder2Line } from "react-icons/ri";
import { PiMagicWand } from "react-icons/pi";
import { LuNotepadText } from "react-icons/lu";
import { useSpring } from '@react-spring/web';
import { Animated } from "@/externals";
import { useInView } from 'react-intersection-observer';
import { handleWhatsAppClick } from "@/utils/functions";

export default function Training() {
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

  // Define the animation using `useSpring`
  const boxStyles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.5)',
    config: { mass: 1, tension: 200, friction: 20, duration: 500 },
    delay: 500,
  });

  return (
    <Flex ref={ref} pt={{base: "2rem", md: "0"}} flexDirection="column" maxW="100%" minH="572px" gap="72px" flexWrap="wrap">
      {/* pt={{base: "0", sm: "10rem", md: "10rem", lg: "0", xl: "3rem"}} */}
      <Animated.Flex style={textStyles} maxW="100%" w="1274px" minH="96px" flexWrap="wrap" mx="auto" gap={{base: "1.5rem", md: "0", lg: "6.125rem"}} justifyContent="center">
        {/* pt={{base: "5rem", md: "auto", lg: "0"}} */}
        {inView ? (
          <>
          <Text maxW={{base: "608px", md: "700px", lg: "460px"}} minH="120px" fontWeight="600" fontSize="3rem" lineHeight="60px" color={{base: "#061C3D", _dark: "#3E90F0"}} textAlign={{base: "center", md: "start", lg: "start"}} mx="auto">Why Choose This Training?</Text>
          {/* xl: "608px" */}
          <Flex flexDirection="column" maxW={{base: "608px", md: "700px", lg: "460px"}} minH="96px" gap="24px" alignItems={{base: "center", md: "normal"}} mx="auto" pt={{base: "2rem", lg: "initial"}}>
            {/* xl: "608px" */}
            {/* maxW={{base: "569px", lg: "480px", xl: "569px"}} */}
            <Text maxW={{base: "608px", md: "608px", lg: "460px", xl: "608px"}} minH="56px" fontWeight="400" fontSize="20px" lineHeight="28px" color={{base: "#061C3D", _dark:"#FEFEFE"}} textAlign={{base: "center", md: "start"}}>Go from Beginner to Pro with expert mentorship and practical projects in 12 weeks.</Text>
            <Flex justifyContent="start">
              <Button
                bg="#005EDF"
                p="32px"
                gap="12px"
                display="flex"
                borderRadius="7px"
                h="56px"
                w="176px"
                variant="solid"
                onClick={handleWhatsAppClick}
              >
                <Text color="#FFFFFF" fontWeight="700" fontSize="16px" lineHeight="48px" textAlign="center">Enroll now </Text>
                <IoIosArrowRoundForward color="#FFFFFF" size="24px" />
              </Button>
            </Flex>
          </Flex>
          </>
        ) : <></>}
      </Animated.Flex>
      {/* Next category */}
      <Animated.Flex style={boxStyles} flexDirection={{base: "column", md: "row"}} maxW="100%" w="1282px" minH="21.875rem" justifyContent={{base: "normal", md: "space-evenly"}} alignItems={{base: "center", md: "normal"}} flexWrap="wrap" mx="auto" gap="2rem" px={{base: "0", md: "1rem", lg: "0"}}>
        {inView ? trainingCard.map((item) => {
          return (
            <CustomCard key={item.id} {...item} />
          )
        }) : <></>}
      </Animated.Flex>
    </Flex>
  )
}

const CustomCard = ({id, icon, title, desc}: {id: number; icon: any; title: string; desc: string}) => {
  return (
    <Card.Root 
      display="flex" 
      bg={{base: "#FBFDFF", _dark: "#0A0A0A"}} 
      maxW="23.125rem" 
      minH="21.875rem"
      w={{base: "18.125rem", md: "22.125rem"}} 
      h="21.875rem"
      px="1.25rem" 
      py="2.5rem" 
      border={{base: "none", _dark: "1px solid #E5F4F238" }}
      // borderImage={{base: "initial", _dark: "linear-gradient(180deg, #E1F5F2 0%, rgba(0, 96, 231, 0.44) 100%) 1"}} 
      boxShadow={{base: "34.85px 29.63px 48.34px 0px #3366FF0D", _dark: "-15px -22px 48.34px 0px #3366FF0D"}} 
      borderRadius="20px"
      overflow="hidden"
    >
      <Card.Body display="flex" maxW="19.375rem" minH="15.75rem" gap="1.875rem" flexDirection="column" justifyContent="center" alignItems="center">
        <Box w="4rem" h="4rem" borderRadius="10px" p="1.25rem" gap="0.625rem" bg={{base: `${id === 1 ? "#F8D57E33" : id === 2 ? "#CAECCD" : "#D7EAF8"}`, _dark: "#D7EAF8"}} mx="auto" >{icon}</Box>
        <Flex maxW="19.375rem" minH="9.875rem" gap="1.5rem" flexDirection="column">
          <Card.Title w="100%" minH="4.875rem" fontWeight="600" fontSize="1.5rem" lineHeight="1.95rem" textAlign="center">{title}</Card.Title>
          <Card.Description color={{base: "#2D2D2D", _dark: "#E8ECEF"}} maxW="19.375rem" minH="4.5rem" fontWeight="400" fontSize="1rem" textAlign="center" lineHeight="1.5rem" overflow="scroll" className="scrollbar">{desc}</Card.Description>
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}

const trainingCard = [
  {
    id: 1,
    icon: <RiFolder2Line size="1.5rem" color="#2D2D2D" />,
    title: "100% Practical & Interactive Sessions",
    desc: "No boring lectures - engage in live, hands-on training with real-time feedback.",
  },
  {
    id: 2,
    icon: <PiMagicWand size="1.5rem" color="#2D2D2D" />,
    title: "Build Real-World Projects",
    desc: "Work on industry-relevant projects that showcase your skills and problem-solving abilities.",
  },
  {
    id: 3,
    icon: <LuNotepadText size="1.5rem" color="#2D2D2D" />,
    title: "Job-Ready Portfolio",
    desc: "Create a job-ready portfolio that highlights your expertise and stands out in the hiring process.",
  },
]
