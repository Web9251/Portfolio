"use client"

import { ThemeProvider } from "@/app/theme-provider"
import { ReactNode } from "react"

function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  )
}
export default Providers
