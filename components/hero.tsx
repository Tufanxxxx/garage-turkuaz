"use client"

import { ChevronDown, Star } from "lucide-react"

export default function Hero() {
  const scrollToServices = () => {
    const el = document.querySelector("#diensten")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    const el = document.querySelector("#contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[oklch(0.13_0.01_220)]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://placehold.co/1920x1080/111827/111827"
          alt="Donkere achtergrond garage"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.13_0.01_220)]/60 via-[oklch(0.13_0.01_220)]/40 to-[oklch(0.13_0.01_220)]" />
      </div>

      {/* Teal accent line */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[oklch(0.55_0.16_195)]" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[oklch(0.55_0.16_195)]/20 border border-[oklch(0.55_0.16_195)]/40 text-[oklch(0.72_0.12_192)] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.55_0.16_195)]" />
            Uw vertrouwde carrosseriebedrijf
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight text-balance mb-6">
            Uw auto{" "}
            <span className="text-[oklch(0.55_0.16_195)]">perfect</span>{" "}
            hersteld
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-pretty">
            Garage Turkuaz is uw specialist voor professioneel spuitwerk,
            schadeherstel en volledige autoreparaties. Wij geven uw auto zijn
            originele glans terug — gegarandeerd kwaliteit.
          </p>

          {/* Star rating */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex items-center gap-0.5" aria-label="5 van 5 sterren beoordeling">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[oklch(0.55_0.16_195)] text-[oklch(0.55_0.16_195)]" />
              ))}
            </div>
            <span className="text-white/60 text-sm">
              Meer dan <strong className="text-white">500+</strong> tevreden klanten
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="bg-[oklch(0.55_0.16_195)] hover:bg-[oklch(0.48_0.16_195)] text-white font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200 hover:shadow-lg hover:shadow-[oklch(0.55_0.16_195)]/30"
            >
              Gratis offerte aanvragen
            </button>
            <button
              onClick={scrollToServices}
              className="border border-white/30 hover:border-[oklch(0.55_0.16_195)] text-white font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200 hover:bg-white/5"
            >
              Onze diensten
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-[oklch(0.55_0.16_195)] transition-colors animate-bounce"
          aria-label="Scroll naar beneden"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}
