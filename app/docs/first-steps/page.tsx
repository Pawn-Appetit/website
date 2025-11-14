'use client'

import { TableOfContents } from '@/components/TableOfContents'
import { Callout } from '@/components/Callout'
import { PageNavigation } from '@/components/PageNavigation'
import { Database, User, Settings } from 'lucide-react'

export default function FirstStepsPage() {
    const tocItems = [
        { id: 'install-engine', text: 'Install Chess Engine', level: 2 },
        { id: 'configure-engine', text: 'Configure Engine', level: 3 },
        { id: 'add-database', text: 'Add a Database', level: 2 },
        { id: 'create-database', text: 'Create New Database', level: 3 },
        { id: 'import-database', text: 'Import Existing Database', level: 3 },
        { id: 'connect-account', text: 'Connect Chess Account', level: 2 },
        { id: 'chesscom-account', text: 'Chess.com Account', level: 3 },
        { id: 'lichess-account', text: 'Lichess Account', level: 3 },
    ]

    return (
        <div className="flex">
            <div className="flex-1 max-w-4xl mx-auto px-6 py-12">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <span>Documentation</span>
                    <span>/</span>
                    <span>Getting Started</span>
                    <span>/</span>
                    <span className="text-gray-900 dark:text-gray-100">First Steps</span>
                </div>

                <h1 id="first-steps" className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    First Steps
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    Get started with Pawn Appétit by setting up your chess engine, database, and importing your games.
                </p>

                <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200 dark:border-gray-700" />

                <div className="prose dark:prose-invert max-w-none">
                    <h2 id="install-engine" className="text-3xl font-bold mb-4 scroll-mt-20 flex items-center gap-3">
                        <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        Install Chess Engine
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        A chess engine is essential for analyzing your games. Pawn Appétit supports any UCI-compatible engine,
                        with Stockfish being the most popular choice.
                    </p>

                    <h3 id="configure-engine" className="text-2xl font-semibold mb-4 mt-8 scroll-mt-20">
                        Configure Engine in Pawn Appétit
                    </h3>

                    <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Navigate to <strong>Engines</strong></li>
                        <li>Click the <strong>Add New</strong> button</li>
                        <li>Click to install button (e.g., Stockfish)</li>
                        <li>The engine will appear in your engines list</li>
                        <li>Configure engine parameters:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li><strong>Threads:</strong> Set to the number of CPU cores (typically 4-8)</li>
                                <li><strong>Hash:</strong> Set memory allocation (1024-4096 MB recommended)</li>
                                <li><strong>MultiPV:</strong> Number of best moves to show (1-3 recommended)</li>
                            </ul>
                        </li>
                    </ol>

                    <Callout type="info" title="Engine Performance">
                        Higher thread count and hash size improve engine performance but use more system resources.
                        Start with conservative values and adjust based on your computer&apos;s capabilities.
                    </Callout>

                    <h2 id="add-database" className="text-3xl font-bold mb-4 mt-12 scroll-mt-20 flex items-center gap-3">
                        <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        Add a Database
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Databases in Pawn Appétit store your games, opening preparations, and analysis.
                        You can create a new database or import an existing one.
                    </p>

                    <h3 id="create-database" className="text-2xl font-semibold mb-4 mt-8 scroll-mt-20">
                        Create a New Database
                    </h3>

                    <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Navigate to <strong>Databases</strong></li>
                        <li>Click on <strong>Add New</strong></li>
                        <li>Click on install button (e.g., &quot;Caissabase 2024&quot;)</li>
                        <li>The database will appear in your databases list</li>
                    </ol>

                    <h3 id="import-database" className="text-2xl font-semibold mb-4 mt-8 scroll-mt-20">
                        Import an Existing Database
                    </h3>

                    <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Navigate to <strong>Databases</strong></li>
                        <li>Click on <strong>Add New</strong></li>
                        <li>Choose Local tab</li>
                        <li>Browse to your existing database file (.pgn, .db, or other supported formats)</li>
                        <li>Click to load the database</li>
                        <li>The database will appear in your databases list</li>
                    </ol>

                    <Callout type="tip" title="Database Organization">
                        Consider creating separate databases for different purposes: tournament games, training games,
                        opening preparation, and opponent analysis.
                    </Callout>

                    <h2 id="connect-account" className="text-3xl font-bold mb-4 mt-12 scroll-mt-20 flex items-center gap-3">
                        <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        Connect Chess Account
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Connect your Chess.com or Lichess account to automatically import your online games
                        and track your progress.
                    </p>

                    <h3 id="chesscom-account" className="text-2xl font-semibold mb-4 mt-8 scroll-mt-20">
                        Connect Chess.com Account
                    </h3>

                    <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Go to <strong>Accounts</strong></li>
                        <li>Click <strong>Add Account</strong> and select <strong>Chess.com</strong></li>
                        <li>Enter your Chess.com username</li>
                        <li>Click <strong>Add</strong></li>
                        <li>Pawn Appétit will verify your account and fetch your game history</li>
                    </ol>

                    <Callout type="info" title="Chess.com API">
                        Chess.com provides a public API that doesn&apos;t require authentication. Simply enter your
                        username to access your games. Make sure your game archive is public in your Chess.com settings.
                    </Callout>

                    <h3 id="lichess-account" className="text-2xl font-semibold mb-4 mt-8 scroll-mt-20">
                        Connect Lichess Account
                    </h3>

                    <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                        <li>Go to <strong>Accounts</strong></li>
                        <li>Click <strong>Add Account</strong> and select <strong>Lichess</strong></li>
                        <li>Enter your Lichess username</li>
                        <li>Click <strong>Add</strong></li>
                        <li>Optionally, login via browser:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>Check &quot;Login with browser&quot;</li>
                                <li>Click <strong>Add</strong></li>
                                <li>Login in opened browser window</li>
                            </ul>
                        </li>
                    </ol>

                    <Callout type="tip" title="Multiple Accounts">
                        You can connect both Chess.com and Lichess accounts simultaneously. 
                    </Callout>

                    <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200 dark:border-gray-700" />

                    <Callout type="tip" title="Need Help?">
                        If you encounter any issues during setup, check out our FAQ section or join our community
                        Discord server for support and tips from other users.
                    </Callout>
                </div>

                <PageNavigation
                    prev={{
                        title: 'Installation',
                        href: '/docs/installation',
                    }}
                    next={{
                        title: 'FAQ',
                        href: '/docs/faq',
                    }}
                />
            </div>

            <TableOfContents items={tocItems} />
        </div>
    )
}
