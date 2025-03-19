import { Box, Flex, Text, IconButton } from "@chakra-ui/react"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { useSpring } from '@react-spring/web';
import { Animated } from "@/externals";
import { useInView, InView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { useState, useRef } from "react";

export default function Testimonials() {
  const swiperRef = useRef(null);

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
    <Box ref={ref} minH="425px" color={{base: "#FFFFFF", _dark: "#000000"}} mt="1rem" id="testimonials">
      <Flex minH="475px" gap="1.5rem" flexDirection="column">
        {/* gap="72px" */}
        <Animated.Flex style={textStyles} flexDirection={{base: "column", lg: "row"}} maxW="1280px" minH="100px" gap={{base: "4rem", lg: "24rem", xl: "34.313rem"}} mx={{base: "auto", md: "80px"}}>
          {/* ml={{base: "auto", md: "80px"}} */}
          <Flex maxW="587px" minH="100px" gap="16px" flexDirection="column">
            <Text maxW="536px" minH="60px" fontWeight="700" fontSize="3.5rem" lineHeight="60px" color={{base: "#061C3D", _dark: "#005EDF"}} textAlign="start">Success Stories</Text>
            <Text maxW="587px" minH="24px" fontWeight="400" fontSize="20px" lineHeight="24.2px" color={{base: "#061C3D", _dark: "#FEFEFE"}} textAlign="start">What our students are saying about their learning experience.</Text>
          </Flex>
          <CustomSwiperNavigation swiperRef={swiperRef} />
        </Animated.Flex>
        <CustomSlider swiperRef={swiperRef} />
      </Flex>
    </Box>
  )
}

const CustomSwiperNavigation = ({swiperRef}: {swiperRef: any}) => {
  return (
    <Box display="flex" maxW="144px" minH="64px" gap="16px" position="relative">
      {/* width="100%" */}
      <IconButton
        aria-label="Previous"
        onClick={() => swiperRef.current?.slidePrev()}
        w="48px" 
        h="48px" 
        borderRadius="60px" 
        p="16px" 
        gap="10px" 
        bg="#F0F5FF"
      >
        <IoIosArrowRoundBack size="32px" color="#333333"/>
      </IconButton>
      <IconButton
        aria-label="Next"
        onClick={() => swiperRef.current?.slideNext()}
        w="48px" 
        h="48px" 
        borderRadius="60px" 
        p="16px" 
        gap="10px" 
        bg="#333333"
      >
        <IoIosArrowRoundForward size="32px" color="#F0F5FF"/>
      </IconButton>
    </Box>
  )
}

const CustomSlider = ({swiperRef}: {swiperRef: any}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      onSwiper={(swiper) => (swiperRef.current = swiper)} // Attach Swiper instance to ref
      spaceBetween={20}
      // freeMode={true}
      keyboard={{
        enabled: true,
      }}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className="swiper"
    >
      {customCard.map((card, index) => {
        return (
          <SwiperSlide key={card.id}>
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <Box ref={ref} display="flex" justifyContent="center" bg={{base: "#005EDF", _dark: "#141718"}} minH="440px">
                  <AnimatedItems item={card} inView={inView && index === activeIndex} />
                </Box>
              )}
              {/* <Box ref={ref}>
                <AnimatedItems item={card} inView={inView && index === activeIndex} />
              </Box> */}
            </InView>
          </SwiperSlide>
        )
      })}
    </Swiper>
 )
}

const AnimatedItems = ({ item, inView }: {item: any; inView: any}) => {
  // Use `useTrail` to animate an array of items
  const style = useSpring({
    triggerOnce: false, // Trigger every time the element comes into view
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.5)',
    config: { mass: 1, tension: 200, friction: 20, duration: 500 },
    delay: inView ? 200 : 0,
  });

  return (
    <Flex w={{base: "100%", lg: "90%"}}>
      <Animated.Flex style={style} flexDirection="column" alignItems="center" justifyContent="center" gap="1rem" maxW="100%" minH="16.313rem" mx="auto">
        {/* bg="#005EDF" */}
        <Text maxW="90%" fontWeight="400" fontSize="1.5rem" lineHeight="150%" textAlign='center' color="#FEFEFE">{item.desc}</Text>
        <Text fontWeight="500" fontSize="1.25rem" lineHeight="1.5rem" textAlign="center" color={{base: "#FEFEFE", _dark: "#005EDF" }}>{item.name}</Text>
      </Animated.Flex> 
    </Flex>
  );
};

const customCard = [
  {
    id: 1,
    name: "Tobi Oderinde",
    desc: "Taking this DevOps class was a game changer for me. The curriculum was well-structured, covering essential tools like Docker, terraform, CI/CD, and cloud platforms. The hands-on labs and real world projects helped solidify my understanding, making complex concepts easy to grasp. The instructors were knowledgeable and always available to assist. The job oriented approach, including resume guidance and mock interviews, played a huge role in my success. Within weeks of completing the course, I landed a DevOps job! I highly recommend this class to anyone looking to break into the field. it’s an investment that truly pays off. Thank you.",
  },
  {
    id: 2,
    name: "Ayomide Aiyegbusi",
    desc: "The DevOps class was insightful and well-structured. The hands-on labs and real-world examples helped me grasp essential tools like Linux, Terraform, Kubernetes, and CI/CD pipelines. I am confident in my ability to effectively and efficiently apply them to DevOps practices in real-world scenarios.",
  },
]
