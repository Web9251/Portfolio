"use client"

import { ThemeProvider } from "@/app/theme-provider"
import { ReactNode } from "react"
import { Toaster } from "sonner"

function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />

        {children}
      </ThemeProvider>
    </>
  )
}
export default Providers
