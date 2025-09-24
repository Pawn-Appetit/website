'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Download, Github, Star, Users, Zap, Shield, Puzzle, Search, Database, Brain, ArrowRight, Play, Trophy, Target, Sparkles, ChefHat, Coffee } from 'lucide-react'
import { useGitHubStats, StatDisplay } from '../hooks/useGitHubStats'

const features = [
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Game Analysis',
    description: 'Import and analyze games from lichess.org and chess.com with powerful engine support.',
    accent: 'brand',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Multi-Engine Support',
    description: 'Analyze with any UCI-compatible engine for deep position analysis.',
    accent: 'royal',
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Repertoire Training',
    description: 'Build and train your opening repertoire using spaced repetition techniques.',
    accent: 'sage',
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Engine & Database Management',
    description: 'Install and manage engines and databases with minimal effort.',
    accent: 'honey',
  },
  {
    icon: <Puzzle className="h-6 w-6" />,
    title: 'Position Search',
    description: 'Search for absolute or partial positions across your game database.',
    accent: 'brand',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Cross-Platform',
    description: 'Available on Windows, macOS, and Linux with native performance.',
    accent: 'royal',
  },
]

export default function Home() {
  const { stats } = useGitHubStats()

  const dynamicStats = [
    { 
      label: 'GitHub Stars', 
      value: stats?.stars || 0, 
      fallback: '25+',
      icon: <Star className="h-5 w-5" />, 
      color: 'text-accent-honey-500' 
    },
    { 
      label: 'Downloads', 
      value: stats?.downloadCount || 0, 
      fallback: '1000+',
      icon: <Download className="h-5 w-5" />, 
      color: 'text-accent-sage-500' 
    },
    { 
      label: 'Contributors', 
      value: stats?.contributors || 0, 
      fallback: '39+',
      icon: <Users className="h-5 w-5" />, 
      color: 'text-accent-royal-500' 
    },
  ]
  return (
    <div className="min-h-screen bg-surface-primary">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-surface-primary via-brand-50/30 to-accent-royal-50/20 dark:from-gray-950 dark:via-brand-950/30 dark:to-accent-royal-950/20">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          {/* Chess pattern overlay */}
          <div className="absolute inset-0 chess-pattern opacity-5"></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-brand-400 to-accent-honey-400 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-br from-accent-royal-400 to-accent-sage-400 rounded-full blur-3xl opacity-15 animate-float-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-accent-sage-400 to-brand-400 rounded-full blur-2xl opacity-25 animate-chess-bounce"></div>
          
          {/* Food-themed accent elements */}
          <div className="absolute top-20 right-1/4 text-4xl opacity-10 animate-float">🍯</div>
                  <div className="absolute bottom-32 left-1/4 text-3xl opacity-15 animate-float-slow">♟</div>
          <div className="absolute top-1/2 right-10 text-5xl opacity-8 animate-chess-bounce">🍰</div>
        </div>
        
        <div className="relative container-brand section-brand">
          <div className="text-center space-y-10 max-w-5xl mx-auto">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full text-sm font-medium text-brand-700 dark:text-brand-300 animate-fade-in-up">
              <div className="flex items-center gap-1">
                <span>Premium Chess Experience</span>
              </div>
              <div className="w-px h-4 bg-brand-300 dark:bg-brand-600"></div>
              <div className="flex items-center gap-1">
                <ChefHat className="h-4 w-4" />
                <span>Open Source</span>
              </div>
            </div>

            {/* Enhanced Hero Title */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h1 className="text-hero">
                <span className="block">The Ultimate</span>
                <span className="block bg-gradient-to-r from-brand-600 via-accent-royal-600 to-accent-sage-600 bg-clip-text text-transparent font-bold">
                  Chess Analysis Toolkit
                </span>
                <span className="block text-brand font-brand">Pawn Appétit 2025</span>
              </h1>
              
              {/* Subtitle with chess + food theme */}
              <div className="flex items-center justify-center gap-2 text-lg text-text-secondary">
                <Coffee className="h-5 w-5 text-accent-espresso-500" />
                <span>Where Chess Meets Culinary Perfection</span>
                <Sparkles className="h-5 w-5 text-accent-honey-500" />
              </div>
            </div>

            {/* Enhanced Hero Description */}
            <p className="text-body-xl max-w-3xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              The ultimate free chess analysis software and open-source chess GUI. 
              Import games from Lichess.org and Chess.com, analyze with multiple UCI engines, 
              train opening repertoires, and savor every strategic moment. Available for Windows, macOS, and Linux.
            </p>

            {/* Enhanced Hero Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <a 
                href="/install" 
                className="btn btn-brand group text-lg px-8 py-4"
              >
                <Download className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>Download Free</span>
                <Sparkles className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://github.com/Pawn-Appetit/pawn-appetit" 
                className="btn btn-glass group text-lg px-8 py-4"
              >
                <Github className="h-6 w-6" />
                <span>View on GitHub</span>
                <Star className="h-4 w-4 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="section-brand bg-gradient-to-b from-surface-secondary to-surface-primary dark:from-gray-900/50 dark:to-gray-950">
        <div className="container-brand">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 dark:bg-brand-900/30 rounded-full text-sm font-medium text-brand-700 dark:text-brand-300">
              <Trophy className="h-4 w-4" />
              <span>Everything You Need</span>
            </div>
            <h2 className="text-heading-xl text-text-primary">
              Master Chess with 
              <span className="text-brand"> Exquisite Tools</span>
            </h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              Powerful analysis tools, intuitive interface, and advanced features 
              designed for chess players of all levels. Every feature crafted with care and precision.
            </p>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid-features">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card-feature p-8 group animate-fade-in-scale"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${
                    feature.accent === 'brand' ? 'from-brand-100 to-brand-200 dark:from-brand-900/30 dark:to-brand-800/30' :
                    feature.accent === 'royal' ? 'from-accent-royal-100 to-accent-royal-200 dark:from-accent-royal-900/30 dark:to-accent-royal-800/30' :
                    feature.accent === 'sage' ? 'from-accent-sage-100 to-accent-sage-200 dark:from-accent-sage-900/30 dark:to-accent-sage-800/30' :
                    'from-accent-honey-100 to-accent-honey-200 dark:from-accent-honey-900/30 dark:to-accent-honey-800/30'
                  } rounded-2xl flex items-center justify-center ${
                    feature.accent === 'brand' ? 'text-brand-600 dark:text-brand-400' :
                    feature.accent === 'royal' ? 'text-accent-royal-600 dark:text-accent-royal-400' :
                    feature.accent === 'sage' ? 'text-accent-sage-600 dark:text-accent-sage-400' :
                    'text-accent-honey-600 dark:text-accent-honey-400'
                  } group-hover:scale-110 transition-all duration-300 shadow-soft`}>
                    {feature.icon}
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-heading-md text-text-primary group-hover:text-brand-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-body text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gradient-to-r from-brand-600 via-accent-royal-600 to-brand-700 text-white relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-128 h-128 bg-accent-sage-500/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>
        
        <div className="container-brand relative">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-heading-lg">
              Trusted by Chess Enthusiasts Worldwide
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of players improving their game with Pawn Appétit&apos;s 
              comprehensive suite of analysis and training tools.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {dynamicStats.map((stat, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-glass">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold group-hover:scale-105 transition-transform duration-300">
                  <StatDisplay value={stat.value} fallback={stat.fallback} />
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="section-brand bg-gradient-to-b from-surface-primary to-surface-secondary">
        <div className="container-brand text-center space-y-10">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-sage-100 dark:bg-accent-sage-900/30 rounded-full text-sm font-medium text-accent-sage-700 dark:text-accent-sage-300">
              <Target className="h-4 w-4" />
              <span>Ready to Begin?</span>
            </div>
            <h2 className="text-heading-xl text-text-primary">
              Elevate Your Chess Game Today
            </h2>
            <p className="text-body-lg">
              Download Pawn Appétit and start analyzing like a master chef crafts a perfect dish. 
              It&apos;s free, open source, and constantly improving with love from the community.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/install" 
              className="btn btn-brand group text-lg px-8 py-4"
            >
              <Download className="h-6 w-6" />
              <span>Get Started Now</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/features" 
              className="btn btn-outline group text-lg px-8 py-4"
            >
              <Play className="h-6 w-6" />
              <span>Explore Features</span>
            </a>
          </div>
          
          {/* Testimonial or quote */}
          <div className="max-w-2xl mx-auto pt-12">
            <blockquote className="text-lg italic text-text-secondary">
              &ldquo;Like a perfectly balanced meal, Pawn Appétit combines all the essential ingredients 
              for chess mastery in one delightful package.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-2 mt-4 text-text-tertiary">
              <ChefHat className="h-4 w-4" />
              <span className="text-sm">— The Chess Kitchen Team</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
