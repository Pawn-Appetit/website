import { createFileRoute } from "@tanstack/react-router";
import DocsIndexClient from "./-DocsClient";

export const Route = createFileRoute("/docs/")({
  component: DocsIndex,
  head: () => ({
    meta: [
      {
        title: "Pawn Appétit Documentation - Getting Started & Features",
      },
      {
        name: "description",
        content:
          "Learn how to use Pawn Appétit chess analysis software. Guides for installation, engine management, repertoire training, and game analysis.",
      },
    ],
  }),
});

function DocsIndex() {
  return <DocsIndexClient />;
}
