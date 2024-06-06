import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    purple: {
      700: "#7E57C2",
      300: "#C0ACE2",
    },
    blue: {
      200: "#1345F8",
      100: "#3B5998",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    28: 100,
  },
});
