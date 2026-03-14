import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import GalleryTestimonials from "@/components/gallery-testimonials"
import ContactFooter from "@/components/contact-footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <GalleryTestimonials />
      <ContactFooter />
    </main>
  )
}
