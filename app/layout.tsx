import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Providers from "./Providers"
import Container from "@/components/home/Container"
import Navbar from "@/components/navbar/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ibrahim Kemal — Full-stack Developer",

  description:
    "Full-stack developer specializing in React, Next.js, and Node.js. Building fast, accessible, and delightful web products.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable} min-h-full flex flex-col`}>
        <Providers>
          <Container>
            <Navbar />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}
