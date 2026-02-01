export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

export interface HowTo {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration
  steps: HowToStep[];
}

export interface Article {
  headline: string;
  image?: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  description: string;
}

export interface StructuredDataProps {
  withSoftware?: boolean;
  faq?: FAQItem[];
  howTo?: HowTo;
  article?: Article;
  withOrganization?: boolean;
  withWebSite?: boolean;
}

export function StructuredData({
  withSoftware = false,
  faq = [],
  howTo,
  article,
  withOrganization = true,
  withWebSite = true,
}: StructuredDataProps) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pawn Appétit",
    applicationCategory: "GameApplication",
    applicationSubCategory: "Chess Analysis Software",
    description:
      "Best free chess analysis software for Windows, macOS, and Linux. Import games from Lichess and Chess.com, analyze with UCI engines, train opening repertoires, and improve your chess skills.",
    url: "https://pawnappetit.com",
    downloadUrl: "https://github.com/Pawn-Appetit/pawn-appetit/releases/latest",
    operatingSystem: ["Windows", "macOS", "Linux"],
    softwareVersion: "1.0.0",
    license: "https://www.gnu.org/licenses/gpl-3.0.html",
    datePublished: "2024-01-01",
    dateModified: "2025-01-01",
    author: {
      "@type": "Organization",
      name: "Pawn-Appetit",
      url: "https://github.com/Pawn-Appetit",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "89",
      bestRating: "5",
    },
    screenshot: [
      "https://pawnappetit.com/img/dashboard-page.png",
      "https://pawnappetit.com/img/analyze-page.png",
      "https://pawnappetit.com/img/game-page.png",
    ],
    featureList: [
      "Chess game analysis with UCI engines",
      "Import games from Lichess and Chess.com",
      "Opening repertoire training with spaced repetition",
      "Position search in chess databases",
      "Multi-engine analysis comparison",
      "Cross-platform support (Windows, macOS, Linux)",
      "Free and open source",
      "ChessBase alternative",
      "PGN file support",
      "Tactical training features",
    ],
    keywords:
      "chess analysis software, free chess GUI, UCI engine, opening repertoire, chess training, ChessBase alternative",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pawn-Appetit",
    url: "https://pawnappetit.com",
    logo: "https://pawnappetit.com/img/logo.png",
    sameAs: ["https://github.com/Pawn-Appetit/pawn-appetit", "https://discord.gg/8hk49G8ZbX"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pawn Appétit",
    url: "https://pawnappetit.com",
    description: "Official website for Pawn Appétit chess analysis software",
    publisher: {
      "@type": "Organization",
      name: "Pawn-Appetit",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://pawnappetit.com/docs?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const howToSchema = howTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: howTo.name,
        description: howTo.description,
        totalTime: howTo.totalTime,
        step: howTo.steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
          image: step.image,
          url: step.url,
        })),
      }
    : null;

  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.headline,
        image: article.image ? [article.image] : undefined,
        author: {
          "@type": "Person",
          name: article.author || "Pawn Appétit Team",
        },
        publisher: {
          "@type": "Organization",
          name: "Pawn Appétit",
          logo: {
            "@type": "ImageObject",
            url: "https://pawnappetit.com/android-chrome-512x512.png",
          },
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        description: article.description,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://pawnappetit.com",
        },
      }
    : null;

  return (
    <>
      {withSoftware && (
        <script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
      )}
      {withOrganization && (
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      )}
      {withWebSite && (
        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      )}
      {faqSchema && (
        <script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
      {howToSchema && (
        <script
          id="howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToSchema),
          }}
        />
      )}
      {articleSchema && (
        <script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
      )}
    </>
  );
}
