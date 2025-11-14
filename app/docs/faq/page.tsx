'use client'

import { TableOfContents } from '@/components/TableOfContents'
import { Callout } from '@/components/Callout'
import { PageNavigation } from '@/components/PageNavigation'

export default function FAQPage() {
  const tocItems = [
    { id: 'general', text: 'General Questions', level: 2 },
    { id: 'installation', text: 'Installation & Setup', level: 2 },
    { id: 'features', text: 'Features & Usage', level: 2 },
    { id: 'troubleshooting', text: 'Troubleshooting', level: 2 },
  ]

  return (
    <div className="flex">
      <div className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <span>Documentation</span>
          <span>/</span>
          <span className="text-gray-900 dark:text-gray-100">FAQ</span>
        </div>

        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Common questions and answers about Pawn Appétit.
        </p>

        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200 dark:border-gray-700" />

        <div className="prose dark:prose-invert max-w-none">
          <h2 id="general" className="text-3xl font-bold mb-6 scroll-mt-20">
            General Questions
          </h2>

          <FAQItem
            question="What is Pawn Appétit?"
            answer="Pawn Appétit is a free, open-source chess GUI designed for analysis, training, and database management."
          />

          <FAQItem
            question="Is Pawn Appétit really free?"
            answer="Yes! Pawn Appétit is 100% free and open source under the GPL-3.0 license."
          />

          <FAQItem
            question="Can I use Pawn Appétit offline?"
            answer="Yes! Pawn Appétit is a desktop application that works completely offline. Internet connection is only needed for downloading updates or accessing online databases."
          />

          <h2 id="installation" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Installation & Setup
          </h2>

          <FAQItem
            question="Which operating systems are supported?"
            answer="Pawn Appétit supports Windows, macOS, and most modern Linux distributions (Ubuntu 20.04+, Fedora, Arch, etc.)."
          />

          <FAQItem
            question="Do I need to install a chess engine separately?"
            answer="Yes, Pawn Appétit doesn't include a chess engine by default. We recommend installing Stockfish, which is free and one of the strongest engines available."
          />

          <FAQItem
            question="How do I update Pawn Appétit?"
            answer="The application will notify you when updates are available. You can either download the new version manually from GitHub or use the built-in updater."
          />

          <h2 id="features" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Features & Usage
          </h2>

          <FAQItem
            question="Can I analyze games with multiple engines?"
            answer="Yes! Pawn Appétit supports running multiple UCI engines simultaneously, allowing you to compare evaluations and find the best moves."
          />

          <FAQItem
            question="Can I import my existing PGN databases?"
            answer="Absolutely! Pawn Appétit supports importing PGN files of any size. You can import individual games or entire databases."
          />

          <h2 id="troubleshooting" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Troubleshooting
          </h2>

          <FAQItem
            question="The application won't start. What should I do?"
            answer="First, ensure your system meets the minimum requirements. On macOS, check Security & Privacy settings. On Linux, verify the AppImage has executable permissions. If issues persist, check our GitHub issues or create a new one."
          />

          <FAQItem
            question="Why isn't my engine working?"
            answer="Verify the engine path is correct and the engine file has executable permissions. The engine must be UCI-compatible. Try testing it in a terminal/command prompt first."
          />

          <FAQItem
            question="The interface is slow or laggy. How can I fix this?"
            answer="Try these steps: 1) Close unnecessary applications, 2) Reduce the number of running engines, 3) Lower engine depth/threads, 4) Check for system updates, 5) Restart the application."
          />

          <FAQItem
            question="Where can I get help if my question isn't answered here?"
            answer="You can get help through: GitHub or our Discord server for real-time chat with other users."
          />
        </div>

        <PageNavigation
          prev={{
            title: 'First Steps',
            href: '/docs/first-steps',
          }}
        />
      </div>

      <TableOfContents items={tocItems} />
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
        {question}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {answer}
      </p>
    </div>
  )
}
