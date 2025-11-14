import { Info, AlertTriangle, Lightbulb, AlertCircle } from 'lucide-react'
import type { ReactNode } from 'react'

export type CalloutType = 'info' | 'warning' | 'tip' | 'danger'

export interface CalloutProps {
  type: CalloutType
  title?: string
  children: ReactNode
}

const calloutConfig = {
  info: {
    icon: Info,
    bgClass: 'bg-blue-50 dark:bg-blue-900/20',
    borderClass: 'border-blue-200 dark:border-blue-700',
    iconClass: 'text-blue-600 dark:text-blue-400',
    titleClass: 'text-blue-900 dark:text-blue-300',
    textClass: 'text-blue-800 dark:text-blue-200',
  },
  warning: {
    icon: AlertTriangle,
    bgClass: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderClass: 'border-yellow-400 dark:border-yellow-700',
    iconClass: 'text-yellow-700 dark:text-yellow-400',
    titleClass: 'text-yellow-900 dark:text-yellow-300',
    textClass: 'text-yellow-800 dark:text-yellow-200',
  },
  tip: {
    icon: Lightbulb,
    bgClass: 'bg-green-50 dark:bg-green-900/20',
    borderClass: 'border-green-200 dark:border-green-700',
    iconClass: 'text-green-600 dark:text-green-400',
    titleClass: 'text-green-900 dark:text-green-300',
    textClass: 'text-green-800 dark:text-green-200',
  },
  danger: {
    icon: AlertCircle,
    bgClass: 'bg-red-50 dark:bg-red-900/20',
    borderClass: 'border-red-200 dark:border-red-800',
    iconClass: 'text-red-600 dark:text-red-400',
    titleClass: 'text-red-900 dark:text-red-300',
    textClass: 'text-red-800 dark:text-red-200',
  },
}

export function Callout({ type, title, children }: CalloutProps) {
  const config = calloutConfig[type]
  const Icon = config.icon

  return (
    <div className={`my-6 p-4 rounded-lg border ${config.bgClass} ${config.borderClass}`}>
      <div className="flex gap-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconClass}`} />
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold mb-2 ${config.titleClass}`}>
              {title}
            </h4>
          )}
          <div className={`text-sm ${config.textClass}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
