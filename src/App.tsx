import { Box } from '@chakra-ui/react'
import './App.css'
import LandingPage from './app/landing'

function App() {
  return (
    <Box bg={{ base: "#FFFFFF", _dark: "#000000" }} maxWidth="1440px" margin="0 auto" textAlign="center">
      {/* px="2rem" */}
      <LandingPage />
    </Box>
  )
}

export default App
