import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Users, Heart, Code, Globe, MessageSquare, Bug, Star, Coffee, Award } from 'lucide-react'

export default function Community() {
  const communityChannels = [
    {
      name: 'Discord Server',
      description: 'Join our active community for real-time discussions, help, and updates.',
      icon: <MessageSquare className="h-6 w-6" />,
      link: 'https://discord.gg/8hk49G8ZbX',
      members: '500+ members',
      activity: 'Very Active'
    },
    {
      name: 'GitHub Repository',
      description: 'Contribute code, report bugs, and follow development progress.',
      icon: <Code className="h-6 w-6" />,
      link: 'https://github.com/Pawn-Appetit/pawn-appetit',
      members: '50+ contributors',
      activity: 'Daily commits'
    },
    {
      name: 'Reddit Community',
      description: 'Share games, discuss features, and connect with other chess enthusiasts.',
      icon: <Users className="h-6 w-6" />,
      link: 'https://reddit.com/r/pawnappetit',
      members: '200+ subscribers',
      activity: 'Weekly posts'
    },
    {
      name: 'Chess Forums',
      description: 'Participate in chess community discussions about modern chess tools.',
      icon: <Globe className="h-6 w-6" />,
      link: 'https://lichess.org/forum',
      members: 'Cross-platform',
      activity: 'Ongoing'
    }
  ]

  const contributionTypes = [
    {
      title: 'Code Contributions',
      description: 'Help improve Pawn Appétit with bug fixes, new features, and optimizations.',
      icon: <Code className="h-6 w-6" />,
      skills: ['Rust', 'TypeScript', 'React', 'Tauri'],
      examples: [
        'Fix reported bugs and issues',
        'Implement new analysis features',
        'Improve UI/UX components',
        'Optimize performance bottlenecks',
        'Add new engine integrations'
      ]
    },
    {
      title: 'Documentation',
      description: 'Create guides, tutorials, and help resources for users and developers.',
      icon: <Globe className="h-6 w-6" />,
      skills: ['Technical Writing', 'Markdown', 'Chess Knowledge'],
      examples: [
        'Write feature tutorials',
        'Create video guides',
        'Translate documentation',
        'Update API documentation',
        'Improve installation guides'
      ]
    },
    {
      title: 'Testing & QA',
      description: 'Test new releases, report bugs, and help ensure quality and stability.',
      icon: <Bug className="h-6 w-6" />,
      skills: ['Testing', 'Bug Reporting', 'Quality Assurance'],
      examples: [
        'Test beta releases',
        'Report detailed bug reports',
        'Verify bug fixes',
        'Test on different platforms',
        'Performance testing'
      ]
    },
    {
      title: 'Design & UX',
      description: 'Improve the visual design, user experience, and accessibility.',
      icon: <Star className="h-6 w-6" />,
      skills: ['UI Design', 'UX Research', 'Figma', 'CSS'],
      examples: [
        'Design new UI components',
        'Create icons and graphics',
        'Improve accessibility',
        'Design board themes',
        'User experience research'
      ]
    }
  ]

  const developmentWorkflow = [
    {
      step: 'Fork & Clone',
      description: 'Create your own copy of the repository to work on.',
      commands: [
        'git clone https://github.com/yourusername/pawn-appetit.git',
        'cd pawn-appetit',
        'git remote add upstream https://github.com/Pawn-Appetit/pawn-appetit.git'
      ]
    },
    {
      step: 'Set Up Development',
      description: 'Install dependencies and set up your development environment.',
      commands: [
        'npm install',
        'npm run tauri:dev'
      ]
    },
    {
      step: 'Create Feature Branch',
      description: 'Work on features in separate branches for easy collaboration.',
      commands: [
        'git checkout -b feature/your-feature-name',
        'git push -u origin feature/your-feature-name'
      ]
    },
    {
      step: 'Make Changes',
      description: 'Implement your feature or fix following our coding standards.',
      commands: [
        'npm run test',
        'npm run lint',
        'npm run format'
      ]
    },
    {
      step: 'Submit Pull Request',
      description: 'Share your changes with the community for review and integration.',
      commands: [
        'git add .',
        'git commit -m "feat: descriptive commit message"',
        'git push origin feature/your-feature-name'
      ]
    }
  ]

  const communityGuidelines = [
    {
      title: 'Be Respectful',
      description: 'Treat all community members with kindness and respect. We welcome people of all skill levels and backgrounds.',
      icon: <Heart className="h-5 w-5 text-red-500" />
    },
    {
      title: 'Stay On Topic',
      description: 'Keep discussions relevant to Pawn Appétit, chess software, or related topics. Off-topic posts may be moved or removed.',
      icon: <MessageSquare className="h-5 w-5 text-blue-500" />
    },
    {
      title: 'Help Others',
      description: 'Share your knowledge and help fellow users. Answer questions, provide feedback, and contribute to discussions.',
      icon: <Users className="h-5 w-5 text-green-500" />
    },
    {
      title: 'Search Before Asking',
      description: 'Check existing issues, documentation, and discussions before posting new questions or bug reports.',
      icon: <Bug className="h-5 w-5 text-yellow-500" />
    },
    {
      title: 'Provide Details',
      description: 'Include system info, error messages, and steps to reproduce when reporting issues. Quality reports help us fix problems faster.',
      icon: <Code className="h-5 w-5 text-purple-500" />
    },
    {
      title: 'Give Credit',
      description: 'Acknowledge contributions from others and respect intellectual property. Cite sources and give proper attribution.',
      icon: <Award className="h-5 w-5 text-orange-500" />
    }
  ]

  const recognitionPrograms = [
    {
      title: 'Contributor Recognition',
      description: 'Active contributors are featured in our README and release notes.',
      benefits: ['GitHub profile visibility', 'Special Discord role', 'Early access to features']
    },
    {
      title: 'Feature Sponsorship',
      description: 'Sponsor specific features or improvements you\'d like to see implemented.',
      benefits: ['Priority development', 'Design input', 'Public acknowledgment']
    },
    {
      title: 'Community Leader',
      description: 'Experienced users can become community moderators and mentors.',
      benefits: ['Moderation privileges', 'Roadmap influence', 'Direct developer contact']
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
              Community &amp;
              <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {" "}Contribution
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Join our growing community of chess enthusiasts and developers. 
              Contribute to making Pawn Appétit even better for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Connect with fellow chess players, get help, and stay updated on the latest developments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {communityChannels.map((channel, index) => (
              <div key={index} className="card p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg text-white flex-shrink-0">
                    {channel.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {channel.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {channel.description}
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {channel.members}
                      </span>
                      <span className="text-sm text-green-600 dark:text-green-400">
                        {channel.activity}
                      </span>
                    </div>
                    <a
                      href={channel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                    >
                      Join Now
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ways to Contribute
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Every contribution matters, whether you&apos;re a developer, designer, writer, or chess enthusiast.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {contributionTypes.map((type, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg text-white">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {type.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {type.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Skills Needed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Development Workflow
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Follow these steps to contribute code to Pawn Appétit. We use a standard GitHub workflow.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {developmentWorkflow.map((step, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    {index < developmentWorkflow.length - 1 && (
                      <div className="w-0.5 h-20 bg-gray-300 dark:bg-gray-600 mt-4"></div>
                    )}
                  </div>

                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {step.step}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {step.description}
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <code className="text-sm text-gray-800 dark:text-gray-200">
                        {step.commands.map((command, commandIndex) => (
                          <div key={commandIndex} className="mb-1">
                            <span className="text-gray-500 dark:text-gray-400">$ </span>
                            {command}
                          </div>
                        ))}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Community Guidelines
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We foster an inclusive, helpful, and respectful community for all members.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {communityGuidelines.map((guideline, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {guideline.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {guideline.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {guideline.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Programs */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Recognition &amp; Rewards
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We appreciate our contributors and provide various ways to recognize their efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {recognitionPrograms.map((program, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl text-white mx-auto mb-6">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center justify-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Contribute?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Join our community today and help make Pawn Appétit the best chess software for everyone.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://github.com/Pawn-Appetit/pawn-appetit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                <Code className="inline h-5 w-5 mr-2" />
                Start Contributing
              </a>
              <a
                href="https://discord.gg/8hk49G8ZbX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-100 font-medium"
              >
                <Coffee className="inline h-5 w-5 mr-2" />
                Join Discord <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}