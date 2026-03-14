import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Garage Turkuaz — Carrosserie & Spuitwerk',
  description:
    'Garage Turkuaz is uw specialist voor professioneel spuitwerk, schadeherstel en autoreparaties. Kwaliteit die u kunt zien.',
  keywords: 'garage, carrosserie, spuitwerk, schadeherstel, autoreparatie, Turkuaz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
