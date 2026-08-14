import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Psychotherapie Roehl",
  description:
    "Private Praxis für psychologische Psychotherapie mit dem Schwerpunkt auf Psychoonkologie und Trauma",
  other: {
    "color-scheme": "light dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${lora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
