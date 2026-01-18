"use client"

import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const menuRef = useRef<HTMLDivElement>(null)

  const sections = ["home", "about", "experience", "projects", "contact"]

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      {isMobile ? (
        <div ref={menuRef} className="flex items-center justify-between rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg px-4 py-2">
          <span className="text-sm font-medium">Bishwo Sapkota</span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-9 h-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-9 h-9"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>

          {isMenuOpen && (
            <div className="absolute right-4 top-14 w-48 rounded-2xl bg-card border border-border shadow-lg overflow-hidden">
              {sections.map((section, index) => {
                const label = section.charAt(0).toUpperCase() + section.slice(1)
                const isFirst = index === 0
                const isLast = index === sections.length - 1
                return (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section)
                      setIsMenuOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      activeSection === section
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    } ${
                      isFirst ? "rounded-t-2xl" : ""
                    } ${
                      isLast ? "rounded-b-2xl" : ""
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg">
            {sections.map((section) => {
              const label = section.charAt(0).toUpperCase() + section.slice(1)
              return (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSection === section
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {label}
                </button>
              )
            })}
            <div className="w-px h-6 bg-border mx-2" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-9 h-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
