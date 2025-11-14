import Script from 'next/script'

export function StructuredData() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Pawn Appétit",
    "applicationCategory": "GameApplication",
    "applicationSubCategory": "Chess Analysis Software",
    "description": "Best free chess analysis software for Windows, macOS, and Linux. Import games from Lichess and Chess.com, analyze with UCI engines, train opening repertoires, and improve your chess skills.",
    "url": "https://pawnappetit.com",
    "downloadUrl": "https://github.com/Pawn-Appetit/pawn-appetit/releases/latest",
    "operatingSystem": ["Windows", "macOS", "Linux"],
    "softwareVersion": "1.0.0",
    "license": "https://www.gnu.org/licenses/gpl-3.0.html",
    "datePublished": "2024-01-01",
    "dateModified": "2025-01-01",
    "author": {
      "@type": "Organization",
      "name": "Pawn-Appetit",
      "url": "https://github.com/Pawn-Appetit"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "89",
      "bestRating": "5"
    },
    "screenshot": [
      "https://pawnappetit.com/img/dashboard-page.png",
      "https://pawnappetit.com/img/analyze-page.png",
      "https://pawnappetit.com/img/game-page.png"
    ],
    "featureList": [
      "Chess game analysis with UCI engines",
      "Import games from Lichess and Chess.com",
      "Opening repertoire training with spaced repetition",
      "Position search in chess databases",
      "Multi-engine analysis comparison",
      "Cross-platform support (Windows, macOS, Linux)",
      "Free and open source",
      "ChessBase alternative",
      "PGN file support",
      "Tactical training features"
    ],
    "keywords": "chess analysis software, free chess GUI, UCI engine, opening repertoire, chess training, ChessBase alternative"
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pawn-Appetit",
    "url": "https://pawnappetit.com",
    "logo": "https://pawnappetit.com/img/logo.png",
    "sameAs": [
      "https://github.com/Pawn-Appetit/pawn-appetit",
      "https://discord.gg/8hk49G8ZbX"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pawn Appétit",
    "url": "https://pawnappetit.com",
    "description": "Official website for Pawn Appétit chess analysis software",
    "publisher": {
      "@type": "Organization",
      "name": "Pawn-Appetit"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://pawnappetit.com/docs?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Pawn Appétit really free chess analysis software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Pawn Appétit is completely free and open-source chess analysis software. You can download it for Windows, macOS, and Linux without any cost or subscription fees."
        }
      },
      {
        "@type": "Question", 
        "name": "Can I import games from Lichess and Chess.com?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Pawn Appétit allows you to easily import games from both Lichess.org and Chess.com for analysis. You can also import PGN files from other sources."
        }
      },
      {
        "@type": "Question",
        "name": "What chess engines does Pawn Appétit support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pawn Appétit supports all UCI-compatible chess engines including Stockfish, Komodo, Leela Chess Zero, and many others. You can install and manage multiple engines simultaneously."
        }
      },
      {
        "@type": "Question",
        "name": "Is Pawn Appétit a good alternative to ChessBase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Pawn Appétit offers many similar features to ChessBase including game analysis, database management, and opening preparation, but it's completely free and open-source."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema)
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  )
}