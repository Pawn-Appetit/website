export const dynamic = "force-static"

import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Pawn Appétit - Free Chess Analysis Software',
        short_name: 'Pawn Appétit',
        description: 'Free open-source chess analysis software for Windows, macOS, and Linux',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#374151',
        orientation: 'portrait-primary',
        categories: ['games', 'education', 'productivity'],
        icons: [
            {
                src: '/img/logo.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/img/logo.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            }
        ]
    }
}
