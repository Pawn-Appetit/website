import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { BookOpen, FileText, Code, HelpCircle, ExternalLink } from 'lucide-react'

export default function Docs() {
  const docSections = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'User Guide',
      description: 'Complete guide to using Pawn Appétit for chess analysis and training.',
      links: [
        { name: 'Getting Started', href: '/docs/getting-started' },
        { name: 'Game Analysis', href: '/docs/analysis' },
        { name: 'Engine Management', href: '/docs/engines' },
        { name: 'Databases', href: '/docs/databases' },
        { name: 'Files', href: '/docs/files' },
        { name: 'Accounts', href: '/docs/accounts' },
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Technical Documentation',
      description: 'Architecture, API reference, and development guides for developers.',
      links: [
        { name: 'Technical Overview & Development Setup', href: '/docs/technical' },
      ]
    },
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: 'FAQ & Troubleshooting',
      description: 'Common questions and solutions to frequent issues.',
      links: [
        { name: 'Frequently Asked Questions', href: '/docs/faq' },
        { name: 'Installation Issues', href: '/docs/faq' },
        { name: 'Engine Problems', href: '/docs/faq' },
        { name: 'Performance Tips', href: '/docs/faq' },
        { name: 'Community Support', href: '/docs/community' }
      ]
    }
  ]

  const quickStart = [
    {
      step: 1,
      title: 'Download & Install',
      description: 'Get Pawn Appétit for your platform and complete the installation.'
    },
    {
      step: 2,
      title: 'Import Your First Game',
      description: 'Load a PGN file or import a game from an online platform.'
    },
    {
      step: 3,
      title: 'Analyze with Engines',
      description: 'Set up a chess engine and start analyzing your games.'
    },
    {
      step: 4,
      title: 'Build Your Repertoire',
      description: 'Create opening repertoires and practice with spaced repetition.'
    }
  ]

  const resources = [
    {
      title: 'Community Forum',
      description: 'Get help from the community and share tips.',
      url: 'https://discord.gg/8hk49G8ZbX',
      icon: '💬'
    },
    {
      title: 'GitHub Issues',
      description: 'Report bugs and request features.',
      url: 'https://github.com/Pawn-Appetit/pawn-appetit/issues',
      icon: '🐛'
    },
    {
      title: 'Contributing Guide',
      description: 'Learn how to contribute to the project.',
      url: '/contribute',
      icon: '🤝'
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
              Documentation &amp;
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Guides
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Everything you need to master Pawn Appétit, from basic usage to advanced 
              features and development guides.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Quick Start Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Get up and running with Pawn Appétit in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {quickStart.map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/docs/getting-started"
              className="btn-primary"
            >
              Start the Full Tutorial
            </a>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Documentation Sections
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Comprehensive guides and references for all aspects of Pawn Appétit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {docSections.map((section) => (
              <div key={section.title} className="card card-hover p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {section.description}
                </p>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                      >
                        <FileText className="h-4 w-4" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Additional Resources
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              More ways to learn and get help with Pawn Appétit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target={resource.url.startsWith('http') ? '_blank' : undefined}
                rel={resource.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card card-hover p-6 block text-center"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {resource.description}
                </p>
                {resource.url.startsWith('http') && (
                  <ExternalLink className="h-4 w-4 text-gray-400 mx-auto mt-3" />
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Our community is here to help. Join our Discord server or create an issue on GitHub.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://discord.gg/8hk49G8ZbX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Join Discord
              </a>
              <a
                href="https://github.com/Pawn-Appetit/pawn-appetit/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-100 font-medium"
              >
                Create Issue <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
