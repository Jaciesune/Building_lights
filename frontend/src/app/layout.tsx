import { ModeToggle } from "@/components/mode-theme"
import { AuthProvider } from "@/components/providers/auth-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import "tailwindcss/tailwind.css"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Oświecenie",
  description: "Oświecenie to aplikacja do zarządzania oświetleniem.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pl"
      suppressHydrationWarning
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AuthProvider>
          <body>
            <ModeToggle />

            {children}
          </body>
        </AuthProvider>
      </ThemeProvider>
    </html>
  )
}
