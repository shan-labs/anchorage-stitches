import React, { type ReactNode } from "react"
import { ThemeProvider } from "components/theme-provider"

import "./globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-orange-200 dark:bg-blue-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
