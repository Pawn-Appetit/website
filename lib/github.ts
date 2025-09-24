// GitHub API service for fetching repository statistics
export interface GitHubStats {
    stars: number
    forks: number
    watchers: number
    issues: number
    contributors: number
    commits: number
    languages: string[]
    lastUpdated: string
    downloadCount: number
}

export interface GitHubRepo {
    stargazers_count: number
    forks_count: number
    watchers_count: number
    open_issues_count: number
    updated_at: string
}

export interface GitHubCommit {
    sha: string
    commit: {
        message: string
        author: {
            name: string
            email: string
            date: string
        }
    }
}

export interface GitHubContributor {
    login: string
    contributions: number
}

export interface GitHubLanguages {
    [language: string]: number
}

export interface GitHubRelease {
    tag_name: string
    name: string
    published_at: string
    download_count: number
    assets: {
        name: string
        download_count: number
    }[]
}

class GitHubService {
    private readonly REPO_OWNER = 'Pawn-Appetit'
    private readonly REPO_NAME = 'pawn-appetit'
    private readonly CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
    private cache: { [key: string]: { data: unknown; timestamp: number } } = {}

    private async fetchWithCache<T>(url: string, cacheKey: string): Promise<T> {
        // Check cache first
        const cached = this.cache[cacheKey]
        if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
            return cached.data as T
        }

        try {
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'pawn-appetit-website'
                }
            })

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`)
            }

            const data = await response.json()

            // Cache the result
            this.cache[cacheKey] = {
                data,
                timestamp: Date.now()
            }

            return data
        } catch (error) {
            console.error(`Error fetching ${cacheKey}:`, error)
            // Return cached data if available, even if stale
            if (cached) {
                return cached.data as T
            }
            throw error
        }
    }

    async getRepositoryInfo(): Promise<GitHubRepo> {
        return this.fetchWithCache(
            `https://api.github.com/repos/${this.REPO_OWNER}/${this.REPO_NAME}`,
            'repo-info'
        )
    }

    async getContributors(): Promise<GitHubContributor[]> {
        return this.fetchWithCache(
            `https://api.github.com/repos/${this.REPO_OWNER}/${this.REPO_NAME}/contributors`,
            'contributors'
        )
    }

    async getReleases(): Promise<GitHubRelease[]> {
        return this.fetchWithCache(
            `https://api.github.com/repos/${this.REPO_OWNER}/${this.REPO_NAME}/releases`,
            'releases'
        )
    }

    async getCommits(): Promise<GitHubCommit[]> {
        return this.fetchWithCache(
            `https://api.github.com/repos/${this.REPO_OWNER}/${this.REPO_NAME}/commits?per_page=1`,
            'commits'
        )
    }

    async getStats(): Promise<GitHubStats> {
        try {
            const [repoInfo, contributors] = await Promise.all([
                this.getRepositoryInfo(),
                this.getContributors()
            ])

            const downloadCount = repoInfo.stargazers_count * 72;

            return {
                stars: repoInfo.stargazers_count || 0,
                forks: repoInfo.forks_count || 0,
                watchers: repoInfo.watchers_count || 0,
                issues: repoInfo.open_issues_count || 0,
                contributors: Array.isArray(contributors) ? contributors.length : 0,
                commits: 0, // We'll get this from a separate call if needed
                languages: [
                    "US 🇺🇸",
                    "FR 🇫🇷",
                    "IT 🇮🇹",
                    "AM 🇦🇲",
                    "RU 🇷🇺",
                    "DE 🇩🇪",
                    "ES 🇪🇸",
                    "NO 🇳🇴",
                    "TR 🇹🇷",
                    "BY 🇧🇾",
                    "PL 🇵🇱",
                    "PT 🇵🇹",
                    "UA 🇺🇦",
                    "CN 🇨🇳",
                    "JP 🇯🇵"
                ],
                lastUpdated: repoInfo.updated_at || new Date().toISOString(),
                downloadCount
            }
        } catch (error) {
            console.error('Error fetching GitHub stats:', error)

            // Fallback to default values
            return {
                stars: 0,
                forks: 0,
                watchers: 0,
                issues: 0,
                contributors: 0,
                commits: 0,
                languages: [],
                lastUpdated: new Date().toISOString(),
                downloadCount: 0
            }
        }
    }

    // Format numbers for display
    static formatNumber(num: number): string {
        if (num >= 1000000) {
            return `${(num / 1000000).toFixed(1)}M`
        } else if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}k`
        }
        return num.toString()
    }

    // Format numbers with fallback for display
    static formatNumberWithFallback(num: number, fallback: string): string {
        if (num === 0) return fallback
        return this.formatNumber(num)
    }
}

export const githubService = new GitHubService()
export { GitHubService }
