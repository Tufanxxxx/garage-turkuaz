"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { Calculator, ChevronRight, RotateCcw, Phone, CheckCircle2, ArrowLeft } from "lucide-react"

type Step = 1 | 2 | 3 | 4

const carTypes = [
  { id: "kleine_auto", label: "Kleine auto", sub: "Bijv. Polo, Yaris, Fiesta", factor: 1.0 },
  { id: "middenklasse", label: "Middenklasse", sub: "Bijv. Golf, Focus, Astra", factor: 1.2 },
  { id: "suv", label: "SUV / Crossover", sub: "Bijv. Tiguan, Qashqai, RAV4", factor: 1.4 },
  { id: "grote_auto", label: "Grote auto / Luxe", sub: "Bijv. BMW 5, Audi A6, Mercedes E", factor: 1.6 },
  { id: "bus", label: "Bestelwagen / Bus", sub: "Bijv. Transit, Sprinter, Crafter", factor: 1.8 },
]

const damageParts = [
  { id: "voorbumper", label: "Voorbumper", basePrice: 350 },
  { id: "achterbumper", label: "Achterbumper", basePrice: 300 },
  { id: "motorkap", label: "Motorkap", basePrice: 450 },
  { id: "kofferdeksel", label: "Kofferdeksel", basePrice: 400 },
  { id: "linkerdeur_voor", label: "Linkerdeur voor", basePrice: 500 },
  { id: "rechterdeur_voor", label: "Rechterdeur voor", basePrice: 500 },
  { id: "linkerdeur_achter", label: "Linkerdeur achter", basePrice: 480 },
  { id: "rechterdeur_achter", label: "Rechterdeur achter", basePrice: 480 },
  { id: "linker_voorscherm", label: "Linker voorscherm", basePrice: 420 },
  { id: "rechter_voorscherm", label: "Rechter voorscherm", basePrice: 420 },
  { id: "linker_achterscherm", label: "Linker achterscherm", basePrice: 460 },
  { id: "rechter_achterscherm", label: "Rechter achterscherm", basePrice: 460 },
  { id: "dak", label: "Dak", basePrice: 600 },
  { id: "dorpel", label: "Dorpel (links of rechts)", basePrice: 280 },
]

const damageTypes = [
  { id: "kleine_deuk", label: "Kleine deuk / kras", multiplier: 0.5, description: "Oppervlakkige schade, geen vervorming" },
  { id: "deuk_lak", label: "Deuk met lakschade", multiplier: 0.8, description: "Zichtbare deuk met beschadigde lak" },
  { id: "grote_deuk", label: "Grote deuk / vervorming", multiplier: 1.2, description: "Diepe vervorming van het plaatwerk" },
  { id: "volledig_spuitwerk", label: "Volledig spuitwerk", multiplier: 1.0, description: "Volledige kleurbehandeling van onderdeel" },
  { id: "roest", label: "Roest / corrosie", multiplier: 1.4, description: "Roestvorming met behandeling nodig" },
]

export default function CalculatorPage() {
  const [step, setStep] = useState<Step>(1)
  const [selectedCar, setSelectedCar] = useState<string>("")
  const [selectedParts, setSelectedParts] = useState<string[]>([])
  const [selectedDamage, setSelectedDamage] = useState<string>("")
  const [naam, setNaam] = useState("")
  const [telefoon, setTelefoon] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const carType = carTypes.find((c) => c.id === selectedCar)
  const damageType = damageTypes.find((d) => d.id === selectedDamage)

  const calculateTotal = () => {
    if (!carType || !damageType || selectedParts.length === 0) return { min: 0, max: 0 }
    const base = selectedParts.reduce((sum, partId) => {
      const part = damageParts.find((p) => p.id === partId)
      return sum + (part?.basePrice || 0)
    }, 0)
    const price = base * carType.factor * damageType.multiplier
    return {
      min: Math.round(price * 0.85),
      max: Math.round(price * 1.15),
    }
  }

  const togglePart = (id: string) => {
    setSelectedParts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  const reset = () => {
    setStep(1)
    setSelectedCar("")
    setSelectedParts([])
    setSelectedDamage("")
    setNaam("")
    setTelefoon("")
    setSubmitted(false)
  }

  const { min, max } = calculateTotal()

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.003_200)]">
      <Navbar />

      {/* Header */}
      <section className="bg-[oklch(0.13_0.01_220)] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Terug naar home
          </Link>
          <div className="inline-flex items-center gap-2 bg-[oklch(0.55_0.16_195)]/20 text-[oklch(0.72_0.12_192)] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Calculator size={14} />
            Schadecalculator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Bereken uw <span className="text-[oklch(0.72_0.12_192)]">schatting</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Vul de stappen in voor een vrijblijvende prijsindicatie. De definitieve prijs wordt bepaald na inspectie.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-[oklch(0.18_0.01_218)] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            {([1, 2, 3, 4] as Step[]).map((s, i) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${step >= s ? "bg-[oklch(0.55_0.16_195)] text-white" : "bg-white/10 text-white/40"}`}>
                  {s}
                </div>
                <span className={`text-sm hidden sm:block transition-colors ${step >= s ? "text-white" : "text-white/30"}`}>
                  {["Voertuig", "Schadeonderdelen", "Schadeomvang", "Resultaat"][i]}
                </span>
                {i < 3 && <div className={`h-0.5 flex-1 rounded transition-colors ${step > s ? "bg-[oklch(0.55_0.16_195)]" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* STAP 1 — Voertuigtype */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-[oklch(0.13_0.01_220)] mb-2">Stap 1 — Selecteer uw voertuigtype</h2>
            <p className="text-[oklch(0.48_0.01_215)] mb-8">Het type voertuig bepaalt de basisprijs van de reparatie.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {carTypes.map((car) => (
                <button
                  key={car.id}
                  onClick={() => setSelectedCar(car.id)}
                  className={`text-left p-5 rounded-xl border-2 transition-all duration-200 ${selectedCar === car.id ? "border-[oklch(0.55_0.16_195)] bg-[oklch(0.55_0.16_195)]/5" : "border-[oklch(0.88_0.008_200)] bg-white hover:border-[oklch(0.55_0.16_195)]/40"}`}
                >
                  <p className={`font-semibold text-base ${selectedCar === car.id ? "text-[oklch(0.55_0.16_195)]" : "text-[oklch(0.13_0.01_220)]"}`}>{car.label}</p>
                  <p className="text-sm text-[oklch(0.48_0.01_215)] mt-1">{car.sub}</p>
                </button>
              ))}
            </div>
            <button
              disabled={!selectedCar}
              onClick={() => setStep(2)}
              className="flex items-center gap-2 bg-[oklch(0.55_0.16_195)] hover:bg-[oklch(0.48_0.16_195)] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Volgende stap <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* STAP 2 — Schadeonderdelen */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-[oklch(0.13_0.01_220)] mb-2">Stap 2 — Selecteer beschadigde onderdelen</h2>
            <p className="text-[oklch(0.48_0.01_215)] mb-8">U kunt meerdere onderdelen selecteren.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {damageParts.map((part) => (
                <button
                  key={part.id}
                  onClick={() => togglePart(part.id)}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 ${selectedParts.includes(part.id) ? "border-[oklch(0.55_0.16_195)] bg-[oklch(0.55_0.16_195)]/5" : "border-[oklch(0.88_0.008_200)] bg-white hover:border-[oklch(0.55_0.16_195)]/40"}`}
                >
                  <div className={`w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center transition-colors ${selectedParts.includes(part.id) ? "bg-[oklch(0.55_0.16_195)] border-[oklch(0.55_0.16_195)]" : "border-[oklch(0.88_0.008_200)]"}`}>
                    {selectedParts.includes(part.id) && <CheckCircle2 size={12} className="text-white" />}
                  </div>
                  <span className={`text-sm font-medium ${selectedParts.includes(part.id) ? "text-[oklch(0.55_0.16_195)]" : "text-[oklch(0.13_0.01_220)]"}`}>{part.label}</span>
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => setStep(1)} className="px-6 py-4 rounded-xl border-2 border-[oklch(0.88_0.008_200)] text-[oklch(0.48_0.01_215)] font-semibold hover:border-[oklch(0.55_0.16_195)]/40 transition-all">
                Terug
              </button>
              <button
                disabled={selectedParts.length === 0}
                onClick={() => setStep(3)}
                className="flex items-center gap-2 bg-[oklch(0.55_0.16_195)] hover:bg-[oklch(0.48_0.16_195)] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Volgende stap <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STAP 3 — Schadeomvang */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-[oklch(0.13_0.01_220)] mb-2">Stap 3 — Wat is de omvang van de schade?</h2>
            <p className="text-[oklch(0.48_0.01_215)] mb-8">Selecteer het type schade dat het beste uw situatie beschrijft.</p>
            <div className="flex flex-col gap-4 mb-8">
              {damageTypes.map((dt) => (
                <button
                  key={dt.id}
                  onClick={() => setSelectedDamage(dt.id)}
                  className={`text-left p-5 rounded-xl border-2 transition-all duration-200 ${selectedDamage === dt.id ? "border-[oklch(0.55_0.16_195)] bg-[oklch(0.55_0.16_195)]/5" : "border-[oklch(0.88_0.008_200)] bg-white hover:border-[oklch(0.55_0.16_195)]/40"}`}
                >
                  <p className={`font-semibold ${selectedDamage === dt.id ? "text-[oklch(0.55_0.16_195)]" : "text-[oklch(0.13_0.01_220)]"}`}>{dt.label}</p>
                  <p className="text-sm text-[oklch(0.48_0.01_215)] mt-1">{dt.description}</p>
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => setStep(2)} className="px-6 py-4 rounded-xl border-2 border-[oklch(0.88_0.008_200)] text-[oklch(0.48_0.01_215)] font-semibold hover:border-[oklch(0.55_0.16_195)]/40 transition-all">
                Terug
              </button>
              <button
                disabled={!selectedDamage}
                onClick={() => setStep(4)}
                className="flex items-center gap-2 bg-[oklch(0.55_0.16_195)] hover:bg-[oklch(0.48_0.16_195)] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Bereken prijs <Calculator size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STAP 4 — Resultaat */}
        {step === 4 && !submitted && (
          <div>
            <h2 className="text-2xl font-bold text-[oklch(0.13_0.01_220)] mb-2">Uw prijsindicatie</h2>
            <p className="text-[oklch(0.48_0.01_215)] mb-8">Dit is een vrijblijvende schatting. De definitieve prijs wordt bepaald na inspectie.</p>

            {/* Prijs box */}
            <div className="bg-[oklch(0.13_0.01_220)] rounded-2xl p-8 mb-8 text-center">
              <p className="text-white/60 text-sm uppercase tracking-widest mb-3">Geschatte reparatiekosten</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-4xl md:text-6xl font-bold text-white">€{min.toLocaleString("nl-NL")}</span>
                <span className="text-white/40 text-2xl">—</span>
                <span className="text-4xl md:text-6xl font-bold text-[oklch(0.72_0.12_192)]">€{max.toLocaleString("nl-NL")}</span>
              </div>
              <p className="text-white/40 text-sm mt-4">* Exclusief BTW | Indicatieve prijs</p>
            </div>

            {/* Samenvatting */}
            <div className="bg-white border border-[oklch(0.88_0.008_200)] rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-[oklch(0.13_0.01_220)] mb-4">Samenvatting</h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center py-2 border-b border-[oklch(0.88_0.008_200)]">
                  <span className="text-[oklch(0.48_0.01_215)] text-sm">Voertuigtype</span>
                  <span className="font-semibold text-[oklch(0.13_0.01_220)] text-sm">{carType?.label}</span>
                </div>
                <div className="flex justify-between items-start py-2 border-b border-[oklch(0.88_0.008_200)]">
                  <span className="text-[oklch(0.48_0.01_215)] text-sm">Onderdelen ({selectedParts.length})</span>
                  <div className="text-right">
                    {selectedParts.map((id) => (
                      <p key={id} className="font-semibold text-[oklch(0.13_0.01_220)] text-sm">{damageParts.find((p) => p.id === id)?.label}</p>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[oklch(0.48_0.01_215)] text-sm">Schadeomvang</span>
                  <span className="font-semibold text-[oklch(0.13_0.01_220)] text-sm">{damageType?.label}</span>
                </div>
              </div>
            </div>

            {/* Offerte aanvragen */}
            <div className="bg-[oklch(0.55_0.16_195)]/5 border border-[oklch(0.55_0.16_195)]/20 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-[oklch(0.13_0.01_220)] mb-2">Wilt u een officiële offerte?</h3>
              <p className="text-[oklch(0.48_0.01_215)] text-sm mb-5">Laat uw gegevens achter en wij nemen zo snel mogelijk contact met u op.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Uw naam"
                  value={naam}
                  onChange={(e) => setNaam(e.target.value)}
                  className="flex-1 border border-[oklch(0.88_0.008_200)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.55_0.16_195)] bg-white"
                />
                <input
                  type="tel"
                  placeholder="Uw telefoonnummer"
                  value={telefoon}
                  onChange={(e) => setTelefoon(e.target.value)}
                  className="flex-1 border border-[oklch(0.88_0.008_200)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[oklch(0.55_0.16_195)] bg-white"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  disabled={!naam || !telefoon || loading}
                  onClick={async () => {
                    setLoading(true)
                    setError("")
                    try {
                      const res = await fetch("/api/calculator", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          naam,
                          telefoon,
                          voertuig: carType?.label,
                          onderdelen: selectedParts.map((id) => damageParts.find((p) => p.id === id)?.label).join(", "),
                          schade: damageType?.label,
                          minPrijs: min.toLocaleString("nl-NL"),
                          maxPrijs: max.toLocaleString("nl-NL"),
                        }),
                      })
                      if (res.ok) {
                        setSubmitted(true)
                      } else {
                        setError("Er is iets misgegaan. Bel ons direct op 020 331 32 95.")
                      }
                    } catch {
                      setError("Er is iets misgegaan. Bel ons direct op 020 331 32 95.")
                    } finally {
                      setLoading(false)
                    }
                  }}
                  className="flex items-center gap-2 bg-[oklch(0.55_0.16_195)] hover:bg-[oklch(0.48_0.16_195)] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm whitespace-nowrap"
                >
                  <Phone size={15} />
                  {loading ? "Verzenden..." : "Offerte aanvragen"}
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={reset} className="flex items-center gap-2 px-6 py-4 rounded-xl border-2 border-[oklch(0.88_0.008_200)] text-[oklch(0.48_0.01_215)] font-semibold hover:border-[oklch(0.55_0.16_195)]/40 transition-all">
                <RotateCcw size={16} /> Opnieuw berekenen
              </button>
            </div>
          </div>
        )}

        {/* Bedankpagina */}
        {submitted && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-[oklch(0.55_0.16_195)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-[oklch(0.55_0.16_195)]" />
            </div>
            <h2 className="text-3xl font-bold text-[oklch(0.13_0.01_220)] mb-3">Bedankt, {naam}!</h2>
            <p className="text-[oklch(0.48_0.01_215)] text-lg mb-4">Wij nemen zo snel mogelijk contact met u op via <strong>{telefoon}</strong>.</p>
            <p className="text-[oklch(0.48_0.01_215)] mb-8">Uw geschatte reparatiekosten: <strong className="text-[oklch(0.55_0.16_195)]">€{min.toLocaleString("nl-NL")} — €{max.toLocaleString("nl-NL")}</strong></p>
            <button onClick={reset} className="flex items-center gap-2 mx-auto bg-[oklch(0.55_0.16_195)] hover:bg-[oklch(0.48_0.16_195)] text-white font-semibold px-8 py-4 rounded-xl transition-all">
              <RotateCcw size={16} /> Nieuwe berekening
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
