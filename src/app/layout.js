import { Inter } from "next/font/google";
import "./globals.css";
import header from "@/component/header"
// import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: " created by Bulus iza next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header />
        {/* <Footer /> */}
        {children}
        </body>
    </html>
  );
}
