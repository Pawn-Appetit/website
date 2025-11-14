'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export interface PageNavigationProps {
  prev?: {
    title: string
    href: string
  }
  next?: {
    title: string
    href: string
  }
}

export function PageNavigation({ prev, next }: PageNavigationProps) {
  if (!prev && !next) {
    return null
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prev && (
          <Link
            href={prev.href}
            className="flex items-center gap-2 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 bg-white dark:bg-slate-800/50 transition-all group"
          >
            <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            <div className="text-left">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Previous</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">{prev.title}</div>
            </div>
          </Link>
        )}
        {next && (
          <Link
            href={next.href}
            className="flex items-center justify-end gap-2 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 bg-white dark:bg-slate-800/50 transition-all group md:col-start-2"
          >
            <div className="text-right">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Next</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">{next.title}</div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </Link>
        )}
      </div>
    </div>
  )
}
