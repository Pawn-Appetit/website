import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { HelpCircle, AlertTriangle, Monitor, Cpu, Database, Settings, Download } from 'lucide-react'

export default function FAQ() {
  const faqCategories = [
    {
      title: 'General Questions',
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          question: 'What is Pawn Appétit?',
          answer: 'Pawn Appétit is a modern, cross-platform chess GUI application built with Tauri/Rust and web technologies. It combines powerful analysis tools, repertoire training with spaced repetition, and database management in one application. It\'s designed for chess coaches, competitive players, and enthusiasts who want professional-grade tools without complexity.'
        },
        {
          question: 'Is Pawn Appétit free?',
          answer: 'Yes, Pawn Appétit is completely free and open source under the GPL-3.0 license. There are no subscription fees, premium features, or hidden costs. You can download, use, and even modify the source code freely.'
        },
        {
          question: 'What platforms are supported?',
          answer: 'Pawn Appétit runs on Windows 10+, macOS 10.15+, and modern Linux distributions. We provide native installers for each platform (.msi for Windows, .dmg for macOS, .deb/.rpm/.AppImage for Linux).'
        },
        {
          question: 'How does Pawn Appétit compare to ChessBase?',
          answer: 'Pawn Appétit offers many similar features to ChessBase but is free, open source, and runs on all platforms. While ChessBase has more advanced features for professional analysis, Pawn Appétit provides excellent tools for most chess players at no cost, with a modern interface and active development.'
        },
        {
          question: 'Can I import my existing chess databases?',
          answer: 'Yes, Pawn Appétit supports standard PGN format files, which can contain single games or entire databases. You can import from most chess software, including ChessBase (export to PGN), Chess.com, Lichess, and other UCI-compatible programs.'
        }
      ]
    },
    {
      title: 'Installation & Setup',
      icon: <Download className="h-6 w-6" />,
      questions: [
        {
          question: 'The app won\'t start after installation. What should I do?',
          answer: 'First, ensure your system meets the minimum requirements. On Windows, try running as administrator. On macOS, right-click and select "Open" the first time to bypass Gatekeeper. On Linux, make sure the AppImage is executable (chmod +x). Check our troubleshooting guide for platform-specific solutions.'
        },
        {
          question: 'How much disk space does Pawn Appétit require?',
          answer: 'The application itself is around 50MB. However, you\'ll need additional space for chess engines (50-200MB each), databases (varies by size), and your game files. We recommend having at least 1GB free space for a comfortable experience.'
        },
        {
          question: 'Can I install Pawn Appétit alongside other chess software?',
          answer: 'Yes, Pawn Appétit can coexist with ChessBase, Arena, SCID, and other chess software. It uses its own data directory and won\'t interfere with other applications. You can even share engines between applications.'
        },
        {
          question: 'How do I update to the latest version?',
          answer: 'Pawn Appétit includes automatic update checking. When a new version is available, you\'ll see a notification in the app. You can also manually check for updates in Help → Check for Updates, or download the latest version from our GitHub releases page.'
        },
        {
          question: 'What are the system requirements?',
          answer: 'Minimum: 4GB RAM, modern CPU (last 5 years), 1GB disk space. Recommended: 8GB+ RAM for large databases, multi-core CPU for engine analysis, SSD for better performance. More RAM allows for stronger engine analysis with larger hash tables.'
        }
      ]
    },
    {
      title: 'Engine Problems',
      icon: <Cpu className="h-6 w-6" />,
      questions: [
        {
          question: 'My engine analysis is very slow. How can I speed it up?',
          answer: 'Increase the Hash size in engine settings (25-50% of your RAM), set Threads to match your CPU cores, close other resource-intensive applications, and ensure you\'re using a compatible engine version (check BMI2 support for your CPU).'
        },
        {
          question: 'The engine shows as "disconnected" or won\'t start.',
          answer: 'Verify the engine path is correct, check file permissions (especially on Linux/macOS), ensure the engine file exists and is executable, try reducing Hash size if you\'re low on memory, and check if antivirus software is blocking the engine.'
        },
        {
          question: 'How do I install additional engines?',
          answer: 'Go to Engines page and click "Add Engine". You can either download engines automatically (recommended for Stockfish), install via package manager (brew on macOS, apt on Linux), or manually download and browse to the engine executable.'
        },
        {
          question: 'Which engine should I use for analysis?',
          answer: 'Stockfish 17+ is recommended for most users due to its strength and reliability. Leela Chess Zero (LC0) offers unique positional insights with neural network evaluation. For learning, you might prefer engines with adjustable strength levels.'
        },
        {
          question: 'Can I use multiple engines simultaneously?',
          answer: 'Yes, Pawn Appétit supports multiple engine analysis. Add several engines and enable them all for comparison. This is useful for getting different perspectives on positions, especially comparing traditional engines with neural network engines.'
        }
      ]
    },
    {
      title: 'Import & Database Issues',
      icon: <Database className="h-6 w-6" />,
      questions: [
        {
          question: 'PGN import fails or shows errors.',
          answer: 'Check that your PGN file is valid (some online converters create malformed files), try importing a smaller subset first, ensure the file encoding is UTF-8, and check for special characters or annotations that might cause parsing issues.'
        },
        {
          question: 'Chess.com import is very slow or fails.',
          answer: 'Chess.com has API rate limits, so large collections take time. Try importing smaller date ranges, check your internet connection, ensure your username is correct, and be patient with large archives (they can take hours).'
        },
        {
          question: 'How do I organize my game collections?',
          answer: 'Use the Files section to create folders for different purposes (tournaments, openings, training games). Add metadata tags to games, use the star rating system for important games, and consider creating separate databases for different time controls or formats.'
        },
        {
          question: 'The search function isn\'t finding my games.',
          answer: 'Ensure you\'re searching in the correct database, check spelling of player names, use partial searches (e.g., "Carlsen" instead of "Magnus Carlsen"), rebuild search indexes if needed (Database → Maintenance), and try position-based search for tactical motifs.'
        },
        {
          question: 'Can I export games to other formats?',
          answer: 'Yes, Pawn Appétit supports exporting to standard PGN format, which is compatible with most chess software. You can export individual games, filtered collections, or entire databases. Analysis annotations are preserved in the export.'
        }
      ]
    },
    {
      title: 'Performance & Platform Issues',
      icon: <Monitor className="h-6 w-6" />,
      questions: [
        {
          question: 'The app feels slow or unresponsive.',
          answer: 'Close other applications to free up memory, reduce engine Hash size if using too much RAM, use an SSD if possible for better I/O performance, update to the latest version, and consider reducing the number of simultaneous engine analyses.'
        },
        {
          question: 'High memory usage with large databases.',
          answer: 'This is normal for large databases. Consider splitting databases into smaller collections, close unused databases, reduce engine Hash size to free up memory, and ensure you have sufficient RAM for your database sizes.'
        },
        {
          question: 'Font size is too small/large.',
          answer: 'Go to Settings → Interface → Font Size and adjust to your preference. You can also use Ctrl+Plus/Minus (Cmd+Plus/Minus on Mac) to zoom the interface temporarily.'
        },
        {
          question: 'The app crashes on startup (Windows).',
          answer: 'Try running as administrator, temporarily disable antivirus, check Windows updates, ensure you have Visual C++ Redistributables installed, and try compatibility mode if using an older Windows version.'
        },
        {
          question: 'macOS says the app is damaged or from an unidentified developer.',
          answer: 'Right-click the app and select "Open" instead of double-clicking. Confirm you want to open it. This bypasses Gatekeeper for apps not notarized by Apple. You only need to do this once.'
        }
      ]
    },
    {
      title: 'Features & Usage',
      icon: <Settings className="h-6 w-6" />,
      questions: [
        {
          question: 'How does the spaced repetition system work?',
          answer: 'The system schedules repertoire practice based on your performance. New lines appear daily, well-known lines appear weekly or monthly. The interval increases each time you get it right and decreases when you make mistakes. This optimizes learning efficiency.'
        },
        {
          question: 'Can I customize the board and pieces?',
          answer: 'Yes, go to Settings → Board to choose from various piece sets, board colors, and themes. You can also adjust board size, coordinates display, and move highlighting. The theme system allows for extensive customization.'
        },
        {
          question: 'How do I create opening repertoires?',
          answer: 'Go to Practice → Create New Repertoire, choose your color, add moves by playing them on the board or import from games. You can add variations, comments, and training notes. The system will schedule practice sessions automatically.'
        },
        {
          question: 'What file formats are supported?',
          answer: 'Pawn Appétit primarily uses PGN (Portable Game Notation) for games and databases. FEN (Forsyth-Edwards Notation) is supported for positions. UCI engines are supported for analysis. Custom file formats include repertoire files and theme files.'
        },
        {
          question: 'Can I analyze correspondence games?',
          answer: 'Yes, import your correspondence games as PGN files and use engine analysis to find improvements. You can add your own comments and variations, save multiple analysis sessions, and export the analyzed games for further study.'
        }
      ]
    }
  ]

  const commonProblems = [
    {
      title: 'Application Won\'t Start',
      severity: 'High',
      symptoms: ['App crashes immediately', 'Error on startup', 'Blank window'],
      solutions: [
        'Check system requirements (Windows 10+, macOS 10.15+, modern Linux)',
        'Run as administrator/with elevated privileges',
        'Check antivirus exclusions',
        'Reinstall with fresh download',
        'Clear application data (backup first)'
      ]
    },
    {
      title: 'Poor Analysis Performance',
      severity: 'Medium',
      symptoms: ['Slow engine responses', 'Low analysis depth', 'System lag'],
      solutions: [
        'Increase engine Hash size (use 25-50% of total RAM)',
        'Set engine Threads to match CPU cores',
        'Use SSD instead of HDD for better I/O',
        'Close unnecessary applications',
        'Update to latest engine versions'
      ]
    },
    {
      title: 'Import Failures',
      severity: 'Medium',
      symptoms: ['PGN files won\'t import', 'Missing games', 'Import errors'],
      solutions: [
        'Validate PGN format using online checkers',
        'Try importing smaller file sections',
        'Check file encoding (should be UTF-8)',
        'Remove unusual characters or annotations',
        'Use alternative PGN export from source'
      ]
    },
    {
      title: 'Missing Features',
      severity: 'Low',
      symptoms: ['Expected functionality not available', 'Menu items grayed out'],
      solutions: [
        'Check if feature requires engine installation',
        'Verify database is selected for database features',
        'Update to latest version for new features',
        'Check feature requirements in documentation',
        'Enable feature in Settings if configurable'
      ]
    }
  ]

  const troubleshootingSteps = [
    {
      step: 'Identify the Problem',
      description: 'Document exactly what\'s happening and when',
      actions: [
        'Note error messages or symptoms',
        'Identify when the problem occurs',
        'Check if it\'s reproducible',
        'Note system information (OS, version, specs)'
      ]
    },
    {
      step: 'Check Common Solutions',
      description: 'Try standard fixes for your type of problem',
      actions: [
        'Restart Pawn Appétit',
        'Check for updates',
        'Review system requirements',
        'Verify file permissions'
      ]
    },
    {
      step: 'Gather Information',
      description: 'Collect details for further troubleshooting',
      actions: [
        'Check application logs (Help → Open Logs)',
        'Note system specifications',
        'List installed engines and versions',
        'Document exact steps to reproduce'
      ]
    },
    {
      step: 'Seek Help',
      description: 'Get assistance from the community or developers',
      actions: [
        'Search existing GitHub issues',
        'Ask on Discord community server',
        'Create detailed bug report if needed',
        'Include logs and system information'
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
              FAQ &amp;
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Troubleshooting
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Find answers to common questions and solutions to frequent issues. 
              Get help with installation, configuration, and usage problems.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Troubleshooting */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Quick Troubleshooting
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Step-by-step approach to diagnosing and solving problems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {troubleshootingSteps.map((step, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary-600 rounded-full text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {step.step}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Common Problems
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Frequent issues and their solutions, ranked by severity and frequency.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {commonProblems.map((problem, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg text-white flex-shrink-0 ${
                    problem.severity === 'High' ? 'bg-red-500' : 
                    problem.severity === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}>
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {problem.title}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        problem.severity === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                        problem.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      }`}>
                        {problem.severity}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Symptoms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {problem.symptoms.map((symptom, symptomIndex) => (
                        <span key={symptomIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Solutions:</h4>
                    <ol className="space-y-2">
                      {problem.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-5 h-5 bg-green-600 text-white rounded-full text-xs font-medium flex-shrink-0">
                            {solutionIndex + 1}
                          </span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Comprehensive answers to questions organized by category.
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-8">
                  {category.questions.map((qa, qaIndex) => (
                    <div key={qaIndex} className="border-l-4 border-primary-600 pl-6">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                        {qa.question}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {qa.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get More Help */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Still Need Help?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Our community and developers are here to help. Don&apos;t hesitate to reach out!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://discord.gg/8hk49G8ZbX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Join Discord Community
              </a>
              <a
                href="https://github.com/Pawn-Appetit/pawn-appetit/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-100 font-medium"
              >
                Report an Issue <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}