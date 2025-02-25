import { Box, Image } from "@chakra-ui/react"

// @ts-nocheck
export default function Logo(props: any) {
  return (
    <Box {...props}> 
      <Image src="/images/cloudi.png" alt="Logo" minH="3.25rem" width="3rem"/>
    </Box>
  )
}