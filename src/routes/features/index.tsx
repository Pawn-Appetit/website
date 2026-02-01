import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Brain, BookOpen, Search, Cpu, Layers, Database, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/features/")({
  component: FeaturesPage,
  head: () => ({
    meta: [
      {
        title: "Pawn Appétit Features - Analysis, Repertoire & Database",
      },
      {
        name: "description",
        content:
          "Explore the complete feature set of Pawn Appétit. Free chess analysis, repertoire training, and database management tools for every player.",
      },
      {
        name: "keywords",
        content:
          "chess software features, chess gui features, analysis tools, chess database features",
      },
    ],
  }),
});

function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Powerful Tools for Ambitious Players
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
              Pawn Appétit combines the best features of modern chess software into one free,
              open-source application.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={Brain}
                title="Smart Analysis"
                description="Deep engine analysis with multiple engines support. Get insights from Stockfish and other top engines."
                color="blue"
                href="/features/smart-analysis"
              />
              <FeatureCard
                icon={Database}
                title="Database Manager"
                description="Manage huge chess databases. Fast search, filtering, and PGN support for millions of games."
                color="emerald"
                href="/features/database"
              />
              <FeatureCard
                icon={BookOpen}
                title="Repertoire Training"
                description="Build and train your opening repertoire with spaced repetition and interactive exercises."
                color="orange"
                href="/features/repertoire-training"
              />
              <FeatureCard
                icon={Search}
                title="Position Search"
                description="Find games matching any position instantly. Learn how masters play your favorite lines."
                color="purple"
                href="/features/database"
              />
              <FeatureCard
                icon={Cpu}
                title="Engine Management"
                description="Easy UCI engine configuration. customize hash, threads, and multi-pv settings."
                color="red"
                href="/features/smart-analysis"
              />
              <FeatureCard
                icon={Layers}
                title="Opening Tree"
                description="Visualize opening statistics and win rates directly from your database."
                color="indigo"
                href="/features/database"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  href,
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
  href: string;
}) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    emerald: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
  };

  // Fallback
  const iconClass = colorClasses[color] || colorClasses["blue"];

  return (
    <Link
      to={href}
      className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${iconClass}`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{description}</p>
      <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
        Learn more{" "}
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
