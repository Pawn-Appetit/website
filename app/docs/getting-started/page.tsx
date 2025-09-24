import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Download, Play, Settings, FileText, Zap, ChevronRight } from 'lucide-react'

export default function GettingStarted() {
  const installationSteps = [
    {
      platform: 'Windows',
      icon: '🪟',
      steps: [
        'Download the `.msi` installer from the releases page',
        'Run the installer and follow the setup wizard',
        'Launch Pawn Appétit from the Start Menu or Desktop shortcut'
      ],
      requirements: ['Windows 10 or later', '4GB RAM', '200MB disk space']
    },
    {
      platform: 'macOS', 
      icon: '🍎',
      steps: [
        'Download the `.dmg` file from the releases page',
        'Open the .dmg and drag Pawn Appétit to Applications',
        'Launch from Applications folder (may need to right-click → Open first time)'
      ],
      requirements: ['macOS 10.15 or later', '4GB RAM', '200MB disk space']
    },
    {
      platform: 'Linux',
      icon: '🐧', 
      steps: [
        'Download the `.AppImage`, `.deb`, or `.rpm` file',
        'For AppImage: Make executable (`chmod +x`) and run',
        'For deb/rpm: Install using your package manager'
      ],
      requirements: ['Modern Linux distribution', '4GB RAM', '200MB disk space']
    }
  ]

  const quickStartSteps = [
    {
      title: 'Import Your First Game',
      description: 'Start by importing a PGN file or connecting to lichess.org/chess.com',
      icon: <FileText className="h-8 w-8" />,
      details: [
        'Use File → Open to import PGN files',
        'Or connect your chess.com/lichess.org account in Settings',
        'Games will appear in the Files section for analysis'
      ]
    },
    {
      title: 'Set Up Your First Engine',
      description: 'Install Stockfish or another UCI engine for analysis',
      icon: <Zap className="h-8 w-8" />,
      details: [
        'Go to Engines page and click "Add Engine"',
        'Download Stockfish automatically or browse for engine executable',
        'Configure engine settings (Hash size, Threads) for your system'
      ]
    },
    {
      title: 'Analyze Your Game',
      description: 'Use engine analysis to improve your chess understanding',
      icon: <Play className="h-8 w-8" />,
      details: [
        'Open a game and click "Analyze" to create analysis tab',
        'Engine evaluations appear as you navigate moves',
        'Click on move suggestions to see alternative lines'
      ]
    },
    {
      title: 'Create Your Repertoire',
      description: 'Build opening repertoires with spaced repetition training',
      icon: <Settings className="h-8 w-8" />,
      details: [
        'Go to Practice page and create new repertoire',
        'Add opening moves and variations manually or from games',
        'Use training mode to practice with spaced repetition'
      ]
    }
  ]

  const interfaceComponents = [
    {
      name: 'Main Board',
      description: 'Interactive chessboard for viewing and playing moves',
      features: ['Piece drag & drop', 'Move animations', 'Position editing', 'Arrow annotations']
    },
    {
      name: 'Game Notation',
      description: 'Move list with variations, comments, and analysis',
      features: ['PGN format', 'Variations support', 'Comments & annotations', 'NAG symbols']
    },
    {
      name: 'Analysis Panel',
      description: 'Engine analysis and evaluation display',
      features: ['Multiple engine support', 'Evaluation graphs', 'Best move suggestions', 'Opening book lookups']
    },
    {
      name: 'File Explorer',
      description: 'Manage your PGN files, databases, and repertoires',
      features: ['File organization', 'Search & filter', 'Metadata editing', 'Import/export']
    }
  ]

  const essentialSettings = [
    {
      category: 'Engine Configuration',
      settings: [
        'Hash Size: Set to 25-50% of your RAM for optimal performance',
        'Threads: Match your CPU core count for best analysis speed',
        'MultiPV: Set to 3-5 to see multiple best moves'
      ]
    },
    {
      category: 'Board Appearance',
      settings: [
        'Piece Set: Choose from various piece designs',
        'Board Theme: Select colors and board style',
        'Coordinates: Enable board coordinates for reference'
      ]
    },
    {
      category: 'Interface',
      settings: [
        'Language: Choose from 15+ supported languages',
        'Theme: Light, dark, or auto based on system',
        'Font Size: Adjust for comfortable reading'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Getting Started with
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Pawn Appétit
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Your complete guide to installing, configuring, and mastering the ultimate chess toolkit.
              From first launch to advanced analysis in just a few steps.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Installation Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Choose your platform and follow the step-by-step installation instructions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {installationSteps.map((platform) => (
              <div key={platform.platform} className="card p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{platform.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {platform.platform}
                  </h3>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Installation Steps:</h4>
                  <ol className="space-y-2">
                    {platform.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 bg-primary-600 text-white rounded-full text-sm font-medium flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Requirements:</h4>
                  <ul className="space-y-1">
                    {platform.requirements.map((req, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300 text-sm">
                        • {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Pawn-Appetit/pawn-appetit/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Latest Release
            </a>
          </div>
        </div>
      </section>

      {/* Quick Start Tutorial */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              15-Minute Quick Start
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Get from installation to analyzing your first game in just 15 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {quickStartSteps.map((step, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl text-white flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <ChevronRight className="h-4 w-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interface Overview */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Interface Overview
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Understand the main components of Pawn Appétit&apos;s user interface.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {interfaceComponents.map((component) => (
              <div key={component.name} className="card p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {component.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {component.description}
                </p>
                <div className="space-y-2">
                  {component.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Settings */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Essential Settings
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Configure these key settings for the optimal Pawn Appétit experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {essentialSettings.map((category) => (
              <div key={category.category} className="card p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.settings.map((setting, index) => (
                    <div key={index} className="border-l-4 border-primary-600 pl-4">
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {setting}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Dive Deeper?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Now that you&apos;re set up, explore our comprehensive user guides and advanced features.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/docs/analysis"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Game Analysis
              </a>
              <a
                href="/docs/files"
                className="text-white hover:text-primary-100 font-medium"
              >
                File Management <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}