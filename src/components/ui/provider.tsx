"use client"

import { 
  ChakraProvider, 
  // defaultSystem 
} from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import theme from "../../styles/theme"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={theme}>
      {/* value={defaultSystem} */}
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
