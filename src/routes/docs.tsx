import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DocsSidebar } from "@/components/DocsSidebar";
import { BreadcrumbsData } from "@/components/BreadcrumbsData";
import type { NavItem } from "@/components/DocsSidebar";

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
});

const navigation: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "/docs/installation" },
      { title: "First Steps", href: "/docs/first-steps" },
    ],
  },
  {
    title: "FAQ",
    href: "/docs/faq",
  },
];

function DocsLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <BreadcrumbsData />
      <Header docsNavigation={navigation} />
      <div className="flex-1 flex">
        <DocsSidebar navigation={navigation} currentPath="/docs" />
        <main className="flex-1 overflow-auto bg-white dark:bg-slate-950">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
