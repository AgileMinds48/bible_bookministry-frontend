import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer";




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
      <Header/>
        {children}
        <Footer />
      </body>
    
    </html>
  );
}
