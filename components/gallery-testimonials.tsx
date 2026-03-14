"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    src: "https://placehold.co/600x450?text=Red+sedan+car+after+professional+full+body+respray+with+deep+glossy+finish+in+garage",
    alt: "Rode sedan na professioneel volledig spuitwerk met diep glanzende lak",
    label: "Volledig spuitwerk",
  },
  {
    src: "https://placehold.co/600x450?text=Car+door+panel+dent+removal+and+paint+restoration+before+and+after+comparison",
    alt: "Portier paneelreparatie voor en na schadeherstel",
    label: "Deuk- en schadeherstel",
  },
  {
    src: "https://placehold.co/600x450?text=Silver+BMW+bumper+collision+repair+freshly+painted+and+polished+in+workshop",
    alt: "Zilveren BMW bumper na botsingsreparatie, gespoten en gepolijst",
    label: "Bumperherstel",
  },
  {
    src: "https://placehold.co/600x450?text=Black+luxury+car+hood+with+deep+scratch+professionally+repaired+and+color+matched",
    alt: "Zwarte motorkap met diepe kras professioneel hersteld en kleur bijgewerkt",
    label: "Krasreparatie",
  },
  {
    src: "https://placehold.co/600x450?text=White+car+rust+treatment+and+underbody+coating+applied+in+modern+workshop",
    alt: "Witte auto roestbehandeling en onderbody coating aangebracht",
    label: "Roestbehandeling",
  },
  {
    src: "https://placehold.co/600x450?text=Glossy+blue+sports+car+with+ceramic+coating+and+full+detail+finish+under+showroom+lighting",
    alt: "Glanzende blauwe sportwagen met keramische coating en volledige detailing",
    label: "Polijsten & Detailing",
  },
]

const testimonials = [
  {
    name: "Mohammed El Amrani",
    location: "Antwerpen",
    rating: 5,
    text: "Absolute topservice! Mijn auto had zware schade na een aanrijding en Garage Turkuaz heeft hem perfect hersteld. De kleur is exact gematcht en de afwerking is onberispelijk. Sterk aanbevolen!",
  },
  {
    name: "Katrien Vermeersch",
    location: "Gent",
    rating: 5,
    text: "Professioneel, snel en eerlijk. Ze hebben mijn auto op tijd teruggegeven en de prijs was precies zoals afgesproken. Het resultaat overtrof mijn verwachtingen. Ik kom zeker terug!",
  },
  {
    name: "Pieter De Smedt",
    location: "Brussel",
    rating: 5,
    text: "Na een hagelbui had mijn auto talloze deuken. Garage Turkuaz heeft alles hersteld zonder spoor. Geweldig vakmanschap en vriendelijk team. Echt een aanrader voor iedereen.",
  },
  {
    name: "Nadia Boukhari",
    location: "Leuven",
    rating: 5,
    text: "Uitstekende communicatie van begin tot einde. Ze legden alles duidelijk uit, werkten via mijn verzekering en leverden mijn auto af als nieuw. Vijf sterren zonder twijfel!",
  },
]

export default function GalleryTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0)

  const prev = () => setActiveIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setActiveIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const t = testimonials[activeIdx]

  return (
    <>
      {/* Gallery */}
      <section id="galerij" className="py-24 bg-[oklch(0.98_0.003_200)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="text-[oklch(0.55_0.16_195)] text-sm font-semibold tracking-widest uppercase mb-3">
              Ons werk
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.13_0.01_220)] leading-tight tracking-tight text-balance mb-4">
              Galerij
            </h2>
            <p className="text-[oklch(0.48_0.01_215)] text-lg leading-relaxed text-pretty">
              Bekijk een selectie van onze afgewerkte projecten. Elk voertuig vertelt
              een verhaal van herstel en vakmanschap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                className="group relative rounded-xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[oklch(0.13_0.01_220)]/0 group-hover:bg-[oklch(0.13_0.01_220)]/60 transition-all duration-300 flex items-end">
                  <span className="text-white font-semibold text-sm px-5 py-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[oklch(0.13_0.01_220)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[oklch(0.55_0.16_195)] text-sm font-semibold tracking-widest uppercase mb-3">
              Klantenervaringen
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
              Wat onze klanten zeggen
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Testimonial card */}
            <div className="bg-[oklch(0.18_0.01_218)] rounded-2xl p-10 relative">
              <div className="flex items-center gap-1 mb-5" aria-label={`${t.rating} van 5 sterren`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[oklch(0.55_0.16_195)] text-[oklch(0.55_0.16_195)]" />
                ))}
              </div>
              <blockquote className="text-white/80 text-lg leading-relaxed italic mb-8 text-pretty">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-[oklch(0.55_0.16_195)] text-sm">{t.location}</p>
              </div>

              {/* Teal quote accent */}
              <div className="absolute top-8 right-10 text-[oklch(0.55_0.16_195)]/20 text-[120px] font-serif leading-none select-none" aria-hidden="true">
                &ldquo;
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/20 hover:border-[oklch(0.55_0.16_195)] flex items-center justify-center text-white/60 hover:text-[oklch(0.55_0.16_195)] transition-colors"
                aria-label="Vorige getuigenis"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === activeIdx
                        ? "bg-[oklch(0.55_0.16_195)] w-6"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Ga naar getuigenis ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-white/20 hover:border-[oklch(0.55_0.16_195)] flex items-center justify-center text-white/60 hover:text-[oklch(0.55_0.16_195)] transition-colors"
                aria-label="Volgende getuigenis"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
