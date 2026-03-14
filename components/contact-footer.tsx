"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefoon",
    value: "020 331 32 95",
    href: "tel:0203313295",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@garageturkuaz.nl",
    href: "mailto:info@garageturkuaz.nl",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Heining 31-A, 1047 AZ Amsterdam",
    href: "https://maps.google.com/?q=Heining+31-A,+1047AZ+Amsterdam",
  },
  {
    icon: Clock,
    label: "Openingsuren",
    value: "Ma–Vr: 09:00–18:00 | Za–Zo: Gesloten",
    href: null,
  },
]

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    dienst: "",
    bericht: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Contact section */}
      <section id="contact" className="py-24 bg-[oklch(0.98_0.003_200)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: info */}
            <div>
              <p className="text-[oklch(0.55_0.16_195)] text-sm font-semibold tracking-widest uppercase mb-3">
                Contacteer ons
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.13_0.01_220)] leading-tight tracking-tight text-balance mb-6">
                Neem contact op
              </h2>
              <p className="text-[oklch(0.48_0.01_215)] text-lg leading-relaxed mb-10 text-pretty">
                Heeft u schade aan uw voertuig of wilt u meer weten over onze
                diensten? Neem contact op voor een gratis en vrijblijvende
                beoordeling.
              </p>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-[oklch(0.88_0.008_200)] mb-10 shadow-sm">
                <iframe
                  title="Garage Turkuaz locatie"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.0!2d4.8797!3d52.4072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609b0b9b9b9b9%3A0x0!2sHeining+31-A%2C+1047+AZ+Amsterdam!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl&q=Heining+31-A,1047AZ+Amsterdam,Netherlands"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <ul className="flex flex-col gap-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[oklch(0.55_0.16_195)]/10 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-[oklch(0.55_0.16_195)]" />
                      </div>
                      <div>
                        <p className="text-[oklch(0.48_0.01_215)] text-xs uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[oklch(0.13_0.01_220)] font-medium hover:text-[oklch(0.55_0.16_195)] transition-colors"
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[oklch(0.13_0.01_220)] font-medium">{item.value}</p>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-2xl shadow-lg shadow-[oklch(0.13_0.01_220)]/8 p-8 border border-[oklch(0.88_0.008_200)]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.55_0.16_195)]/15 flex items-center justify-center">
                    <Send size={28} className="text-[oklch(0.55_0.16_195)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[oklch(0.13_0.01_220)]">
                    Bedankt!
                  </h3>
                  <p className="text-[oklch(0.48_0.01_215)] leading-relaxed max-w-sm">
                    Uw bericht is ontvangen. We nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <h3 className="text-xl font-bold text-[oklch(0.13_0.01_220)] mb-1">
                    Stuur ons een bericht
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="naam" className="text-sm font-medium text-[oklch(0.13_0.01_220)]">
                        Naam <span className="text-[oklch(0.55_0.16_195)]">*</span>
                      </label>
                      <input
                        id="naam"
                        name="naam"
                        type="text"
                        required
                        value={formData.naam}
                        onChange={handleChange}
                        placeholder="Uw volledige naam"
                        className="border border-[oklch(0.88_0.008_200)] rounded-lg px-4 py-3 text-sm text-[oklch(0.13_0.01_220)] placeholder-[oklch(0.48_0.01_215)]/60 focus:outline-none focus:border-[oklch(0.55_0.16_195)] focus:ring-2 focus:ring-[oklch(0.55_0.16_195)]/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-[oklch(0.13_0.01_220)]">
                        E-mail <span className="text-[oklch(0.55_0.16_195)]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="uw@email.nl"
                        className="border border-[oklch(0.88_0.008_200)] rounded-lg px-4 py-3 text-sm text-[oklch(0.13_0.01_220)] placeholder-[oklch(0.48_0.01_215)]/60 focus:outline-none focus:border-[oklch(0.55_0.16_195)] focus:ring-2 focus:ring-[oklch(0.55_0.16_195)]/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="telefoon" className="text-sm font-medium text-[oklch(0.13_0.01_220)]">
                      Telefoonnummer
                    </label>
                    <input
                      id="telefoon"
                      name="telefoon"
                      type="tel"
                      value={formData.telefoon}
                      onChange={handleChange}
                      placeholder="020 ..."
                      className="border border-[oklch(0.88_0.008_200)] rounded-lg px-4 py-3 text-sm text-[oklch(0.13_0.01_220)] placeholder-[oklch(0.48_0.01_215)]/60 focus:outline-none focus:border-[oklch(0.55_0.16_195)] focus:ring-2 focus:ring-[oklch(0.55_0.16_195)]/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="dienst" className="text-sm font-medium text-[oklch(0.13_0.01_220)]">
                      Gevraagde dienst
                    </label>
                    <select
                      id="dienst"
                      name="dienst"
                      value={formData.dienst}
                      onChange={handleChange}
                      className="border border-[oklch(0.88_0.008_200)] rounded-lg px-4 py-3 text-sm text-[oklch(0.13_0.01_220)] focus:outline-none focus:border-[oklch(0.55_0.16_195)] focus:ring-2 focus:ring-[oklch(0.55_0.16_195)]/20 transition-all bg-white"
                    >
                      <option value="">Selecteer een dienst</option>
                      <option value="spuitwerk">Spuitwerk</option>
                      <option value="schadeherstel">Schadeherstel</option>
                      <option value="reparatie">Autoreparatie</option>
                      <option value="taxatie">Taxatie voor Schadeverzekeraars</option>
                      <option value="vag">Codering VAG Groep</option>
                      <option value="onderdelen">Onderdelen & Montage</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="bericht" className="text-sm font-medium text-[oklch(0.13_0.01_220)]">
                      Bericht <span className="text-[oklch(0.55_0.16_195)]">*</span>
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      required
                      rows={4}
                      value={formData.bericht}
                      onChange={handleChange}
                      placeholder="Beschrijf de schade of uw vraag..."
                      className="border border-[oklch(0.88_0.008_200)] rounded-lg px-4 py-3 text-sm text-[oklch(0.13_0.01_220)] placeholder-[oklch(0.48_0.01_215)]/60 focus:outline-none focus:border-[oklch(0.55_0.16_195)] focus:ring-2 focus:ring-[oklch(0.55_0.16_195)]/20 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[oklch(0.55_0.16_195)] hover:bg-[oklch(0.48_0.16_195)] text-white font-semibold px-6 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[oklch(0.55_0.16_195)]/30 mt-1"
                  >
                    <Send size={16} />
                    Bericht verzenden
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.10_0.01_220)] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.16_195)] flex items-center justify-center font-bold text-white text-lg">
                  GT
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">
                    Garage <span className="text-[oklch(0.55_0.16_195)]">Turkuaz</span>
                  </p>
                  <p className="text-[oklch(0.72_0.12_192)] text-xs uppercase tracking-widest">
                    Carrosserie & Spuitwerk
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm text-pretty">
                Uw vakkundige partner voor professioneel spuitwerk, schadeherstel
                en autoreparaties. Kwaliteit met meer dan 15 jaar ervaring.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[oklch(0.55_0.16_195)] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[oklch(0.55_0.16_195)] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                Navigatie
              </h3>
              <ul className="flex flex-col gap-3">
                {["Home", "Diensten", "Over ons", "Galerij", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      onClick={(e) => {
                        e.preventDefault()
                        const id = link === "Home" ? "home" : link === "Over ons" ? "over-ons" : link.toLowerCase()
                        document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="text-white/50 hover:text-[oklch(0.55_0.16_195)] text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                Diensten
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Spuitwerk",
                  "Schadeherstel",
                  "Autoreparaties",
                  "Taxatie Schadeverzekeraars",
                  "Codering VAG Groep",
                  "Onderdelen & Montage",
                ].map((s) => (
                  <li key={s}>
                    <span className="text-white/50 text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} Garage Turkuaz. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                Privacybeleid
              </a>
              <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                Algemene voorwaarden
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
