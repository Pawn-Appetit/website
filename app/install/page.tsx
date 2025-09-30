import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CopyButton from '../../components/CopyButton'
import { Download, Monitor, Smartphone, CheckCircle, ExternalLink, Terminal } from 'lucide-react'

export default function Install() {
    const platforms = [
        {
            name: 'Windows',
            icon: '🖥️',
            version: 'Windows 7 and above',
            downloadUrl: 'https://github.com/Pawn-Appetit/pawn-appetit/releases/latest/download/Pawn.Appetit_0.7.1_x64-setup.exe',
            instructions: [
                'Download the Windows installer (.exe file)',
                'Run the installer as administrator',
                'Follow the installation wizard',
                'Launch Pawn Appétit from the Start menu or desktop shortcut'
            ],
            requirements: [
                'Windows 7 SP1 or later',
                '4 GB RAM (8 GB recommended)',
                '500 MB available disk space',
                'DirectX 11 compatible graphics'
            ]
        },
        {
            name: 'macOS',
            icon: '🍎',
            version: 'macOS 10.15 (Catalina) and above',
            downloadUrl: 'https://github.com/Pawn-Appetit/pawn-appetit/releases/latest/download/Pawn.Appetit_0.7.1_x64.dmg',
            instructions: [
                'Download the macOS disk image (.dmg file)',
                'Open the downloaded .dmg file',
                'Drag Pawn Appétit to your Applications folder',
                'Launch from Applications or Spotlight search'
            ],
            requirements: [
                'macOS 10.15 (Catalina) or later',
                '4 GB RAM (8 GB recommended)',
                '500 MB available disk space',
                'Intel or Apple Silicon processor'
            ]
        },
        {
            name: 'Linux',
            icon: '🐧',
            version: 'Ubuntu 22.04+ or equivalent',
            downloadUrl: 'https://github.com/Pawn-Appetit/pawn-appetit/releases/latest/download/Pawn.Appetit_0.7.1_amd64.AppImage',
            instructions: [
                'Download the Linux AppImage file',
                'Make the file executable: chmod +x pawn-appetit-linux.AppImage',
                'Run the AppImage file directly',
                'Optionally, integrate with your desktop environment'
            ],
            requirements: [
                'Ubuntu 22.04+ or equivalent distribution',
                'webkit2gtk 4.1 or later',
                '4 GB RAM (8 GB recommended)',
                '500 MB available disk space'
            ]
        }
    ]

    const buildFromSource = {
        prerequisites: [
            { name: 'Tauri prerequisites', url: 'https://tauri.app/start/prerequisites/' },
            { name: 'pnpm package manager', url: 'https://pnpm.io/' },
            { name: 'Node.js 18+', url: 'https://nodejs.org/' },
            { name: 'Rust toolchain', url: 'https://rustup.rs/' }
        ],
        steps: [
            {
                title: 'Clone the repository',
                command: 'git clone https://github.com/Pawn-Appetit/pawn-appetit.git\ncd pawn-appetit'
            },
            {
                title: 'Install dependencies',
                command: 'pnpm install'
            },
            {
                title: 'Run in development mode',
                command: 'pnpm tauri dev'
            },
            {
                title: 'Build for production',
                command: 'pnpm tauri build'
            }
        ]
    }

    const faqs = [
        {
            question: 'Is Pawn Appétit free to use?',
            answer: 'Yes, Pawn Appétit is completely free and open-source under the GPL-3.0 license. You can use it without any restrictions.'
        },
        {
            question: 'Do I need an internet connection to use Pawn Appétit?',
            answer: 'No, Pawn Appétit works completely offline. However, some features like importing games from online platforms require an internet connection.'
        },
        {
            question: 'Can I import my existing games and databases?',
            answer: 'Yes, you can import games in PGN format and databases in various formats. The application supports standard chess formats.'
        },
        {
            question: 'How do I install chess engines?',
            answer: 'Pawn Appétit includes an engine manager that makes it easy to install and configure UCI-compatible engines with just a few clicks.'
        },
        {
            question: 'Is my data secure and private?',
            answer: 'Yes, all your data is stored locally on your device. Pawn Appétit includes optional anonymous telemetry that can be disabled in settings.'
        },
        {
            question: 'How do I update to the latest version?',
            answer: 'Pawn Appétit includes an automatic update checker. You can also manually download the latest version from GitHub releases.'
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
                            Install
                            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                                {" "}Pawn Appétit
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
                            Get started with Pawn Appétit in minutes. Choose your platform and follow the
                            simple installation instructions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Download Buttons */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Choose Your Platform
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Pawn Appétit is available for all major desktop platforms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {platforms.map((platform) => (
                            <div key={platform.name} className="card card-hover p-6">
                                <div className="text-center mb-6">
                                    <div className="text-4xl mb-4">{platform.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {platform.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        {platform.version}
                                    </p>
                                </div>

                                <a
                                    href={platform.downloadUrl}
                                    className="btn-primary w-full flex items-center justify-center space-x-2 mb-6"
                                >
                                    <Download className="h-5 w-5" />
                                    <span>Download for {platform.name}</span>
                                </a>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                            Installation Steps:
                                        </h4>
                                        <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                            {platform.instructions.map((step, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="font-medium">{index + 1}.</span>
                                                    <span>{step}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                            System Requirements:
                                        </h4>
                                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                            {platform.requirements.map((req, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span>{req}</span>
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

            {/* Build from Source */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Build from Source
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                For developers who want to build Pawn Appétit from source code.
                            </p>
                        </div>

                        <div className="card p-8">
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Prerequisites
                                </h3>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {buildFromSource.prerequisites.map((prereq) => (
                                        <a
                                            key={prereq.name}
                                            href={prereq.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                                        >
                                            <ExternalLink className="h-5 w-5 text-gray-400" />
                                            <span className="text-gray-900 dark:text-white">{prereq.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Build Instructions
                                </h3>
                                <div className="space-y-6">
                                    {buildFromSource.steps.map((step, index) => (
                                        <div key={index}>
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-medium text-gray-900 dark:text-white">
                                                    {index + 1}. {step.title}
                                                </h4>
                                                <CopyButton
                                                    text={step.command}
                                                    className="p-1.5"
                                                />
                                            </div>
                                            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">
                                                <code>{step.command}</code>
                                            </pre>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                                            Development Mode
                                        </p>
                                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                                            Use <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">pnpm tauri dev</code> for
                                            development with hot reload. The production build will be available in
                                            <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded ml-1">src-tauri/target/release</code>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Coming Soon
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            We&apos;re working on bringing Pawn Appétit to more platforms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="card p-6 border-dashed opacity-75">
                            <div className="text-center">
                                <Smartphone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    Android App
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Native Android application for chess analysis on mobile devices.
                                </p>
                            </div>
                        </div>

                        <div className="card p-6 border-dashed opacity-75">
                            <div className="text-center">
                                <Smartphone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    iOS App
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Native iOS application for iPhone and iPad users.
                                </p>
                            </div>
                        </div>

                        <div className="card p-6 border-dashed opacity-75">
                            <div className="text-center">
                                <Monitor className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    Web Version
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Browser-based version for instant access without installation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
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

            {/* Support */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Need Help?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            If you encounter any issues during installation, our community is here to help.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://discord.gg/8hk49G8ZbX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                Join Discord
                            </a>
                            <a
                                href="https://github.com/Pawn-Appetit/pawn-appetit/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline"
                            >
                                Report Issue
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
