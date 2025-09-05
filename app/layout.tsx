import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AppsClub",
  description: "Official website of AppsClub ENSA Agadir - Leading technology and innovation in software development",
  icons: {
    icon: '/images/apps white.png',
    shortcut: '/images/apps white.png',
    apple: '/images/apps white.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
