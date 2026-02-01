import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookOpen, Target, Repeat, Trophy } from "lucide-react";

export const Route = createFileRoute("/features/repertoire-training/")({
  component: RepertoirePage,
  head: () => ({
    meta: [
      {
        title: "Chess Repertoire Training & Spaced Repetition | Pawn Appétit",
      },
      {
        name: "description",
        content:
          "Build your opening repertoire and memorize lines using spaced repetition. Train against the computer to master your openings.",
      },
      {
        name: "keywords",
        content:
          "chess repertoire, spaced repetition, opening trainer, chessable alternative, opening study",
      },
    ],
  }),
});

function RepertoirePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-3 mb-8 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
              <BookOpen className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Opening Repertoire
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Memorize your best lines and punish your opponent's mistakes with our integrated
              trainer.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Train Like a Pro
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Forget passive reading. Pawn Appétit uses spaced repetition to ensure you remember
                  your lines when it counts.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Repeat className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Spaced Repetition
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-red-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Mock Games</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-slate-800 rounded-xl aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="text-gray-400 text-sm">[Screenshot: Repertoire Trainer]</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-sm">
                <BookOpen className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Tree Builder
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Easily build your repertoire tree. Add variations, annotations, and arrows to
                  explain your plans.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-sm">
                <Trophy className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Gamified Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track your progress with accuracy scores. See which openings you know best and
                  where you need more work.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-sm">
                <Target className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  White & Black
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Manage separate repertoires for White and Black. Switch contexts instantly.
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
