import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Brain, Cpu, Zap, Activity } from "lucide-react";

export const Route = createFileRoute("/features/smart-analysis/")({
  component: SmartAnalysisPage,
  head: () => ({
    meta: [
      {
        title: "Smart Chess Analysis - Stockfish & Multi-Engine Support | Pawn Appétit",
      },
      {
        name: "description",
        content:
          "Analyze your chess games with powerful UCI engines like Stockfish. Compare evaluations, find missed tactical opportunities, and improve your strategic understanding.",
      },
      {
        name: "keywords",
        content: "chess analysis, stockfish gui, chess engine, game review, blunder check",
      },
    ],
  }),
});

function SmartAnalysisPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-3 mb-8 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Brain className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Smart Chess Analysis
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Uncover the truth in every position with multi-engine support and deep evaluation
              tools.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Power of Stockfish
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Harness the world's strongest chess engine. Pawn Appétit integrates seamlessly
                  with Stockfish and other UCI-compatible engines to give you Grandmaster-level
                  insights instantly.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Multi-PV Analysis
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Instant Evaluation
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-slate-800 rounded-xl aspect-video flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="text-gray-400 text-sm">[Screenshot: Analysis Board]</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-sm">
                <Activity className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Evaluation Graph
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Visualize the flow of the game with an interactive evaluation graph. Spot turning
                  points and blunders at a glance.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-sm">
                <Cpu className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Multi-Engine
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Run multiple engines simultaneously to compare different viewpoints on complex
                  positions.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-sm">
                <Zap className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Fast & Local
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All analysis happens locally on your machine. No cloud delays, no subscription
                  fees, 100% private.
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
