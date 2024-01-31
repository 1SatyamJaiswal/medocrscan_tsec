import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", });

const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["400", "700"],});

export const fonts = {
  inter, poppins,
};
