import { CheckCircle2 } from "lucide-react"

const stats = [
  { value: "15+", label: "Jaar ervaring" },
  { value: "500+", label: "Tevreden klanten" },
  { value: "100%", label: "Kwaliteitsgarantie" },
  { value: "2.000+", label: "Voertuigen hersteld" },
]

const highlights = [
  "Erkend carrosseriebedrijf met officiële certificering",
  "Gebruik van originele lak en A-merk materialen",
  "Schadeherstel direct via uw verzekering",
  "Gratis voertuig beoordeling en kostenraming",
  "Snelle doorlooptijd — uw auto snel terug",
  "Persoonlijk contact en transparante communicatie",
]

export default function About() {
  return (
    <section id="over-ons" className="py-24 bg-[oklch(0.13_0.01_220)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://placehold.co/700x550?text=Skilled+auto+technician+in+professional+garage+inspecting+car+body+damage+under+workshop+lighting"
                alt="Vakkundige monteur inspecteert carrosserieschade in Garage Turkuaz"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-[oklch(0.55_0.16_195)] rounded-2xl p-6 shadow-2xl">
              <p className="text-4xl font-bold text-white">15+</p>
              <p className="text-white/80 text-sm mt-1">Jaar vakmanschap</p>
            </div>
            {/* Teal border accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[oklch(0.55_0.16_195)]/40 rounded-2xl -z-10" />
          </div>

          {/* Text side */}
          <div>
            <p className="text-[oklch(0.55_0.16_195)] text-sm font-semibold tracking-widest uppercase mb-3">
              Over ons
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight text-balance mb-6">
              Vakmanschap dat u kunt vertrouwen
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6 text-pretty">
              Garage Turkuaz is al meer dan 15 jaar uw betrouwbare partner voor
              carrosserie en spuitwerk. Met een gepassioneerd team en
              geavanceerde apparatuur leveren wij topkwaliteit werk op tijd en
              binnen budget.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8 text-pretty">
              Wij werken met de nieuwste laktechnologieën en milieuvriendelijke
              materialen. Uw voertuig wordt behandeld met de zorg die het
              verdient — alsof het ons eigen is.
            </p>

            {/* Highlights list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[oklch(0.55_0.16_195)] mt-0.5 shrink-0"
                  />
                  <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-block bg-[oklch(0.55_0.16_195)] hover:bg-[oklch(0.48_0.16_195)] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[oklch(0.55_0.16_195)]/30"
            >
              Neem contact op
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[oklch(0.55_0.16_195)] mb-2">
                {stat.value}
              </p>
              <p className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
