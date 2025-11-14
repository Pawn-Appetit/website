'use client'

import { Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Pawn Appétit Logo"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                                Pawn Appétit
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            The Ultimate Chess Toolkit - Free, open-source, and powerful.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Documentation
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/docs"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Introduction
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/docs/installation"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Installation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/docs/first-steps"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    First Steps
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Community
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://github.com/pawn-appetit/pawn-appetit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://discord.gg/8hk49G8ZbX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Discord
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/pawn-appetit/pawn-appetit/discussions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Discussions
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://github.com/pawn-appetit/pawn-appetit/blob/main/LICENSE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    License
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/pawn-appetit/pawn-appetit/blob/main/CONTRIBUTING.md"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Contributing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/pawn-appetit/pawn-appetit/releases"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    Releases
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                            Made with <Heart className="w-4 h-4 fill-current" /> by the Pawn Appétit community
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
