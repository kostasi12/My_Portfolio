import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

//export const metadata: Metadata = {
//  title: "Portfolio",
//  description: "Portfolio",
//};

 {/*  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
} */}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased selection:bg-blue-500/30`}>
        {/* Προσθέτουμε ένα wrapper div με σταθερό rendering */}
        <div className="relative tracking-tight">
          {children}
        </div>
      </body>
    </html>
  );
}