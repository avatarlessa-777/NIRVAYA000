import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { FaceTransfer } from "@/components/face-transfer"
import { MotionControl } from "@/components/motion-control"
import { About } from "@/components/about"
import { Contacts } from "@/components/contacts"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { 
  TriangleDotsDivider, 
  LotusDivider, 
  MandalaDivider, 
  VerticalLineDivider 
} from "@/components/triangle-divider"
import { FloatingParticlesDivider } from "@/components/floating-particles-divider"

export default function Home() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navigation />
      <Hero />
      <Marquee />
      <TriangleDotsDivider />
      <Services />
      <LotusDivider />
      <Portfolio />
      <FloatingParticlesDivider />
      <FaceTransfer />
      <VerticalLineDivider />
      <MotionControl />
      <VerticalLineDivider />
      <About />
      <VerticalLineDivider />
      <Contacts />
      <Footer />
    </main>
  )
}
