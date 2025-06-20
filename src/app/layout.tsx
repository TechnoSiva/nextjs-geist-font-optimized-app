import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "IR Unreserved Ticketing",
  description: "Indian Railways Unreserved Ticketing System",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans bg-[#f0f0f0]`}>
        {children}
      </body>
    </html>
  )
}