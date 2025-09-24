'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '../app/providers'
import { Menu, X, Sun, Moon, Github, Download, Sparkles, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const navigation = [
    { name: 'Features', href: '/features' },
    { name: 'Screenshots', href: '/screenshots' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Contribute', href: '/contribute' },
    { name: 'About', href: '/about' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'glass-nav shadow-soft'
                : 'bg-transparent'
            }`}>
            <nav className="container-brand flex items-center justify-between h-16 sm:h-20">
                {/* Enhanced Logo */}
                <div className="flex items-center min-w-0 flex-1 sm:flex-initial">
                    <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group min-w-0">
                        <div className="relative flex-shrink-0">
                            {/* Chess piece icon with enhanced styling */}
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-500 via-brand-600 to-accent-royal-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl group-hover:scale-110 transition-all duration-300 shadow-brand">
                                <svg height="30" viewBox="0 0 557 1178" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M264.523 0.559877C222.257 4.15988 184.657 28.5599 161.857 67.4932C160.657 69.4932 159.59 69.6265 151.857 68.4265C117.457 62.8265 84.7901 72.6932 59.4568 96.4266C35.8568 118.427 23.8568 146.293 23.8568 179.36C23.8568 203.227 29.1901 223.493 40.1234 242.16C46.6568 253.36 63.0568 270.693 73.7234 278.027C85.7235 286.16 103.057 293.627 115.723 296.293L127.19 298.56L127.59 350.427L127.857 402.293L123.19 411.627C108.257 441.227 106.39 490.293 118.79 525.493C128.39 552.56 147.99 582.427 169.19 602.027C177.057 609.36 177.19 609.627 173.59 609.627C162.923 609.76 138.39 612.427 132.257 614.293C120.257 617.893 113.19 628.027 113.19 641.627C113.19 650.827 120.39 661.493 129.19 665.093C134.923 667.627 153.323 670.427 171.59 671.627L185.19 672.693V676.827C185.057 688.96 182.39 735.893 181.057 746.293C179.057 763.093 173.723 788.027 168.923 802.96C158.657 835.36 135.723 873.227 123.19 878.293C121.057 879.227 115.723 880.427 111.457 880.96C107.19 881.493 102.39 883.093 100.523 884.56C96.6568 887.493 94.1234 896.027 95.3234 901.227C96.5234 905.893 102.123 917.627 104.79 920.56C106.657 922.693 106.523 923.627 102.39 930.56C95.9901 941.227 77.0568 960.027 54.5234 977.893C25.0568 1001.36 13.9901 1014.56 7.85678 1033.49C5.32344 1041.49 4.92344 1044.96 5.45678 1057.23C5.85678 1070.03 6.39011 1072.69 10.1234 1080.43C14.9234 1090.96 21.9901 1099.09 30.2568 1103.89L36.1234 1107.36L31.4568 1108.96C24.5234 1111.36 15.5901 1116.83 10.6568 1121.89C3.85678 1128.83 0.79011 1135.76 0.123444 1146.43C-0.943223 1162.43 4.92344 1172.83 16.9234 1176.29C20.3901 1177.36 99.4568 1177.63 279.857 1177.36L537.857 1176.96L543.19 1174.16C546.123 1172.69 550.39 1168.83 552.523 1165.76C556.123 1160.56 556.523 1159.09 556.523 1149.23C556.523 1131.49 549.457 1121.09 531.723 1112.43L521.057 1107.23L527.057 1103.76C535.057 1099.09 543.457 1089.36 548.257 1078.96C551.59 1072.16 552.523 1068.16 552.923 1059.23C553.723 1045.09 551.723 1035.76 545.057 1022.96C537.99 1009.23 525.59 996.16 502.523 977.893C479.857 959.893 461.057 941.36 454.657 930.56C450.523 923.627 450.39 922.693 452.257 920.56C455.057 917.227 460.657 905.627 461.723 900.827C462.79 895.76 460.257 888.693 455.857 884.56C453.99 882.827 450.123 881.493 445.323 880.827C434.39 879.493 428.523 876.693 422.657 870.16C398.79 842.96 381.057 796.027 375.19 743.627C374.123 733.36 372.79 713.093 372.257 698.56L371.457 672.293H374.657C380.923 672.293 413.99 668.427 420.523 666.96C437.457 663.227 445.857 650.56 442.523 634.16C439.057 617.493 429.19 612.56 393.723 610.293L380.123 609.36L390.79 599.227C408.123 582.693 426.123 557.093 434.39 537.093C450.79 497.76 451.99 456.293 437.723 420.293C435.857 415.627 433.057 409.893 431.457 407.627C428.523 403.627 428.523 402.827 428.523 351.093V298.56L439.857 296.293C475.857 288.96 507.323 263.76 523.19 229.227C537.323 198.56 537.323 161.227 523.057 131.093C509.057 101.093 481.857 78.2932 450.523 70.0266C441.057 67.6266 410.657 66.8265 399.857 68.6932L393.857 69.7598L389.19 61.4932C386.657 56.9599 379.99 48.4265 374.523 42.5599C344.79 10.6932 308.523 -3.04012 264.523 0.559877Z" fill="#2B2B2B" />
                                    <path d="M309.857 38.16C350.39 52.0266 375.857 86.56 375.857 127.627C375.857 137.493 378.657 142.16 386.39 144.427C392.923 146.427 400.123 143.493 403.857 137.36C406.257 133.493 406.523 130.96 406.39 116.96L406.257 100.96L412.657 100.027C439.19 96.4266 469.057 108.827 484.657 129.893C492.123 140.027 497.723 152.027 499.99 162.293C502.39 173.493 501.99 192.56 499.323 202.96C493.99 222.96 479.857 241.76 461.99 252.827C449.59 260.56 439.057 264.027 422.257 265.76C403.19 267.627 402.79 267.893 399.857 272.693C397.323 276.693 397.19 279.627 397.19 322.56V368.027L385.723 364.16C320.257 341.893 243.857 341.36 176.123 362.827L159.857 368.027V323.093C159.857 281.093 159.723 278.027 157.19 274.027C153.723 268.293 151.723 267.493 138.523 266.427C115.59 264.56 100.123 258.96 86.1235 247.227C72.2568 235.627 61.7235 219.093 57.8568 202.693C55.3235 191.893 55.3235 170.027 57.8568 159.227C63.4568 135.76 82.1235 114.16 104.79 105.093C114.657 101.093 131.723 98.6933 142.657 99.8933L150.523 100.693V116.56C150.523 136.293 152.657 141.893 161.19 144.427C165.723 145.76 167.323 145.76 171.19 143.893C178.523 140.427 180.123 136.693 181.323 119.093C182.123 106.427 183.19 101.093 186.257 93.0933C196.523 66.6933 220.923 45.0933 250.523 36.2933C257.723 34.1599 262.523 33.76 279.19 34.0267C296.923 34.4267 300.39 34.8266 309.857 38.16Z" fill="white" />
                                    <path d="M190.881 238.296C185.681 243.362 184.748 247.762 187.548 253.762C189.548 257.762 191.815 259.496 202.081 264.429C244.481 284.962 300.481 286.429 345.815 268.296C367.681 259.496 373.281 253.496 369.148 243.362C365.148 234.029 357.681 232.162 345.815 237.762C306.215 256.162 253.015 256.162 211.148 237.629C201.281 233.229 195.681 233.362 190.881 238.296Z" fill="#2B2B2B" />
                                    <path d="M152 937C152 931.477 156.477 927 162 927H242C247.523 927 252 931.477 252 937C252 942.523 247.523 947 242 947H162C156.477 947 152 942.523 152 937Z" fill="white" />
                                    <path d="M77 1042C77 1036.48 81.4772 1032 87 1032H167C172.523 1032 177 1036.48 177 1042C177 1047.52 172.523 1052 167 1052H87C81.4772 1052 77 1047.52 77 1042Z" fill="white" />
                                    <path d="M227.499 821C227.499 859.66 200.889 860 191.5 860C182.111 860 204.5 835 212 795C212 756.34 222.61 729 231.998 729C241.387 729 227.499 782.34 227.499 821Z" fill="white" />
                                    <path d="M167 493C167 528.346 184.926 543.5 172.5 543.5C160.074 543.5 150 528.346 150 493C150 457.654 154.574 444 167 444C179.426 444 167 457.654 167 493Z" fill="white" />
                                </svg>
                            </div>
                            {/* Glowing effect */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-brand-500 to-accent-royal-600 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md -z-10"></div>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-base xs:text-lg sm:text-xl font-brand font-bold bg-gradient-to-r from-text-primary via-brand-600 to-accent-royal-600 bg-clip-text text-transparent truncate leading-tight">
                                <span className="hidden xs:inline">Pawn Appétit</span>
                                <span className="xs:hidden">Pawn</span>
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Enhanced Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-2">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="relative px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-xl transition-all duration-300 group overflow-hidden"
                        >
                            {/* Background hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-accent-honey-50 dark:from-brand-900/20 dark:to-accent-royal-900/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>

                            {/* Text */}
                            <span className="relative z-10">{item.name}</span>

                            {/* Underline effect */}
                            <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-500 to-accent-royal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </a>
                    ))}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex items-center space-x-1 sm:space-x-3 flex-shrink-0">
                    {/* Theme Toggle with enhanced styling */}
                    <button
                        onClick={toggleTheme}
                        className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-surface-secondary hover:bg-surface-tertiary border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 group shadow-soft hover:shadow-medium"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-accent-honey-500 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                            <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-accent-royal-600 group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300" />
                        )}
                    </button>

                    {/* Enhanced Download Button - Desktop */}
                    <a
                        href="/install"
                        className="hidden lg:flex btn btn-brand group"
                    >
                        <Download className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                        <span>Download</span>
                        <Sparkles className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>

                    {/* Enhanced Discord Link - Hidden on very small screens */}
                    <a
                        href="https://discord.gg/8hk49G8ZbX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden xs:flex w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-surface-secondary hover:bg-surface-tertiary border border-gray-200 dark:border-gray-700 items-center justify-center transition-all duration-300 group shadow-soft hover:shadow-medium"
                        aria-label="Join Discord"
                    >
                        <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-text-secondary group-hover:text-text-primary group-hover:scale-110 transition-all duration-300" />
                    </a>

                    {/* Enhanced GitHub Link - Hidden on very small screens */}
                    <a
                        href="https://github.com/Pawn-Appetit/pawn-appetit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden xs:flex w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-surface-secondary hover:bg-surface-tertiary border border-gray-200 dark:border-gray-700 items-center justify-center transition-all duration-300 group shadow-soft hover:shadow-medium"
                        aria-label="View on GitHub"
                    >
                        <Github className="h-4 w-4 sm:h-5 sm:w-5 text-text-secondary group-hover:text-text-primary group-hover:scale-110 transition-all duration-300" />
                    </a>

                    {/* Enhanced Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-surface-secondary hover:bg-surface-tertiary border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 shadow-soft"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-4 w-4 sm:h-5 sm:w-5 text-text-primary" />
                        ) : (
                            <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-text-primary" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Enhanced Mobile Menu */}
            <div className={`lg:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen
                    ? 'max-h-screen opacity-100'
                    : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-surface-primary/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 px-4 sm:px-6 py-6 sm:py-8 space-y-2">
                    {navigation.map((item, index) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 sm:px-4 py-3 sm:py-4 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-xl sm:rounded-2xl transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Social Links for very small screens */}
                    <div className="xs:hidden pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://discord.gg/8hk49G8ZbX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <MessageCircle className="h-4 w-4" />
                                <span>Discord</span>
                            </a>
                            <a
                                href="https://github.com/Pawn-Appetit/pawn-appetit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Github className="h-4 w-4" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Enhanced Mobile Download Button */}
                    <div className="pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                        <a
                            href="/install"
                            className="btn btn-brand w-full justify-center group"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Download className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                            <span>Download Latest</span>
                            <Sparkles className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
