import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { IconBrandGithub, IconBrandDiscord } from "@tabler/icons-react";
import { ThemeToggle } from "./ThemeToggle";
import { NavSection, type NavItem } from "./DocsSidebar";

interface HeaderProps {
  docsNavigation?: NavItem[];
}

export function Header({ docsNavigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                <img src="/assets/logo.png" alt="Pawn Appétit Logo" width={32} height={32} />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Pawn Appétit
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              to="/docs"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Documentation
            </Link>
            <a
              href="https://github.com/pawn-appetit/pawn-appetit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5"
            >
              <IconBrandGithub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://discord.gg/8hk49G8ZbX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5"
            >
              <IconBrandDiscord className="w-4 h-4" />
              Discord
            </a>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-950 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="space-y-1 px-4 py-3">
            <Link
              to="/docs"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <a
              href="https://github.com/pawn-appetit/pawn-appetit"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
            >
              <IconBrandGithub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://discord.gg/8hk49G8ZbX"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
            >
              <IconBrandDiscord className="w-4 h-4" />
              Discord
            </a>

            {docsNavigation && (
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="px-3 mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  Docs Navigation
                </h3>
                <ul className="space-y-1">
                  {docsNavigation.map((item, index) => (
                    <div key={index} onClick={() => setMobileMenuOpen(false)}>
                      <NavSection item={item} currentPath={location.pathname} />
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
