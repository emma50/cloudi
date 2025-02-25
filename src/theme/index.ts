import { defineConfig, createSystem } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "html, body": {
      fontFamily: "Inter, sans-serif",
    },
  },
})

export default createSystem(config)