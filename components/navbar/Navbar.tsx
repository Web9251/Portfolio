"use client"

import { ModeToggle } from "@/components/navbar/ModeToggle"

import { cn } from "@/lib/utils"
import { useCallback, useEffect, useState } from "react"
import NavMenu from "./NavMenu"
import NavDropdownMenu from "./NavDropdownMenu"

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [hash, setHash] = useState("")

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50)
  }, [])

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    //
    const onSelect = () => {
      setHash(window.location.hash)
    }
    onSelect()

    const onHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener("hashchange", onHashChange)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [handleScroll, handleResize])

  return (
    <div className='sticky top-0 z-50'>
      <header>
        <div className='max-w-7xl mx-auto w-full px-4 py-4 sm:px-6'>
          <nav
            className={cn(
              "w-full flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
              sticky
                ? "p-2.5 bg-background/60 backdrop-blur-lg border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
                : "bg-transparent border-transparent",
            )}
          >
            <a href='#'>{/* <Logo /> */}</a>
            <NavMenu hash={hash} />
            <div className='flex gap-2 justify-center items-center'>
              <ModeToggle />
              <div className='lg:hidden'>
                <NavDropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
