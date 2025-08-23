import type { Metadata } from "next";
import "./globals.css";
import FooterWrapper from "@/components/FooterWrapper";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata: Metadata = {
  title: "Book and Bible Ministry",
  description: "Bible and Book ministry is an online book store that deal with selling the best Christian Literature or Christian Books",
  icons: {
    icon:"/logo.png"
  }
};


export default function RootLayout({  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={` antialiased `}
      >
     
        {children}
        <FooterWrapper />
        <Analytics />
        <SpeedInsights/>
      </body>
    
    </html>
  );
}
