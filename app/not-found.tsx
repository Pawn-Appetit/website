'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="container mx-auto px-4 py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="mb-8">
                            <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                404
                            </h1>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                Checkmate! Page Not Found
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                This position seems to have moved off the board. The page you're looking for has been captured or doesn't exist.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                            <Link
                                href="/"
                                className="group inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                <Home className="mr-2 h-5 w-5" />
                                Return to Home
                            </Link>
                            <Link
                                href="/docs"
                                className="group inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                                <Search className="mr-2 h-5 w-5" />
                                Explore Documentation
                            </Link>
                        </div>

                        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Try these popular pages:
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/docs/installation"
                                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                                >
                                    Installation Guide
                                </Link>
                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                <Link
                                    href="/docs/first-steps"
                                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                                >
                                    Getting Started
                                </Link>
                                <span className="text-gray-300 dark:text-gray-600">•</span>
                                <Link
                                    href="/docs/faq"
                                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                                >
                                    FAQ
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}