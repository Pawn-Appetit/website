import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Mail, MessageCircle, Github, Send, MapPin, Users, Coffee, Heart } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Discord Community',
      description: 'Join our Discord server for real-time discussions, support, and community interaction.',
      action: 'Join Discord',
      url: 'https://discord.gg/8hk49G8ZbX',
      primary: true
    },
    {
      icon: <Github className="h-8 w-8" />,
      title: 'GitHub Issues',
      description: 'Report bugs, request features, or contribute to the project on GitHub.',
      action: 'Visit GitHub',
      url: 'https://github.com/Pawn-Appetit/pawn-appetit'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Support',
      description: 'For business inquiries, partnerships, or private matters.',
      action: 'Send Email',
      url: 'mailto:contact@pawnappetit.com'
    }
  ]

  const teamContacts = [
    {
      name: 'Rustam Abrahamyan',
      role: 'Project Maintainer',
      description: 'For development questions, project direction, and partnerships.',
      github: 'https://github.com/Rustam-Abrahamyan',
      avatar: '👨‍💻'
    },
    {
      name: 'Francisco Salgueiro',
      role: 'Original Creator',
      description: 'Creator of En Croissant, the foundation of Pawn Appétit.',
      github: 'https://github.com/franciscoBSalgueiro',
      avatar: '👨‍💻'
    }
  ]

  const faqs = [
    {
      question: 'How can I report a bug?',
      answer: 'The best way to report a bug is by creating an issue on our GitHub repository. Please include detailed steps to reproduce the issue, your system information, and any relevant screenshots.'
    },
    {
      question: 'How can I suggest a new feature?',
      answer: 'You can suggest new features by creating a feature request on GitHub or discussing it in our Discord community. We welcome all ideas and consider them carefully.'
    },
    {
      question: 'Can I contribute to the project?',
      answer: 'Absolutely! We welcome contributions of all kinds - code, documentation, translations, testing, and more. Check out our contributing guide to get started.'
    },
    {
      question: 'Is there commercial support available?',
      answer: 'While Pawn Appétit is open source and free, we may consider providing commercial support or custom development. Please contact us via email to discuss your needs.'
    },
    {
      question: 'How can I stay updated with new releases?',
      answer: 'You can watch our GitHub repository, join our Discord server, or subscribe to our newsletter to get notified about new releases and updates.'
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
              Get in
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Touch
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Have questions, suggestions, or want to contribute? We&apos;d love to hear from you. 
              Here&apos;s how you can reach us and get involved with the Pawn Appétit community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ways to Connect
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Choose the best way to reach us based on your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className={`card card-hover p-8 text-center ${
                  method.primary ? 'ring-2 ring-primary-500 dark:ring-primary-400' : ''
                }`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white mx-auto mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {method.description}
                </p>
                <a
                  href={method.url}
                  target={method.url.startsWith('http') ? '_blank' : undefined}
                  rel={method.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={method.primary ? 'btn-primary' : 'btn-secondary'}
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Have a specific question or inquiry? Fill out the form below and we&apos;ll get back to you.
              </p>
            </div>

            <div className="card p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="bug-report">Bug Report</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="general-question">General Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your question, suggestion, or how we can help..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Subscribe to our newsletter for updates and chess tips
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Meet the Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Get in touch with specific team members for specialized inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {teamContacts.map((contact) => (
              <div key={contact.name} className="card card-hover p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{contact.avatar}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {contact.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {contact.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {contact.description}
                    </p>
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Common questions about contacting us and getting involved.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Join Our Growing Community
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Discord Members</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 mx-auto mb-4">
                <Github className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">39</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Contributors</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 mx-auto mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">∞</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Chess Love</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Coffee className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something amazing together
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Whether you&apos;re a developer, designer, chess player, or enthusiast, 
              there&apos;s a place for you in our community.
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
                href="/contribute"
                className="text-white hover:text-primary-100 font-medium"
              >
                Start Contributing <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
