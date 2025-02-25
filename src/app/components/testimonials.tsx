import { Box, Flex, Text, Card, HStack, Stack } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export default function Testimonials() {
  return (
    <Box minH="625px" color={{base: "#FFFFFF", _dark: "#000000"}} mt="5rem">
      <Flex minH="465px" gap="72px" flexDirection="column">
        <Flex flexDirection={{base: "column", lg: "row"}} maxW="1280px" minH="100px" gap={{base: "4rem", lg: "34.313rem"}} ml={{base: "auto", md: "80px"}}>
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
        </Flex>
        <Flex flexDirection={{base: "column", md: "row"}} maxW="1320px" minH="293px" gap="1rem" flexWrap="wrap" mx="auto">
          {customCard.map((item: any) => {
            return (
              <TestimonialCard key={item.id} {...item} />
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}

export const TestimonialCard = ({image, name, desc}: {image: string; name: string; desc: string}) => {
  return (
    <Card.Root maxW="26.5rem" minH="18.313rem" borderRadius="24px" bg="#005EDF">
      <Card.Body maxW="21.5rem" minH="13.75rem" gap="1rem" py="2.5rem" px="2.063rem">
        <HStack maxW="12.375rem" minH="48px" gap="0.75rem">
          <Avatar
            src={image}
            name="Testimonial image"
            w="3rem"
            h="3rem"
          />
          <Stack gap="0" maxW="8.625rem" minH="24px">
            <Text fontWeight="500" fontSize="1rem" lineHeight="1.5rem" color="#FEFEFE">{name}</Text>
          </Stack>
        </HStack>
        <Card.Description fontWeight="400" fontSize="1.125rem" lineHeight="1.625rem" color="#FEFEFE">{desc}</Card.Description>
      </Card.Body>
    </Card.Root>
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
]