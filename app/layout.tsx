import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { StructuredData } from '../components/StructuredData'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pawn Appétit - Best Free Chess Analysis Software 2025 | Open Source Chess GUI',
  description: 'Download Pawn Appétit: #1 free chess analysis software for Windows, macOS & Linux. Import Lichess/Chess.com games, analyze with UCI engines, train opening repertoires. 500+ GitHub stars.',
  keywords: ['chess analysis software', 'free chess GUI', 'chess engine analysis', 'open source chess', 'UCI chess engine', 'chess repertoire training', 'chess database software', 'PGN analysis', 'cross-platform chess', 'lichess chess.com import', 'chess game analyzer', 'chess training software', 'ChessBase alternative', 'chess position analysis', 'opening preparation software', 'tactical training chess'],
  authors: [{ name: 'Pawn-Appetit' }],
  creator: 'Pawn-Appetit',
  alternates: {
    canonical: 'https://pawnappetit.com',
  },
  openGraph: {
    title: 'Pawn Appétit - Free Chess Analysis Software | Open Source Chess GUI',
    description: 'Download free chess analysis software for Windows, macOS & Linux. Import games from Lichess/Chess.com, analyze with engines, train opening repertoires.',
    url: 'https://pawnappetit.com',
    siteName: 'Pawn Appétit',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://pawnappetit.com/img/dashboard-page.png',
        width: 1200,
        height: 630,
        alt: 'Pawn Appétit Chess Analysis Software Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pawn Appétit - Free Chess Analysis Software',
    description: 'Free open-source chess GUI for game analysis, repertoire training, and engine management. Available for Windows, macOS, and Linux.',
    images: ['https://pawnappetit.com/img/dashboard-page.png'],
    creator: '@Pawn-Appetit',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
