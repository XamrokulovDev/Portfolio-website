import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LoadingScreen } from "@/components/loading-screen"
import { PageTransition } from "@/components/page-transition"

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <PageTransition>
        <main className="min-h-screen">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
          <ScrollToTop />
        </main>
      </PageTransition>
    </>
  )
}