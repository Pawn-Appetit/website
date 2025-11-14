import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { StructuredData } from '@/components/StructuredData'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pawn Appétit - Free Chess Analysis Software | Open Source Chess GUI',
    description: 'Download Pawn Appétit: free chess analysis software for Windows, macOS & Linux. Import Lichess/Chess.com games, analyze with UCI engines, train opening repertoires.',
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
    icons: {
        icon: '/favicon.ico',
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
                    }}
                />
                <StructuredData />
            </head>
            <body className={inter.className}>
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
                {children}
            </body>
        </html>
    )
}
