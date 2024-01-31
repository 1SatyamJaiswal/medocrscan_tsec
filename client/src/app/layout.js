import { fonts } from "./fonts";
import { Providers } from "./providers";
import "./globals.css";
import ChatBot from "@/components/ChatBot";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
      <body>
        <Providers>
          {children}
          <ChatBot />
        </Providers>
      </body>
    </html>
  );
}
