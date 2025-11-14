'use client'

import { TableOfContents } from '@/components/TableOfContents'
import { Callout } from '@/components/Callout'
import { PageNavigation } from '@/components/PageNavigation'

export default function DocsIndex() {
  const tocItems = [
    { id: 'welcome', text: 'Welcome', level: 2 },
    { id: 'what-is-pawn-appetit', text: 'What is Pawn Appétit?', level: 2 },
    { id: 'key-features', text: 'Key Features', level: 2 },
    { id: 'getting-help', text: 'Getting Help', level: 2 },
  ]

  return (
    <div className="flex">
      <div className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <span>Documentation</span>
          <span>/</span>
          <span className="text-gray-900 dark:text-gray-100">Introduction</span>
        </div>

        <h1 id="welcome" className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 scroll-mt-20">
          Welcome to Pawn Appétit
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          The ultimate open-source chess analysis toolkit for players of all levels.
        </p>

        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200 dark:border-gray-700" />

        <div className="prose dark:prose-invert max-w-none">
          <h2 id="what-is-pawn-appetit" className="text-3xl font-bold mb-4 scroll-mt-20">
            What is Pawn Appétit?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Pawn Appétit is a modern, free, and open-source chess GUI (Graphical User Interface) designed
            to provide professional-grade chess analysis tools without the hefty price tag. Built with Rust
            and Tauri, it offers exceptional performance while maintaining a beautiful, intuitive interface.
          </p>

          <Callout type="info" title="Open Source">
            Pawn Appétit is completely free and open source under the GPL-3.0 license.
          </Callout>

          <h2 id="key-features" className="text-3xl font-bold mb-4 mt-12 scroll-mt-20">
            Key Features
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {[
              {
                title: '🧠 Smart Analysis',
                description: 'Deep engine analysis with support for multiple UCI engines including Stockfish.',
              },
              {
                title: '📚 Repertoire Training',
                description: 'Build and train your opening repertoire with spaced repetition.',
              },
              {
                title: '🔍 Position Search',
                description: 'Search millions of positions across your databases instantly.',
              },
              {
                title: '⚙️ Engine Management',
                description: 'Manage, configure, and compare multiple chess engines with ease.',
              },
              {
                title: '💾 Database Management',
                description: 'Organize and search through large PGN databases efficiently.',
              },
              {
                title: '🎨 Customizable UI',
                description: 'Personalize the interface with themes, board styles, and layouts.',
              },
            ].map((feature, index) => (
              <li
                key={index}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800/50"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Quick Start</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Get up and running with Pawn Appétit in just a few minutes:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li>Download the latest release for your platform (Windows, macOS, or Linux)</li>
            <li>Install and launch the application</li>
            <li>Import your games or start analyzing</li>
            <li>Configure your preferred chess engines</li>
          </ol>

          <h2 id="getting-help" className="text-3xl font-bold mb-4 mt-12 scroll-mt-20">
            Getting Help
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Need assistance? We&apos;re here to help:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">GitHub Issues:</strong>{' '}
                <span className="text-gray-700 dark:text-gray-300">
                  Report bugs or request features
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400">→</span>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Discord Community:</strong>{' '}
                <span className="text-gray-700 dark:text-gray-300">
                  Chat with other users and developers
                </span>
              </div>
            </li>
          </ul>

          <Callout type="warning" title="Pre-release Software">
            Pawn Appétit is currently in active development. While it&apos;s stable for daily use,
            you may encounter occasional bugs. Please report any issues on GitHub!
          </Callout>
        </div>

        <PageNavigation
          next={{
            title: 'Installation',
            href: '/docs/installation',
          }}
        />
      </div>

      <TableOfContents items={tocItems} />
    </div>
  )
}
