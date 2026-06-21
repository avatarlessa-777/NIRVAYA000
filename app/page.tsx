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
import { ContactBubble } from "@/components/contact-bubble"
import { 
  TriangleDotsDivider, 
  LotusDivider, 
  MandalaDivider, 
  VerticalLineDivider 
} from "@/components/triangle-divider"
import type { Language } from "@/lib/translations"


export default function Home({ forcedLang }: { forcedLang?: Language }) {
  return (
    <main className="relative">
      <CursorGlow />
      <Navigation forcedLang={forcedLang} />
      <Hero />
      <Marquee />
      <TriangleDotsDivider />
      <Services />
      <LotusDivider />
      <Portfolio />
      <div className="flex items-center justify-center h-8 md:h-12">
        <div className="w-[120px] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(200,148,62,0.4), transparent)", animation: "breathe-gold-line 3s ease-in-out infinite" }}></div>
      </div>
      <FaceTransfer />
      <VerticalLineDivider />
      <MotionControl />
      <VerticalLineDivider />
      <About />
      <VerticalLineDivider />
      <Contacts />
      <Footer />
      <ContactBubble />
    </main>
  )
}
