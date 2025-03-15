import { Box } from "@chakra-ui/react"
import Hero from "../components/hero"
import Training from "../components/training"
import Testimonials from "../components/testimonials"
import Faq from "../components/faq"
import Programme from "../components/programme"
import Footer from "../components/footer"
import Learning from "../components/learning"
import NavBar from "../components/header"

export default function LandingPage() {
  return (
    <Box>
      <NavBar />
      <Hero />
      <Training />
      <Learning />
      <Programme />
      <Testimonials />
      <Faq />
      <Footer />
    </Box>
  )
}
