import type React from "react"
import type { Metadata } from "next"
import { Outfit, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { cn } from "@/lib/utils"
import { ScrollToTop } from "@/components/scroll-to-top"

// Heading font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

// Body font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Ariful Islam Shaon - Portfolio",
  description:
    "Professional portfolio of Ariful Islam Shaon, Accounts In-Charge with expertise in financial management and accounting software.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.variable, outfit.variable, "min-h-screen bg-background font-sans antialiased bg-black")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster position="top-right" />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
