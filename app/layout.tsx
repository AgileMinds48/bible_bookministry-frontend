import type { Metadata } from "next";
import "./globals.css";
import FooterWrapper from "@/components/Footer/FooterWrapper";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import {Poppins} from "next/font/google"
export const metadata: Metadata = {
  title: "Book and Bible Ministry, Ghana",
  description: "Shop Christian books, Bibles, devotionals, and literature online in Ghana. Discover top Christian authors, faith resources, and Bible study materials at Book and Bible Ministry.",
  icons: {
    icon: "/logo.png"
  }
};
const poppins = Poppins({
  subsets: ["latin"],
  weight:["400","600","700"]
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
