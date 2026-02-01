import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { StructuredData } from "@/components/StructuredData";
import { NotFoundPage } from "@/components/NotFoundPage";
import appCss from "../globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Pawn Appétit - Free Chess Analysis Software | Open Source Chess GUI",
      },
      {
        name: "description",
        content:
          "Download Pawn Appétit: free chess analysis software for Windows, macOS & Linux. Import Lichess/Chess.com games, analyze with UCI engines, train opening repertoires.",
      },
      {
        name: "keywords",
        content:
          "chess analysis software, free chess GUI, chess engine analysis, open source chess, UCI chess engine, chess repertoire training, chess database software, PGN analysis, cross-platform chess, lichess chess.com import, chess game analyzer, chess training software, ChessBase alternative, chess position analysis, opening preparation software, tactical training chess",
      },
      { name: "author", content: "Pawn-Appetit" },
      {
        property: "og:title",
        content: "Pawn Appétit - Free Chess Analysis Software | Open Source Chess GUI",
      },
      {
        property: "og:description",
        content:
          "Download free chess analysis software for Windows, macOS & Linux. Import games from Lichess/Chess.com, analyze with engines, train opening repertoires.",
      },
      { property: "og:url", content: "https://pawnappetit.com" },
      { property: "og:site_name", content: "Pawn Appétit" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "https://pawnappetit.com/img/dashboard-page.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pawn Appétit Chess Analysis Software Interface" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "canonical", href: "https://pawnappetit.com" },
    ],
    scripts: [
      {
        children: `
          try {
            const theme = localStorage.getItem('theme') || 'dark';
            document.documentElement.classList.toggle('dark', theme === 'dark');
          } catch (e) {}
        `,
      },
      // Google Analytics
      {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.VITE_PUBLIC_GA_ID || ""}`,
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.VITE_PUBLIC_GA_ID || ""}');
        `,
      },
    ],
  }),
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <StructuredData
          withSoftware={true}
          faq={[
            {
              question: "Is Pawn Appétit really free chess analysis software?",
              answer:
                "Yes, Pawn Appétit is completely free and open-source chess analysis software. You can download it for Windows, macOS, and Linux without any cost or subscription fees.",
            },
            {
              question: "Can I import games from Lichess and Chess.com?",
              answer:
                "Yes, Pawn Appétit allows you to easily import games from both Lichess.org and Chess.com for analysis. You can also import PGN files from other sources.",
            },
            {
              question: "What chess engines does Pawn Appétit support?",
              answer:
                "Pawn Appétit supports all UCI-compatible chess engines including Stockfish, Komodo, Leela Chess Zero, and many others. You can install and manage multiple engines simultaneously.",
            },
            {
              question: "Is Pawn Appétit a good alternative to ChessBase?",
              answer:
                "Yes, Pawn Appétit offers many similar features to ChessBase including game analysis, database management, and opening preparation, but it's completely free and open-source.",
            },
          ]}
        />
      </head>
      <body className="font-sans">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
