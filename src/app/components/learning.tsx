import { Box, Flex, Text, Image, Card, SimpleGrid } from "@chakra-ui/react"
import { GoPackage } from "react-icons/go";
import { useMediaQuery } from 'react-responsive'
import { useSpring, useTrail } from '@react-spring/web';
import { Animated } from "@/externals";
import { useInView } from 'react-intersection-observer';

export default function Learning() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1060, maxWidth: 1144 })
  const isDesktopOrLaptopTwo = useMediaQuery({ minWidth: 1144, maxWidth: 1296 })

  const isStyledOne = useMediaQuery({ minWidth: 1027, maxWidth: 1098 })
  const isStyledTwo = useMediaQuery({ minWidth: 1099, maxWidth: 1296 })

  // Use the `useInView` hook to detect when the element is visible
  const [ref1, inView1] = useInView({
    triggerOnce: false, // Trigger every time the element comes into view
    // threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // Use the `useInView` hook to detect when the element is visible
  const [ref2, inView2] = useInView({
    triggerOnce: false, // Trigger every time the element comes into view
    // threshold: 0.4, // Trigger when 40% of the element is visible
  });

  // Use the `useInView` hook to detect when the element is visible
  const [ref3, inView3] = useInView({
    triggerOnce: false, // Trigger every time the element comes into view
    // threshold: 0.4, // Trigger when 40% of the element is visible
  });

  // Use the `useInView` hook to detect when the element is visible
  const [ref4, inView4] = useInView({
    triggerOnce: false, // Trigger every time the element comes into view
    // threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // Define the animation using `useSpring`
  const textStyles = useSpring({
    opacity: inView1 || inView4 ? 1 : 0,
    transform: inView1 || inView4 ? 'translateY(0)' : 'translateY(80px)',
    config: { mass: 1, tension: 200, friction: 20, duration: 500 },
    delay: 500,
  });

  // Define the animation using `useSpring`
  const boxStyles = useSpring({
    opacity: inView2 || inView3 || inView4 ? 1 : 0,
    transform: inView2 || inView3 || inView4 ? 'scale(1)' : 'scale(0.5)',
    config: { mass: 1, tension: 200, friction: 20, duration: 500 },
    delay: 500,
  });

  return (
    <Box maxW="1440px" minH="2035px" pt={{base: "0", md: "0"}} position="relative">
      <Flex ref={ref1} flexDirection="column" maxW="100%" minH="132px" gap="1rem" alignItems="center" py={{base: "7.5rem", md: "5.5rem"}}>
        <Animated.Text style={textStyles} maxW="1260px" minH="60px" fontWeight="600" fontSize="3rem" lineHeight="3.75rem" textAlign="center" color={{base: "#000000", _dark: "#3E90F0"}} mx="auto" zIndex="99">{inView1 ? "What You Will Learn" : ""}</Animated.Text>
        <Animated.Text style={textStyles} maxW="746px" minH="66px" fontWeight="400" fontSize="1.5rem" lineHeight="1.75rem" textAlign="center" color={{base: "#000000", _dark: "#FEFEFE"}} mx="auto" zIndex="99">{inView1 ? "Master essential technical and soft skills to prepare you for a career in Devops Engineering in 12 weeks." : ""}</Animated.Text>
      </Flex>
      {/* Text and image 1 */}
      <Flex ref={ref2} flexDirection={{base: "column", lg: "row"}} position="relative" pr="-2rem"  pb={`${isDesktopOrLaptop || isDesktopOrLaptopTwo ? "2rem" : ".5rem"}`} justifyContent={{base: "initial", lg: "space-between"}} alignItems={{base: "center", lg: "initial"}} minH="708px">
        <Flex maxW="828px" minH="708px" gap="1.5rem" flexDirection="column" alignItems={{base: "center", lg: "initial"}} px="2rem" zIndex="20">
          <CustomLearningCardOne />
        </Flex>
        {isStyledOne ? (
          <Animated.Flex
            style={boxStyles}
            position="relative" 
            alignSelf={{base: "initial", xl: "start" }}
            justifySelf="start"
            mt="-120px"
            pl={{base: "2rem", md: "0"}}
          >
            {inView2 ? (
              <Image src="/images/training-image-1.png" w="100%" h="auto" alt="" mt="-70px"/>
            ) : ""}
          </Animated.Flex>
        ) : isStyledTwo ? (
          <Animated.Flex
            style={boxStyles}
            position="relative" 
            alignSelf={{base: "initial", xl: "start" }}
            justifySelf="start"
            mt="-300px"
            pl={{base: "2rem", md: "0"}}
          >
            {inView2 ? (
              <Image src="/images/training-image-1.png" w="100%" h="auto" alt="" mt="-70px"/>
            ) : ""}
          </Animated.Flex>
        ) : (
          <Animated.Flex
            style={boxStyles}
            position="relative" 
            alignSelf={{base: "initial", xl: "start" }}
            justifySelf="start"
            mt={{base: "initial", md: "initial", lg: "initial", xl: "-300px"}}
            pl={{base: "2rem", md: "0"}}
          >
            {inView2 ? (
              <Image src="/images/training-image-1.png" w="100%" h="auto" alt="" mt={{base: "-200px", sm: "-300px",  md: "", lg: "-70px"}}/>
            ) : ""}
          </Animated.Flex>
        )}
      </Flex>
      {/* Text and image 2 */}
      <Flex ref={ref3} flexDirection={{base: "column", lg: "row"}} gap="2rem" position="relative" pr="-2rem" justifyContent={{base: "initial", lg: "space-between"}} alignItems={{base: "center", lg: "initial"}} minH="708px" top={{base: "initial", xl: "0"}}>
        <Animated.Flex 
          style={boxStyles}
          position="relative" 
          alignSelf={{base: "initial", xl: "center" }}
          mt={{base: "2rem", md: "initial", lg: "-50px", xl: "-180px"}}
        >
          {inView3 ? (
            <Image src="/images/training-image-2-new.png" w="inherit" alt="" maxWidth="100%" />
          ) : ""}        
        </Animated.Flex>
        <Flex maxW="828px" minH="708px" gap="1.5rem" flexDirection="column" alignItems={{base: "center", lg: "initial"}} px="2rem">
          <CustomLearningCardTwo />
        </Flex>
      </Flex>
      {/* --------------------------------------------------------------- */}
      <Flex ref={ref4} maxW="1344px" minH="488px" gap="5rem" m={{base: "auto", md: "3.063rem"}} flexDirection="column" mt={{base: "6rem", lg: "8rem", xl: "6rem"}}>
        <Animated.Flex style={textStyles} maxW="1260px" minH="132px" gap="1rem" flexDirection="column">
          {inView4 ? (
            <>
              <Text maxW="1260px" minH="60px" fontWeight="500" fontSize="3rem" lineHeight="3.75rem" textAlign="center" color={{base: "#000000", _dark: "#3E90F0"}}>Our Payment Options</Text>
              <Text maxW="648px" minH="56px" fontWeight="400" fontSize="1.25rem" lineHeight="1.75rem" textAlign="center" color={{base: "#000000", _dark: "#FEFEFE"}} mx="auto">Master essential technical and soft skills to prepare you for a career in DevOps Engineering in 12 weeks.</Text>
            </>
          ) : ""}
        </Animated.Flex>
        <Flex flexDirection={{base: "column", md: "row"}} maxW="1344px" minH="276px" justifyContent={{base: "initial", md: "space-between"}} flexWrap="wrap" gap="1rem" px={{base: "1.5rem", md: "initial"}}>
          <PaymentCard />
        </Flex>
      </Flex>
    </Box>
  )
}

const CustomLearningCardOne = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  // Use `useTrail` to animate an array of items
  const trail = useTrail(learningList.length, {
    // from: { opacity: 0, transform: 'translateY(50px)' },
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.5)',
    config: { mass: 1, tension: 200, friction: 20 },
    delay: inView ? 200 : 0,
  });

  return (
    <Box ref={ref}>
      <SimpleGrid columns={{ base: 1 }} gap="1.5rem">
        {trail.map((styles, index) => (
           <Animated.Box key={learningList[index].id} style={styles} >
            <Card.Root 
              maxW="100%" 
              w="100%"
              minW="280px"
              minH="160px" 
              borderRadius="1.25rem" 
              border={{base: "none", _dark: "1px solid #E5F4F238"}}
              boxShadow={{base: "none", _dark: "34.85px 29.63px 48.34px 0px #3366FF0D"}} 
            >
              <Card.Body 
                gap="1.5rem" 
                maxW="100%" 
                minH="100%" 
                display="flex"
                flexDirection={{base: "column", md: "row"}}
                alignItems={{base: "initial", md: "center"}}
                justifyContent="center"
              >
                <Flex 
                  maxW="4.75rem" 
                  maxH="4.75rem"
                  p="1.25rem" 
                  gap="10px" 
                  borderRadius="8px"
                  bg={{base: " #AEC6EA80", _dark: "#333333"}} 
                  alignSelf={{base: "center", md: "flex-start"}}
                  mt={{base: "initial", md: "1rem"}}
                >
                  {learningList[index].icon}
                </Flex>
                <Flex 
                  maxW="649px" 
                  minH="120px" 
                  gap="1.25rem" 
                  flexDirection="column" 
                >
                  <Card.Title maxW="649px" minH="32px" fontWeight="600" fontSize="1.5rem" lineHeight="2rem" color={{base: "#333333", _dark: "#F3F5F7"}}>{learningList[index].title}</Card.Title>
                  <Card.Description maxW="449px" minH="76px" fontWeight="400" fontSize="1rem" lineHeight="1.5rem" color={{base: "#333333", _dark: "#F3F5F7"}}>{learningList[index].desc}</Card.Description>
                </Flex>
              </Card.Body>
            </Card.Root>
          </Animated.Box>    
        ))}
      </SimpleGrid>
    </Box>
  )
}

const CustomLearningCardTwo = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  // Use `useTrail` to animate an array of items
  const trail = useTrail(learningListTwo.length, {
    // from: { opacity: 0, transform: 'translateY(50px)' },
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.5)',
    config: { mass: 1, tension: 200, friction: 20 },
    delay: inView ? 200 : 0,
  });

  return (
    <Box ref={ref}>
      <SimpleGrid columns={{ base: 1 }} gap="1.5rem">
        {trail.map((styles, index) => (
          <Animated.Box key={learningListTwo[index].id} style={styles} >
            <Card.Root 
              maxW="100%" 
              w="100%"
              minW="280px"
              minH="160px" 
              borderRadius="1.25rem" 
              border={{base: "none", _dark: "1px solid #E5F4F238"}}
              boxShadow={{base: "none", _dark: "34.85px 29.63px 48.34px 0px #3366FF0D"}} 
            >
              <Card.Body 
                gap="1.5rem" 
                maxW="100%" 
                minH="100%" 
                display="flex"
                flexDirection={{base: "column", md: "row"}}
                alignItems={{base: "initial", md: "center"}}
              >
                <Flex 
                  maxW="4.75rem" 
                  maxH="4.75rem"
                  p="1.25rem" 
                  gap="10px" 
                  borderRadius="8px"
                  bg={{base: " #AEC6EA80", _dark: "#333333"}} 
                  alignSelf={{base: "center", md: "flex-start"}}
                  mt={{base: "initial", md: "1rem"}}
                >
                  {learningListTwo[index].icon}
                </Flex>
                <Flex 
                  maxW="649px" 
                  minH="120px" 
                  gap="1.25rem" 
                  flexDirection="column" 
                >
                  <Card.Title maxW="649px" minH="32px" fontWeight="600" fontSize="1.5rem" lineHeight="2rem" color={{base: "#333333", _dark: "#F3F5F7"}}>{learningListTwo[index].title}</Card.Title>
                  <Card.Description maxW="449px" minH="76px" fontWeight="400" fontSize="1rem" lineHeight="1.5rem" color={{base: "#333333", _dark: "#F3F5F7"}}>{learningListTwo[index].desc}</Card.Description>
                </Flex>
              </Card.Body>
            </Card.Root>
          </Animated.Box>    
        ))}
      </SimpleGrid>
    </Box>
  )
}

const PaymentCard = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: false, 
    // threshold: 0.2 
  });

  // Use `useTrail` to animate an array of items
  const trail = useTrail(paymentMethods.length, {
    // from: { opacity: 0, transform: 'translateY(50px)' },
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.5)',
    config: { mass: 1, tension: 200, friction: 20 },
    delay: inView ? 200 : 0,
  });

  return (
    <Box ref={ref}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="1.5rem">
        {trail.map((styles, index) => (
           <Animated.Box key={paymentMethods[index].id} style={styles}>
            <Card.Root maxW={{base: "340px", sm: "440px", lg: "710px"}} overflow="hidden" minW="160px" minH="276px" borderRadius="20px" bg={{base: `${paymentMethods[index].id === 1 ? "#005EDF" : "#FEFEFE"}`, _dark: `${paymentMethods[index].id === 1 ? "#005EDF" : "#0A0A0A"}`}} border={{base: "none", _dark: `${paymentMethods[index].id !== 1 ? "1px solid #3E90F0" : "none"}`}}>
              <Card.Body gap="4px" minW="180px" minH="124px" py="1.5rem" px="1.75rem">
                <Card.Title minW="160px" minH="60px" fontWeight="400" fontSize="2.25rem" lineHeight="3.75rem" textAlign="start" color={{base: `${paymentMethods[index].id === 1 ? "#ffffff" : "#000000"}`, _dark: "#ffffff"}}>{paymentMethods[index].title}</Card.Title>
                <Text minW="139px" maxW={{base: "440px", sm: "512px"}} minH="60px" fontWeight="600" fontSize="2.5rem" lineHeight="3.75rem" textAlign="start" color={{base: `${paymentMethods[index].id === 1 ? "#ffffff" : "#000000"}`, _dark: "#ffffff"}}>
                  {paymentMethods[index].amount}
                </Text>
                <Card.Description pt="2rem" maxW={{base: "440px", lg: "512px", xl: "582px"}} minH="72px" fontWeight="400" fontSize="1.5rem" lineHeight="2.25rem" textAlign="start" color={{base: `${paymentMethods[index].id === 1 ? "#ffffff" : "#000000"}`, _dark: "#ffffff"}}>{paymentMethods[index].desc}</Card.Description>
              </Card.Body>
            </Card.Root>
          </Animated.Box>    
        ))}
      </SimpleGrid>
    </Box>
  )
}

const paymentMethods = [
  {
    id: 1,
    title: "Full Payment",
    amount: "₦350,000",
    desc: "Pay your fees 100% upfront. No other charges come up during your learning.",
  },
  {
    id: 2,
    title: "2 Installment Option",
    amount: "₦175,000/Installment",
    desc: "Complete your payment within 2 months of the program in 2 installments.",
  },
]

const learningList = [
  {
    id: 1,
    icon: <GoPackage color=" #3E90F0" size="2.25rem" />,
    title: "DevOps Fundamentals & Version Control",
    desc: "Understand DevOps principles, culture, and benefits. Master Git & GitHub for seamless version control and collaboration.",
  },
  {
    id: 2,
    icon: <GoPackage color=" #3E90F0" size="2.25rem" />,
    title: "Python Scripting for Automation",
    desc: "Learn Python programming essentials for DevOps workflows. Write automation scripts to streamline tasks and deployments.",
  },
  {
    id: 3,
    icon: <GoPackage color=" #3E90F0" size="2.25rem" />,
    title: "AWS Cloud Services",
    desc: "Get hands-on experience with AWS core services like EC2, EKS, S3, VPC, and IAM. Implement cloud security best practices for scalable infrastructure.",
  },
]

const learningListTwo = [
  {
    id: 1,
    icon: <GoPackage color=" #3E90F0" size="2.25rem" />,
    title: "Terraform and Infrastructure as Code",
    desc: "Discover the power of Infrastructure as Code for cloud automation. Use Terraform to efficiently provision and manage AWS resources.",
  },
  {
    id: 2,
    icon: <GoPackage color=" #3E90F0" size="2.25rem" />,
    title: "Docker & Containerization",
    desc: "Build, ship, and run applications with Docker containers. Manage multi-container applications using Docker Compose.",
  },
  {
    id: 3,
    icon: <GoPackage color=" #3E90F0" size="2.25rem" />,
    title: "Introduction to Kubernetes",
    desc: "Learn the fundamentals of container orchestration with Kubernetes. Deploy and scale applications using pods, deployments, and services.",
  },
  {
    id: 4,
    icon: <GoPackage color=" #3E90F0" size="2.25rem" />,
    title: "Continuous Integration & Continuous Deployment (CI/CD)",
    desc: "Set up automated pipelines for building, testing, and deployment. Integrate CI/CD workflows into Docker and Kubernetes projects.",
  },
]