"use client";

import { Link } from "@tanstack/react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

export interface DocsSidebarProps {
  navigation: NavItem[];
  currentPath: string;
}

export function DocsSidebar({ navigation, currentPath }: DocsSidebarProps) {
  return (
    <nav className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-950 overflow-y-auto">
      <div className="px-6 py-10">
        <div className="mb-1">
          <Link
            to="/docs"
            className="block px-3 py-2 rounded-lg text-sm font-medium transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Introduction
          </Link>
        </div>
        <ul className="space-y-1">
          {navigation.map((item, index) => (
            <NavSection key={index} item={item} currentPath={currentPath} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function NavSection({
  item,
  currentPath,
  level = 0,
}: {
  item: NavItem;
  currentPath: string;
  level?: number;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = item.items && item.items.length > 0;

  if (hasChildren) {
    return (
      <li>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            level === 0
              ? "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800/50"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800/50"
          }`}
        >
          <span>{item.title}</span>
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {isOpen && (
          <ul className="ml-4 mt-1 space-y-1">
            {item?.items?.map((child, index) => (
              <NavSection key={index} item={child} currentPath={currentPath} level={level + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  const isActive = false; // item.href === currentPath

  return (
    <li>
      <Link
        to={item.href || "/docs"}
        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? ""
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-gray-100"
        }`}
      >
        {item.title}
      </Link>
    </li>
  );
}
