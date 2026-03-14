import { Paintbrush, Wrench, ClipboardList, Car, KeyRound, Settings } from "lucide-react"
// Services: Spuitwerk, Schadeherstel, Reparaties, Taxatie, VAG Codering, Onderdelen

const services = [
  {
    icon: Paintbrush,
    title: "Professioneel Spuitwerk",
    description:
      "Volledige lakcabine met de nieuwste kleurmatchingtechnologie. Wij zorgen voor een perfecte kleurovereenkomst en een duurzame, hoogglansafwerking.",
    highlight: true,
  },
  {
    icon: Car,
    title: "Schadeherstel",
    description:
      "Van kleine deukjes tot grote schade — wij herstellen uw carrosserie vakkundig en snel, zodat uw auto er weer als nieuw uitziet.",
    highlight: false,
  },
  {
    icon: Wrench,
    title: "Autoreparaties",
    description:
      "Mechanische reparaties, onderhoud en APK-voorbereiding. Onze ervaren monteurs staan voor u klaar voor al uw autoreparaties.",
    highlight: false,
  },
  {
    icon: ClipboardList,
    title: "Taxatie voor Schadeverzekeraars",
    description:
      "Professionele schade-taxatie in samenwerking met schadeverzekeraars. Wij leveren nauwkeurige en betrouwbare expertiserapporten voor een vlotte afhandeling.",
    highlight: false,
  },
  {
    icon: KeyRound,
    title: "Codering VAG Groep",
    description:
      "Gespecialiseerde codering en programmering van voertuigen uit de VAG-groep (Volkswagen, Audi, SEAT, Skoda). Vakkundige uitvoering met professionele diagnoseapparatuur.",
    highlight: false,
  },
  {
    icon: Settings,
    title: "Onderdelen & Montage",
    description:
      "Levering en montage van originele en hoogwaardige vervangingsonderdelen. Transparante prijzen en snelle leveringstijden.",
    highlight: false,
  },
]

export default function Services() {
  return (
    <section id="diensten" className="py-24 bg-[oklch(0.98_0.003_200)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-[oklch(0.55_0.16_195)] text-sm font-semibold tracking-widest uppercase mb-3">
            Wat wij doen
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[oklch(0.13_0.01_220)] leading-tight tracking-tight text-balance mb-5">
            Onze diensten
          </h2>
          <p className="text-[oklch(0.48_0.01_215)] text-lg leading-relaxed text-pretty">
            Van spuitwerk tot volledige schadeherstel — Garage Turkuaz biedt een
            complete service voor uw voertuig met vakmanschap en toewijding.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  service.highlight
                    ? "bg-white border-2 border-[oklch(0.55_0.16_195)] shadow-lg shadow-[oklch(0.55_0.16_195)]/15"
                    : "bg-white border border-[oklch(0.88_0.008_200)] hover:border-[oklch(0.55_0.16_195)]/40 hover:shadow-lg hover:shadow-[oklch(0.55_0.16_195)]/10"
                }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[oklch(0.55_0.16_195)]/10 group-hover:bg-[oklch(0.55_0.16_195)]/20 transition-colors">
                  <Icon size={22} className="text-[oklch(0.55_0.16_195)]" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-[oklch(0.55_0.16_195)]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[oklch(0.48_0.01_215)]">
                  {service.description}
                </p>

                {/* Teal accent bar on highlighted card */}
                {service.highlight && (
                  <div className="absolute top-0 right-0 w-1 h-16 rounded-tr-2xl bg-[oklch(0.55_0.16_195)]" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
