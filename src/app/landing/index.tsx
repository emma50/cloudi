import { Box } from "@chakra-ui/react"
import Header from "../components/header"
// import Footer from "../components/footer"
import Hero from "../components/hero"
import Training from "../components/training"
import Instructor from "../components/instructor"
import Testimonials from "../components/testimonials"
import Faq from "../components/faq"
import Programme from "../components/programme"
import Footer from "../components/footer"
import Learning from "../components/learning"
// import Faq from "../components/faq"

export default function LandingPage() {
  return (
    <Box>
      <Header />
      <Hero />
      <Training />
      <Learning />
      <Programme />
      <Instructor />
      <Testimonials />
      <Faq />
      <Footer />
    </Box>
  )
}
