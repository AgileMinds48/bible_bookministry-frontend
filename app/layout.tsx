import type { Metadata } from "next";
import "./globals.css";
import FooterWrapper from "@/components/Footer/FooterWrapper";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import {Poppins} from "next/font/google"
export const metadata: Metadata = {
  title: "Book and Bible Ministry",
  description: "Bible and Book ministry is an online book store that deal with selling the best Christian Literature or Christian Books",
  icons: {
    icon:"/logo.png"
  }
};
const poppins = Poppins({
  subsets: ["latin"],
  weight:["400"]
})

export default function RootLayout({  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={` antialiased ${poppins.className}`}
      >
     
        {children}
        <FooterWrapper />
        <Analytics />
        <SpeedInsights/>
      </body>
    
    </html>
  );
}
