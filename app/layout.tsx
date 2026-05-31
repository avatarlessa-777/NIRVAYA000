import type { Metadata } from 'next'
import { Rajdhani, Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { ScanlinesOverlay } from '@/components/scanlines-overlay'

const rajdhani = Rajdhani({ 
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-heading'
})

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: '--font-sans'
})

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["400"],
  variable: '--font-cormorant'
})

export const metadata: Metadata = {
  title: 'NIRVAYA STUDIO — AI-видеопродакшн студия',
  description: 'Кинематографичные клипы, рекламные ролики и промо-видео, созданные с помощью нейросетей нового поколения. От замысла к сиянию.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${rajdhani.variable} ${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <Script 
          src="https://cdn.jsdelivr.net/npm/@mux/mux-player@3/dist/mux-player.min.js" 
          strategy="beforeInteractive"
        />
        {children}
        <ScanlinesOverlay />
        <Analytics />
      </body>
    </html>
  )
}
