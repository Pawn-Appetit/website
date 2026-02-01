import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  component: BlogIndexPage,
  head: () => ({
    meta: [
      {
        title: "Pawn Appétit Blog - Chess Software Tips & Updates",
      },
      {
        name: "description",
        content:
          "Latest news, tutorials, and deep dives into chess technology. Learn how to get the most out of Pawn Appétit.",
      },
      {
        name: "keywords",
        content: "chess blog, chess software news, chess gui tutorials",
      },
    ],
  }),
});

function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Pawn Appétit Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Insights, updates, and guides for the modern chess player.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid gap-12">
              {/* Article Card */}
              <article className="group flex flex-col md:flex-row gap-8 items-start">
                <Link
                  to="/blog/chessbase-free-alternative"
                  className="w-full md:w-1/3 aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1"
                >
                  <span className="text-white font-bold text-2xl">ChessBase vs Pawn Appétit</span>
                </Link>
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Dec 28, 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Pawn Appétit Team
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link to="/blog/chessbase-free-alternative">
                      The Best Free ChessBase Alternative in 2025
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    Why pay hundreds of dollars for chess software? Discover why Pawn Appétit is the
                    best free, open-source alternative to ChessBase for analysis, database
                    management, and repertoire training.
                  </p>
                  <Link
                    to="/blog/chessbase-free-alternative"
                    className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
