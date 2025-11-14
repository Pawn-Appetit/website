'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DocsSidebar, MobileDocsSidebar } from '@/components/DocsSidebar'
import type { NavItem } from '@/components/DocsSidebar'

const navigation: NavItem[] = [
    {
        title: 'Getting Started',
        items: [
            { title: 'Installation', href: '/docs/installation' },
            { title: 'First Steps', href: '/docs/first-steps' },
        ],
    },
    {
        title: 'FAQ',
        href: '/docs/faq',
    },
]

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
            <Header />
            <div className="flex-1 flex">
                <DocsSidebar navigation={navigation} currentPath="/docs" />
                <main className="flex-1 overflow-auto bg-white dark:bg-slate-950">
                    {children}
                </main>
                <MobileDocsSidebar navigation={navigation} currentPath="/docs" />
            </div>
            <Footer />
        </div>
    )
}
