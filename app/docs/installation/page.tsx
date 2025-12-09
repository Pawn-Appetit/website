'use client'

import { TableOfContents } from '@/components/TableOfContents'
import { Callout } from '@/components/Callout'
import { PageNavigation } from '@/components/PageNavigation'
import { Download, Apple, Monitor, Terminal, ExternalLink } from 'lucide-react'
import CopyButton from '@/components/CopyButton'

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
};

export default function InstallationPage() {
    const tocItems = [
        { id: 'system-requirements', text: 'System Requirements', level: 2 },
        { id: 'windows', text: 'Windows', level: 2 },
        { id: 'macos', text: 'macOS', level: 2 },
        { id: 'linux', text: 'Linux', level: 2 },
        { id: 'verify-installation', text: 'Verify Installation', level: 2 },
    ]

    return (
        <div className="flex">
            <div className="flex-1 max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <span>Documentation</span>
                    <span>/</span>
                    <span>Getting Started</span>
                    <span>/</span>
                    <span className="text-gray-900 dark:text-gray-100">Installation</span>
                </div>

                <h1 id="installation" className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    Installation
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    Get Pawn Appétit running on Windows, macOS, or Linux in minutes.
                </p>

                <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200 dark:border-gray-700" />

                <div className="prose dark:prose-invert max-w-none">
                    <h2 id="system-requirements" className="text-3xl font-bold mb-4 scroll-mt-20">
                        System Requirements
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Pawn Appétit is designed to run on modern desktop systems with minimal requirements:
                    </p>

                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                        <li><strong>OS:</strong> Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)</li>
                        <li><strong>RAM:</strong> 4GB minimum (8GB recommended)</li>
                        <li><strong>Storage:</strong> 500MB for the application</li>
                        <li><strong>Display:</strong> 1280x720 minimum resolution</li>
                    </ul>

                    <h2 id="windows" className="text-3xl font-bold mb-4 mt-12 scroll-mt-20 flex items-center gap-3">
                        <Monitor className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        Windows Installation
                    </h2>

                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Download the latest <code>.msi</code> installer from the releases page</li>
                        <li>Double-click the downloaded file to start the installation wizard</li>
                        <li>Follow the on-screen instructions</li>
                        <li>Launch Pawn Appétit from the Start menu</li>
                    </ol>

                    <a
                        href="https://github.com/Pawn-Appetit/pawn-appetit/releases/download/v0.10.0/Pawn.Appetit_0.10.0_x64-setup.exe"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors mb-6"
                    >
                        <Download className="w-5 h-5" />
                        Download for Windows
                    </a>


                    <h2 id="macos" className="text-3xl font-bold mb-4 mt-12 scroll-mt-20 flex items-center gap-3">
                        <Apple className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        macOS Installation
                    </h2>

                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Download the <code>.dmg</code> file from the releases page</li>
                        <li>Open the downloaded DMG file</li>
                        <li>Drag Pawn Appétit to your Applications folder</li>
                        <li>Launch from Applications or Spotlight</li>
                    </ol>

                    <a
                        href="https://github.com/Pawn-Appetit/pawn-appetit/releases/download/v0.10.0/Pawn.Appetit_0.10.0_x64.dmg"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors mb-6"
                    >
                        <Download className="w-5 h-5" />
                        Download for macOS
                    </a>

                    <Callout type="warning" title="macOS Security">
                        On first launch, macOS may show a security warning. Right-click the app and select &quot;Open&quot;
                        to bypass Gatekeeper, or go to System Preferences → Security & Privacy to allow the app.
                    </Callout>

                    <h2 id="linux" className="text-3xl font-bold mb-4 mt-12 scroll-mt-20 flex items-center gap-3">
                        🐧 Linux Installation
                    </h2>

                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Download the Linux <code>.AppImage</code> or <code>.deb</code> file</li>
                        <li>Make the file executable</li>
                        <li>Run the AppImage or deb file directly</li>
                    </ol>

                    <a
                        href="https://github.com/Pawn-Appetit/pawn-appetit/releases/download/v0.10.0/Pawn.Appetit_0.10.0_amd64.AppImage"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors mb-6"
                    >
                        <Download className="w-5 h-5" />
                        Download for Linux
                    </a>

                    <div className="mb-12">
                        <h2 id="build-from-source" className="text-3xl font-bold mb-4 mt-12 scroll-mt-20 flex items-center gap-3">
                            Build from Source
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            For developers who want to build Pawn Appétit from source code.
                        </p>
                    </div>

                    <div className="card">
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
                                        <pre className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">
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
                  
                    <h2 id="verify-installation" className="text-3xl font-bold mb-4 mt-12 scroll-mt-20">
                        Verify Installation
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        After installation, verify that Pawn Appétit is working correctly:
                    </p>

                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Launch the application</li>
                        <li>You should see the dashboard</li>
                        <li>Check that the application responds to inputs</li>
                        <li>Verify the version in Help → About</li>
                    </ol>

                    <Callout type="tip" title="Next Steps">
                        Now that Pawn Appétit is installed, head over to the First Steps guide to learn
                        how to set up your chess engines and start analyzing games!
                    </Callout>
                </div>

                <PageNavigation
                    prev={{
                        title: 'Introduction',
                        href: '/docs',
                    }}
                    next={{
                        title: 'First Steps',
                        href: '/docs/first-steps',
                    }}
                />
            </div>

            <TableOfContents items={tocItems} />
        </div>
    )
}
