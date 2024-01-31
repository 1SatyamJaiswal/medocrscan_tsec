// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins"; 

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
