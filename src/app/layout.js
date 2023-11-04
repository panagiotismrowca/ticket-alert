import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} class="h-full" style={{ backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/01/41/72/63/1000_F_141726387_BGpKIy0umqpj6AlpieHKHn2pFaFCltXn.jpg')` }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
