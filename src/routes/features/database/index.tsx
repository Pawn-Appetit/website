import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Database, Search, FileDown, Layers } from "lucide-react";

export const Route = createFileRoute("/features/database/")({
  component: DatabasePage,
  head: () => ({
    meta: [
      {
        title: "Chess Database Manager - Fast Search & PGN Support | Pawn Appétit",
      },
      {
        name: "description",
        content:
          "Manage huge chess databases with millions of games. Fast position search, PGN import/export, and advanced filtering capabilities.",
      },
      {
        name: "keywords",
        content:
          "chess database, pgn viewer, chessbase alternative, game collection, opening explorer",
      },
    ],
  }),
});

function DatabasePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-3 mb-8 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
              <Database className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Massive Chess Databases
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Store, search, and manage millions of games without slowdowns. The ultimate ChessBase
              alternative.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 md:flex-row-reverse">
              <div className="order-2 md:order-1 bg-gray-100 dark:bg-slate-800 rounded-xl aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="text-gray-400 text-sm">[Screenshot: Database Grid]</span>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Instant Search
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Find every recurrence of a position across 10 million games in milliseconds.
                  Filter by player, rating, year, or result to prepare for your next opponent.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Search className="w-6 h-6 text-emerald-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Position Search
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Layers className="w-6 h-6 text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Header Filters
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-sm">
                <FileDown className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  PGN Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Import and export PGN files of any size. Compatible with Chess.com, Lichess, and
                  The Week in Chess archives.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-sm">
                <Database className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Local Storage
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your databases live on your computer. You own your data, securely and privately.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-sm">
                <Layers className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Opening Tree
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore opening statistics generated from your database. See win rates and play
                  frequencies instantly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
