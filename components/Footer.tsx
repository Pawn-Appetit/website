import { Github, MessageCircle, Heart, ChefHat, Sparkles, Coffee, Star } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Screenshots', href: '/screenshots' },
        { name: 'Download', href: '/install' },
        { name: 'Releases', href: 'https://github.com/Pawn-Appetit/pawn-appetit/releases' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Installation Guide', href: '/install' },
        { name: 'API Reference', href: '/docs/api' },
        { name: 'FAQ', href: '/docs/faq' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Contributing', href: '/contribute' },
        { name: 'Discord', href: 'https://discord.gg/8hk49G8ZbX' },
        { name: 'GitHub', href: 'https://github.com/Pawn-Appetit/pawn-appetit' },
        { name: 'Issues', href: 'https://github.com/Pawn-Appetit/pawn-appetit/issues' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy', href: '/privacy' },
      ],
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-surface-secondary to-surface-tertiary dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-100 dark:bg-brand-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-royal-100 dark:bg-accent-royal-900/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container-brand py-16 lg:py-20 relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 xl:gap-16">
          {/* Enhanced Brand section */}
          <div className="xl:col-span-2 space-y-8">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 via-brand-600 to-accent-royal-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-105 transition-transform duration-300 shadow-brand">
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
              </div>
              <div className="flex flex-col">
                <span className="font-brand font-bold text-2xl bg-gradient-to-r from-text-primary via-brand-600 to-accent-royal-600 bg-clip-text text-transparent">
                  Pawn Appétit
                </span>
                <span className="text-sm text-text-tertiary font-medium tracking-wide flex items-center gap-1">
                  <ChefHat className="w-3 h-3" />
                  <span>Chess + Cuisine</span>
                  <Coffee className="w-3 h-3" />
                </span>
              </div>
            </div>
            
            <p className="text-body text-text-secondary leading-relaxed max-w-md">
              The Ultimate Chess Toolkit - A modern, open-source, cross-platform chess GUI 
              that combines the strategic depth of chess with the refined experience of 
              culinary craftsmanship. Built for power users and enthusiasts.
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Pawn-Appetit/pawn-appetit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface-primary dark:bg-gray-800 hover:bg-brand-50 dark:hover:bg-brand-900/30 border border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-600 rounded-2xl flex items-center justify-center transition-all duration-300 group shadow-soft hover:shadow-brand"
                aria-label="View source code on GitHub"
              >
                <Github className="h-5 w-5 text-text-secondary group-hover:text-brand-600 transition-colors" />
              </a>
              <a
                href="https://discord.gg/8hk49G8ZbX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface-primary dark:bg-gray-800 hover:bg-accent-royal-50 dark:hover:bg-accent-royal-900/30 border border-gray-200 dark:border-gray-700 hover:border-accent-royal-300 dark:hover:border-accent-royal-600 rounded-2xl flex items-center justify-center transition-all duration-300 group shadow-soft hover:shadow-royal"
                aria-label="Join our Discord community"
              >
                <MessageCircle className="h-5 w-5 text-text-secondary group-hover:text-accent-royal-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Enhanced Links sections */}
          <div className="xl:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h3 className="text-heading-md text-text-primary font-semibold">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-body text-text-secondary hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200 group flex items-center gap-2"
                      >
                        <span>{link.name}</span>
                        {link.href.startsWith('http') && (
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            ↗
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Newsletter signup */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-500" />
                <h3 className="text-heading-md text-text-primary font-semibold">
                  Stay in the Game
                </h3>
              </div>
              <p className="text-body text-text-secondary">
                Get notified about new releases, features, and chess insights. 
                Join our community of chess enthusiasts.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="flex-1 px-4 py-3 bg-surface-primary dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-text-primary placeholder:text-text-tertiary focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all duration-200"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="btn btn-brand whitespace-nowrap group"
              >
                <span>Subscribe</span>
                <Star className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Enhanced Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-caption text-text-tertiary">
              <div className="flex items-center gap-2">
                <span>&copy; {currentYear} Pawn-Appetit.</span>
                <span>Licensed under GPL-3.0.</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="h-3 w-3 text-red-500 animate-chess-bounce" />
                <span>for the chess community</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-caption text-text-tertiary">
              <div className="flex items-center gap-1">
                <Coffee className="h-4 w-4 text-accent-espresso-500" />
                <span>Fueled by caffeine</span>
              </div>
              <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center gap-1">
                <span className="text-2xl">♟</span>
                <span>Powered by passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
