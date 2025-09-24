'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Github, MessageCircle, Heart, Users, GitPullRequest, Bug, Lightbulb, Code, Globe } from 'lucide-react'
import { useGitHubStats, StatDisplay } from '../../hooks/useGitHubStats'

export default function Contribute() {
  const { stats } = useGitHubStats()
  const contributionTypes = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Code Contributions',
      description: 'Help improve Pawn Appétit by contributing code, fixing bugs, or adding new features.',
      actions: [
        'Fix bugs and issues',
        'Implement new features',
        'Improve performance',
        'Write tests',
        'Update documentation'
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Translations',
      description: 'Help make Pawn Appétit accessible to chess players worldwide by contributing translations.',
      actions: [
        'Translate the interface to your language',
        'Review existing translations',
        'Add missing translations',
        'Improve translation quality',
        'Test localized versions'
      ]
    },
    {
      icon: <Bug className="h-8 w-8" />,
      title: 'Bug Reports',
      description: 'Help us improve Pawn Appétit by reporting bugs and issues you encounter.',
      actions: [
        'Report bugs with detailed steps',
        'Test beta versions',
        'Verify bug fixes',
        'Provide system information',
        'Test edge cases'
      ]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Feature Requests',
      description: 'Share your ideas for new features and improvements to make Pawn Appétit better.',
      actions: [
        'Suggest new features',
        'Provide use case descriptions',
        'Create mockups or designs',
        'Participate in discussions',
        'Vote on feature proposals'
      ]
    }
  ]

  const gettingStarted = [
    {
      step: 1,
      title: 'Fork the Repository',
      description: 'Create your own copy of the Pawn Appétit repository on GitHub.',
      link: 'https://github.com/Pawn-Appetit/pawn-appetit'
    },
    {
      step: 2,
      title: 'Set Up Development Environment',
      description: 'Follow our setup guide to get the development environment running locally.',
      link: '/docs/development'
    },
    {
      step: 3,
      title: 'Pick an Issue',
      description: 'Browse open issues and pick one that matches your skill level and interests.',
      link: 'https://github.com/Pawn-Appetit/pawn-appetit/issues'
    },
    {
      step: 4,
      title: 'Create a Pull Request',
      description: 'Submit your changes for review by creating a pull request.',
      link: 'https://github.com/Pawn-Appetit/pawn-appetit/pulls'
    }
  ]

  const resources = [
    {
      title: 'Contributing Guidelines',
      description: 'Read our detailed contributing guidelines and code of conduct.',
      url: 'https://github.com/Pawn-Appetit/pawn-appetit/blob/main/CONTRIBUTING.md',
      icon: <GitPullRequest className="h-6 w-6" />
    },
    {
      title: 'Translation Guide',
      description: 'Learn how to contribute translations in your language.',
      url: 'https://github.com/Pawn-Appetit/pawn-appetit/blob/main/CONTRIBUTING_TRANSLATIONS.md',
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: 'Code of Conduct',
      description: 'Our community guidelines for respectful and inclusive collaboration.',
      url: 'https://github.com/Pawn-Appetit/pawn-appetit/blob/main/CODE_OF_CONDUCT.md',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Development Setup',
      description: 'Step-by-step guide to set up your development environment.',
      url: '/docs/development',
      icon: <Code className="h-6 w-6" />
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
              Contribute to
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Pawn Appétit
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Join our community of chess enthusiasts and developers. Help make Pawn Appétit 
              the best chess toolkit for everyone.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://github.com/Pawn-Appetit/pawn-appetit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <Github className="h-5 w-5" />
                <span>View on GitHub</span>
              </a>
              <a
                href="https://discord.gg/8hk49G8ZbX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Join Discord</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ways to Contribute
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              There are many ways to contribute to Pawn Appétit, regardless of your technical background.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {contributionTypes.map((type) => (
              <div key={type.title} className="card card-hover p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.actions.map((action, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Getting Started
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Follow these steps to start contributing to Pawn Appétit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {gettingStarted.map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Community
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Join a growing community of chess enthusiasts and developers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                <StatDisplay value={stats?.contributors || 0} fallback="39" />
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                <StatDisplay value={stats?.stars || 0} fallback="25+" />
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                <StatDisplay value={stats?.languages?.length || 0} fallback="15+" />
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Discord Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Helpful Resources
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Everything you need to get started contributing to Pawn Appétit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target={resource.url.startsWith('http') ? '_blank' : undefined}
                rel={resource.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card card-hover p-6 block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-primary-600 dark:text-primary-400">
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="card p-8 text-center">
            <Users className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contributors Wall of Fame
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We recognize and celebrate all our contributors. Every contribution, 
              no matter how small, makes a difference.
            </p>
            <a
              href="https://github.com/Pawn-Appetit/pawn-appetit/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View All Contributors
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to contribute?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Join our community and help make Pawn Appétit the best chess toolkit for everyone.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://github.com/Pawn-Appetit/pawn-appetit/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Create Your First Issue
              </a>
              <a
                href="https://discord.gg/8hk49G8ZbX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-100 font-medium"
              >
                Join the Discussion <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
