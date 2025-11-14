import { Copy } from 'lucide-react'
import { useState } from 'react'

interface CopyButtonProps {
    text: string
    className?: string
}

export default function CopyButton({ text, className = '' }: CopyButtonProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors ${className}`}
            title={copied ? 'Copied!' : 'Copy to clipboard'}
            aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
        >
            <Copy className="h-4 w-4" />
            {copied ? 'Copied!' : 'Copy'}
        </button>
    )
}