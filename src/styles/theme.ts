import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    // breakpoints: {
    //   tablet: "992px",
    //   desktop: "1200px",
    //   wide: "1400px",
    // },
    breakpoints: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      // desktop: "1200px",
      xl: "1281px",
      "2xl": "1536px",
    },
  },
  globalCss: {
    "html, body": {
      fontFamily: "Inter, sans-serif",
    },
  },
})

export default createSystem(defaultConfig, config)