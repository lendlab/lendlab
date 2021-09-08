import { extendTheme } from "@chakra-ui/react";
import { darken, mode, whiten } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  colors: {
    lendlab: {
      gray: {
        100: "#F9F9F9",
        200: "#EAEAEC",
        300: "#b7bdc3",
        input: "#F3F3F5",
      },
      black: {
        100: "#292D32s",
        200: "#000000",
        heading: "#2c3e50",
      },
      white: "#FFFFFF",
      blue: "#1a5cff",
      green: {
        100: "#D9FFD5",
        200: "#031102",
      },
      red: {
        100: "#FFD5D5",
        200: "#EB1D1D",
      },
    },
  },
  fonts: {
    heading: "Basement Grotesque",
    body: "Poppins",
  },
  styles: {
    global: {
      "::-webkit-scrollbar-thumb": {
        border: "4px solid rgba(0, 0, 0, 0)",
        backgroundClip: "padding-box",
        borderRadius: 9999,
        backgroundColor: "lendlab.gray.300",
      },
      "::-webkit-scrollbar": {
        width: "14px",
      },
    },
  },
  sizes: {
    nav: "4.25rem",
  },
  shadows: {
    button: "1px 4px 40px 6px rgba(26,92,255,0.19)",
  },
  components: {
    Button: {
      variants: {
        primary: (props) => ({
          bg: "lendlab.blue",
          color: "lendlab.white",
          borderRadius: 17,
          fontSize: 12,
          fontWeight: "400",
          cursor: "pointer",
          boxShadow: "button",
          _hover: {
            bg: mode(whiten("lendlab.blue", 20), darken("lendlab.blue", 20))(props),
          },
        }),
      },
    },
  },
});

export default theme;
