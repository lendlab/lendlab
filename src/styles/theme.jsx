import { extendTheme } from "@chakra-ui/react";
import { mode, transparentize } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    lendlab: {
      blue: {
        100: "#D3E5FF",
        200: "#3291FF",
        300: "#0070F3",
        400: "#0761D1",
      },
      light: {
        black: {
          100: "#FFF",
          200: "#FAFAFA",
          300: "#EAEAEA",
          400: "#999",
          500: "#888",
          600: "#666",
          700: "#444",
          800: "#333",
          900: "#111",
          1000: "#000",
        },
        red: {
          100: "#F7D4D6",
          200: "#FF1A1A",
          300: "#E00",
          400: "#C50000",
        },
      },
      dark: {
        black: {
          100: "#000",
          200: "#111",
          300: "#333",
          400: "#444",
          500: "#666",
          600: "#888",
          700: "#999",
          800: "#EAEAEA",
          900: "#FAFAFA",
          1000: "#FFF",
        },
        red: {
          100: "#F7D4D6",
          200: "#F33",
          300: "RED",
          400: "#E60000",
        },
      },
      yellow: "#FFF500",
    },
  },
  fonts: {
    body: `Archivo,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: "Manrope",
  },
  styles: {
    global: (props) => ({
      "html, body, #root": {
        height: "100%",
        lineHeight: "base",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      },

      body: {
        bg: mode("lendlab.light.black.100", "lendlab.dark.black.100")(props),
      },
    }),
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    extraBold: 800,
  },
  fontSizes: {
    1: "6px",
    2: "12px",
    3: "14px",
    body: "16px",
    5: "18px",
    6: "20px",
    7: "36px",
    8: "46px",
    9: "56px",
    10: "66px",
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
          outline: "1px solid #999",
        },
        _active: {
          bg: "lendlab.light.black.300",
        },
      },
      variants: {
        primary: (props) => ({
          bg: "lendlab.blue.300",
          color: "white",
          fontWeight: "medium",
          borderWidth: 1,
          borderColor: "lendlab.blue.300",
          _hover: {
            bg: "transparent",
            color: "lendlab.blue.300",
          },
        }),
        secondary: (props) => ({
          color: mode("lendlab.light.black.600", "lendlab.dark.black.800")(props),
          fontWeight: "medium",
          borderWidth: 1,
          borderColor: mode("lendlab.light.black.300", "lendlab.dark.black.600")(props),
          _hover: {
            borderColor: mode("lendlab.light.black.1000", "lendlab.dark.black.1000")(props),
          },
        }),
        ghost: {
          _hover: {
            bg: "transparent",
          },
        },
      },
    },
    Text: {
      baseStyle: (props) => ({
        fontSize: "body",
        color: mode("lendlab.light.black.600", "lendlab.dark.black.600")(props),
      }),
      variants: {
        bold: (props) => ({
          fontWeight: "bold",
          color: mode("lendlab.light.black.1000", "lendlab.dark.black.1000")(props),
        }),
      },
    },
    Heading: {
      baseStyle: (props) => ({
        fontWeight: "extraBold",
        letterSpacing: "tighter",
        color: mode("lendlab.light.black.1000", "lendlab.dark.black.1000")(props),
      }),
    },
    Drawer: {
      baseStyle: (props) => ({
        overlay: {
          bg: mode("blackAlpha.300", "blackAlpha.600")(props),
        },

        dialog: {
          borderLeftWidth: mode(undefined, 1)(props),
          borderLeftColor: mode(undefined, "lendlab.dark.black.300")(props),
          shadow: "none",
          bg: mode("lendlab.light.black.100", "lendlab.dark.black.100")(props),
        },
        footer: {
          display: "flex",
          flexDirection: "column",
          w: "full",
          alignItems: "stretch",
        },
        closeButton: {
          color: "lendlab.light.black.600",
          _focus: {
            boxShadow: "none",
            outline: "1px solid #999",
          },
        },
      }),
      variants: {
        alwaysOpen: {
          parts: ["dialog, dialogContainer"],
          dialog: {
            pointerEvents: "auto",
          },
          dialogContainer: {
            pointerEvents: "none",
          },
        },
      },
    },
    Badge: {
      variants: {
        solid: (props) => ({
          bg: mode("lendlab.light.black.100", "lendlab.dark.black.100")(props),
          color: mode("lendlab.light.black.1000", "lendlab.dark.black.1000")(props),
          border: "1px solid",
          borderColor: mode("lendlab.light.black.300", "lendlab.dark.black.600")(props),
          px: "2",
        }),
      },
    },
    Container: {
      variants: {
        landing: {
          maxW: "5xl",
          w: "full",
          py: { base: 20, md: 28 },
        },
        normal: { maxW: "5xl", w: "full" },
      },
    },
    Tabs: {
      baseStyle: (props) => ({
        tab: {
          fontSize: "body",
          _focus: {
            boxShadow: "none",
            outline: "none",
          },
          color: mode("lendlab.light.black.600", "lendlab.dark.black.600")(props),
        },
      }),
      variants: {
        line: {
          tablist: {
            borderBottom: "1px solid",
            borderColor: "lendlab.light.black.300",
          },
          tab: {
            _selected: {
              borderColor: "lendlab.blue.300",
              color: "lendlab.blue.300",
            },
          },
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            bg: "white",
            _focus: {
              shadow: "none",
              borderColor: "lendlab.blue.300",
            },
            _placeholder: {
              color: "lendlab.light.black.400",
            },
          },
        },
      },
    },
    Table: {
      variants: {
        simple: {
          table: {
            bg: "white",
            border: "1px solid",
            borderColor: "lendlab.light.black.300",
          },
          th: {
            color: "lendlab.light.black.600",
          },
        },
      },
    },
    Modal: {
      baseStyle: (props) => ({
        overlay: {
          bg: mode("blackAlpha.300", "blackAlpha.600")(props),
        },
        header: {
          textAlign: "center",
          fontSize: "6",
        },
        footer: {
          bg: mode("lendlab.light.black.100", "lendlab.dark.black.100")(props),
          borderTopWidth: "1px",
          borderColor: mode("lendlab.light.black.300", "lendlab.dark.black.600"),
          borderBottomRadius: "md",
        },

        dialog: {
          boxShadow: "none",
          borderBottomRadius: "md",
        },
        closeButton: {
          color: "lendlab.light.black.600",
          _focus: {
            boxShadow: "none",
            outline: "1px solid #999",
          },
        },
      }),
    },
    Menu: {
      baseStyle: (props) => ({
        list: {
          borderWidth: "1px",
          borderColor: mode("lendlab.light.black.300", "lendlab.dark.black.600"),
          boxShadow: "none",
        },
        item: {
          _hover: {
            bg: mode("lendlab.light.black.300", "lendlab.dark.black.300")(props),
          },
        },
      }),
    },
  },
});

export default theme;
