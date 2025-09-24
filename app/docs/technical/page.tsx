import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Code, Layers, Package, Terminal } from 'lucide-react'

export default function TechnicalDocumentation() {
  const architectureComponents = [
    {
      name: 'Frontend (React/TypeScript)',
      description: 'Modern web-based user interface built with React, TypeScript, and Vite',
      technologies: ['React 18', 'TypeScript', 'TanStack Router', 'Mantine UI', 'Jotai (State Management)'],
      responsibilities: [
        'User interface rendering and interaction',
        'State management and data flow',
        'Real-time updates and notifications',
        'Theme system and customization'
      ],
      location: 'src/ directory'
    },
    {
      name: 'Backend (Rust/Tauri)',
      description: 'High-performance native backend powered by Rust and the Tauri framework',
      technologies: ['Rust', 'Tauri v2', 'Tokio (Async Runtime)', 'SQLite', 'UCI Protocol'],
      responsibilities: [
        'File system operations and PGN parsing',
        'Chess engine communication (UCI)',
        'Database management and queries',
        'System integration and performance'
      ],
      location: 'src-tauri/ directory'
    },
    {
      name: 'Chess Engine Interface',
      description: 'UCI (Universal Chess Interface) communication layer',
      technologies: ['vampirc-uci', 'Tokio Process Management', 'Multi-engine Support'],
      responsibilities: [
        'Engine process lifecycle management',
        'UCI command parsing and execution',
        'Analysis result processing',
        'Engine configuration and options'
      ],
      location: 'src-tauri/src/engine/'
    },
    {
      name: 'Database Layer',
      description: 'Game storage and retrieval system with indexing',
      technologies: ['SQLite', 'Custom Indexing', 'FTS (Full-Text Search)', 'Position Hashing'],
      responsibilities: [
        'Game storage in normalized format',
        'Position-based search and filtering',
        'Player and tournament data management',
        'Performance optimization with indexes'
      ],
      location: 'src-tauri/src/db/'
    }
  ]

  const dataFlow = [
    {
      step: 'User Interaction',
      description: 'User performs action in the React frontend',
      details: ['Click, keyboard input, or menu selection', 'Event handlers capture user intent', 'State updates triggered via Jotai atoms']
    },
    {
      step: 'Tauri Command',
      description: 'Frontend calls Rust backend via Tauri commands',
      details: ['Type-safe API calls using generated bindings', 'Async communication with error handling', 'Serialization/deserialization of data']
    },
    {
      step: 'Business Logic',
      description: 'Rust backend processes the request',
      details: ['File I/O, database queries, or engine communication', 'Error handling and validation', 'Data transformation and processing']
    },
    {
      step: 'Response & Update',
      description: 'Results sent back to frontend for display',
      details: ['JSON serialization of results', 'Frontend state updates', 'UI re-rendering with new data']
    }
  ]

  const developmentSetup = [
    {
      category: 'Prerequisites',
      items: [
        'Node.js 18+ and pnpm package manager',
        'Rust toolchain (latest stable)',
        'Tauri CLI and prerequisites for your platform',
        'Git for version control'
      ]
    },
    {
      category: 'Quick Start',
      items: [
        'Clone: git clone https://github.com/Pawn-Appetit/pawn-appetit.git',
        'Install dependencies: pnpm install',
        'Start development: pnpm tauri dev',
        'Build for production: pnpm tauri build'
      ]
    },
    {
      category: 'Development Tools',
      items: [
        'ESLint and Prettier for code formatting',
        'TypeScript for type safety',
        'Vitest for frontend testing',
        'Rust analyzer for backend development'
      ]
    },
    {
      category: 'Debugging',
      items: [
        'Browser DevTools for frontend debugging',
        'Rust logs via tauri-plugin-log',
        'VSCode debugging configuration included',
        'Performance profiling with Chrome DevTools'
      ]
    }
  ]

  const apiCategories = [
    {
      category: 'File Operations',
      description: 'PGN file parsing, import/export, and file system management',
      commands: [
        'read_games(path: string) → Game[]',
        'write_game(path: string, game: Game) → Result',
        'convert_pgn(input: string, format: string) → string',
        'get_file_metadata(path: string) → FileMetadata'
      ]
    },
    {
      category: 'Engine Management',
      description: 'Chess engine communication and analysis',
      commands: [
        'get_best_moves(position: string, options: EngineOptions) → BestMoves',
        'analyze_game(game: Game, depth: number) → Analysis',
        'get_engine_config(path: string) → EngineConfig',
        'stop_engine(engine_id: string) → Result'
      ]
    },
    {
      category: 'Database Operations',
      description: 'Game storage, search, and retrieval',
      commands: [
        'create_database(path: string, name: string) → Database',
        'search_position(fen: string, db: string) → PositionStats',
        'get_games(db: string, filter: GameFilter) → Game[]',
        'delete_duplicated_games(db: string) → number'
      ]
    },
    {
      category: 'System Integration',
      description: 'Platform-specific features and system information',
      commands: [
        'memory_size() → number',
        'is_bmi2_compatible() → boolean',
        'open_external_link(url: string) → Result',
        'get_platform_info() → PlatformInfo'
      ]
    }
  ]

  const buildProcess = [
    {
      stage: 'Frontend Build',
      description: 'Vite builds the React application',
      steps: [
        'TypeScript compilation and type checking',
        'Asset optimization and bundling',
        'CSS processing with Tailwind',
        'Code splitting and tree shaking'
      ],
      output: 'dist/ directory with optimized web assets'
    },
    {
      stage: 'Rust Compilation',
      description: 'Cargo builds the Tauri backend',
      steps: [
        'Rust source compilation with optimizations',
        'Dependency resolution and linking',
        'Target platform binary generation',
        'Resource embedding and signing'
      ],
      output: 'Native executable for target platform'
    },
    {
      stage: 'Package Creation',
      description: 'Platform-specific installers are generated',
      steps: [
        'Binary and assets packaging',
        'Installer creation (.msi, .dmg, .deb, .AppImage)',
        'Code signing and notarization (if configured)',
        'Metadata and version information embedding'
      ],
      output: 'Ready-to-distribute installation packages'
    }
  ]

  const deploymentOptions = [
    {
      method: 'GitHub Releases',
      description: 'Automated releases via GitHub Actions',
      features: [
        'Cross-platform builds for Windows, macOS, Linux',
        'Automatic version detection and changelog',
        'Asset upload and release creation',
        'Download statistics and update checking'
      ],
      configuration: 'Configured in .github/workflows/release.yml'
    },
    {
      method: 'Local Build',
      description: 'Manual building for development and testing',
      features: [
        'Quick builds for testing',
        'Debug symbols for troubleshooting',
        'Custom build configurations',
        'Platform-specific optimizations'
      ],
      configuration: 'Use pnpm tauri build for production builds'
    },
    {
      method: 'Docker Build',
      description: 'Containerized building for consistency',
      features: [
        'Reproducible build environment',
        'Cross-compilation support',
        'CI/CD integration',
        'Dependency isolation'
      ],
      configuration: 'Dockerfile provided in repository root'
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
              Technical
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Documentation
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Deep dive into Pawn Appétit&apos;s architecture, APIs, development setup, and deployment processes.
              For developers and advanced users.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Application Architecture
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Pawn Appétit uses a modern hybrid architecture combining web technologies with native performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {architectureComponents.map((component, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg text-white flex-shrink-0">
                    <Layers className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {component.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {component.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {component.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {component.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Location: </span>
                    <code className="text-sm text-gray-700 dark:text-gray-300">{component.location}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Data Flow & Communication
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              How data flows through the application from user interaction to result display.
            </p>
          </div>

          <div className="space-y-8">
            {dataFlow.map((flow, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {flow.step}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {flow.description}
                    </p>
                    <ul className="space-y-2">
                      {flow.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Setup */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Development Setup
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Complete guide to setting up your development environment for contributing to Pawn Appétit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {developmentSetup.map((setup, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg text-white">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {setup.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {setup.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.includes('git clone') || item.includes('pnpm') ? (
                          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                            {item}
                          </code>
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Development Commands
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Development Mode</h4>
                  <code className="text-sm text-gray-600 dark:text-gray-400">pnpm tauri dev</code>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Hot reload for both frontend and backend</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Build Production</h4>
                  <code className="text-sm text-gray-600 dark:text-gray-400">pnpm tauri build</code>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Optimized build with installers</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Run Tests</h4>
                  <code className="text-sm text-gray-600 dark:text-gray-400">pnpm test</code>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Frontend and backend test suites</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Code Format</h4>
                  <code className="text-sm text-gray-600 dark:text-gray-400">pnpm format</code>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Format code with Prettier and Rustfmt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              API Reference
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Core Tauri commands that bridge the frontend and backend functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {apiCategories.map((category, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg text-white flex-shrink-0">
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {category.category}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.commands.map((command, commandIndex) => (
                    <div key={commandIndex} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                        {command}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 card p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Type Generation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Pawn Appétit uses TypeScript bindings automatically generated from Rust code using Specta and Tauri Specta.
            </p>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>Generated files:</strong> src/bindings/generated.ts contains all type definitions and command signatures.
                This ensures type safety between frontend and backend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Build Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Understanding how Pawn Appétit is built from source code to distributable packages.
            </p>
          </div>

          <div className="space-y-8">
            {buildProcess.map((stage, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {stage.stage}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {stage.description}
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Build Steps:</h4>
                        <ul className="space-y-2">
                          {stage.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-gray-600 dark:text-gray-300 text-sm">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Output:</h4>
                        <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                          <p className="text-green-800 dark:text-green-200 text-sm">{stage.output}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Deployment Options
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Multiple deployment strategies for different use cases and environments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {deploymentOptions.map((option, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg text-white">
                    <Package className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {option.method}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {option.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Configuration:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{option.configuration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributing */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Contribute?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Join our development community and help make Pawn Appétit even better.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contribute"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Contributing Guide
              </a>
              <a
                href="https://github.com/Pawn-Appetit/pawn-appetit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-100 font-medium"
              >
                View on GitHub <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}