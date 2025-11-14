'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import {
    Brain,
    BookOpen,
    Search,
    Cpu,
    Palette,
    Zap,
    Download,
    Github,
} from 'lucide-react'

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section
                    className="bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
                >
                    <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
                        <div className="mx-auto max-w-4xl text-center">
                            <div
                                className="mb-8 inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-slate-800/50 px-3 py-1 text-sm text-gray-900 dark:text-gray-100"
                            >
                                <span className="mr-2">🎉</span
                                ><span className="font-medium"
                                >Open Source Chess Analysis</span
                                >
                            </div>
                            <h1
                                className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl"
                            >
                                The Ultimate<span
                                    className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ml-4"
                                >Chess Toolkit</span
                                >
                            </h1>
                            <p
                                className="mb-12 text-lg text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl"
                            >
                                Analyze games, train repertoires, and manage chess engines with a
                                modern, lightning-fast desktop application built with Tauri and
                                React.
                            </p>
                            <div
                                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                            >
                                <a
                                    className="group inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                    href="/docs"
                                >
                                    Get Started
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                                <a
                                    className="group inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                                    href="/docs/installation"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-download mr-2 h-5 w-5"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" x2="12" y1="15" y2="3"></line>
                                    </svg>
                                    Download Now
                                </a>
                            </div>
                            <div
                                className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400"
                            >
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-windows"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 13v5c0 1.57 -1.248 2.832 -2.715 2.923l-.113 .003l-.042 .018a1 1 0 0 1 -.336 .056l-.118 -.008l-4.676 -.585v-7.407zm-10 0v7.157l-5.3 -.662c-1.514 -.151 -2.7 -1.383 -2.7 -2.895v-3.6zm0 -9.158v7.158h-8v-3.6c0 -1.454 1.096 -2.648 2.505 -2.87zm10 2.058v5.1h-8v-7.409l4.717 -.589c1.759 -.145 3.283 1.189 3.283 2.898" /></svg>
                                    <span>Windows</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-apple"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" /><path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" /></svg>
                                    <span>macOS</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-ubuntu"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17.723 7.41a7.992 7.992 0 0 0 -3.74 -2.162m-3.971 0a7.993 7.993 0 0 0 -3.789 2.216m-1.881 3.215a8 8 0 0 0 -.342 2.32c0 .738 .1 1.453 .287 2.132m1.96 3.428a7.993 7.993 0 0 0 3.759 2.19m4 0a7.993 7.993 0 0 0 3.747 -2.186m1.962 -3.43a8.008 8.008 0 0 0 .287 -2.131c0 -.764 -.107 -1.503 -.307 -2.203" /><path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg>
                                    <span>Linux</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gray-50 dark:bg-slate-900">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                                Everything You Need
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Professional chess analysis tools at your fingertips
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 relative overflow-hidden">
                    <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Ready to Elevate Your Chess Game?
                        </h2>
                        <p className="text-xl text-gray-900 dark:text-gray-100 mb-10">
                            Join thousands of chess players using Pawn Appétit for free.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/pawn-appetit/pawn-appetit/releases"
                                className="group inline-flex h-12 gap-2 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                                <Download className="w-5 h-5" />
                                Download for Free
                            </a>
                            <a
                                href="https://github.com/pawn-appetit/pawn-appetit"
                                className="group inline-flex h-12 gap-2 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                                <Github className="w-5 h-5" />
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

const features = [
    {
        icon: Brain,
        title: 'Smart Analysis',
        description: 'Deep engine analysis with multiple engines support. Get insights from Stockfish and other top engines.',
    },
    {
        icon: BookOpen,
        title: 'Repertoire Training',
        description: 'Build and train your opening repertoire with spaced repetition and interactive exercises.',
    },
    {
        icon: Search,
        title: 'Position Search',
        description: 'Search millions of positions across databases. Find games, patterns, and opening theory.',
    },
    {
        icon: Cpu,
        title: 'Engine Management',
        description: 'Manage multiple UCI engines with ease. Configure, test, and compare different engines.',
    },
    {
        icon: Palette,
        title: 'Customizable UI',
        description: 'Tailor the interface to your preferences with themes, board styles, and layout options.',
    },
    {
        icon: Zap,
        title: 'High Performance',
        description: 'Built with Rust and Tauri for lightning-fast performance and low memory usage.',
    },
]
