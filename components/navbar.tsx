"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Diensten", href: "#diensten" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Galerij", href: "#galerij" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.13_0.01_220)] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-3 group"
          aria-label="Garage Turkuaz - naar startpagina"
        >
          <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.16_195)] flex items-center justify-center font-bold text-white text-lg leading-none">
            GT
          </div>
          <div className="text-left">
            <p className="text-white font-bold text-lg leading-tight tracking-tight">
              Garage <span className="text-[oklch(0.55_0.16_195)]">Turkuaz</span>
            </p>
            <p className="text-[oklch(0.72_0.12_192)] text-xs leading-tight tracking-widest uppercase">
              Carrosserie & Spuitwerk
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Hoofdnavigatie">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white/80 hover:text-[oklch(0.72_0.12_192)] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[oklch(0.55_0.16_195)] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <a
            href="tel:0203313295"
            className="flex items-center gap-2 bg-[oklch(0.55_0.16_195)] hover:bg-[oklch(0.48_0.16_195)] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            <Phone size={15} />
            Bel ons
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[oklch(0.13_0.01_220)] border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobiele navigatie">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-[oklch(0.72_0.12_192)] text-base font-medium py-3 text-left border-b border-white/5 last:border-0 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0203313295"
              className="flex items-center gap-2 justify-center bg-[oklch(0.55_0.16_195)] text-white font-semibold px-5 py-3 rounded-lg mt-3 transition-colors hover:bg-[oklch(0.48_0.16_195)]"
            >
              <Phone size={16} />
              Bel ons nu
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
