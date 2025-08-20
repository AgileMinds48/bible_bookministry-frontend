import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import FooterWrapper from "@/components/FooterWrapper";

export const metadata: Metadata = {
  title: "Book and Bible Ministry",
  description: "A library of Christian books",
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
      </body>
    
    </html>
  );
}
