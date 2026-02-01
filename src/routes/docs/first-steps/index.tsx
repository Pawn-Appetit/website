import { createFileRoute } from "@tanstack/react-router";
import FirstStepsClient from "./-FirstStepsClient";

export const Route = createFileRoute("/docs/first-steps/")({
  component: FirstStepsPage,
  head: () => ({
    meta: [
      {
        title: "First Steps with Pawn Appétit - Quick Start Guide",
      },
      {
        name: "description",
        content:
          "Get started with Pawn Appétit chess analysis software. Learn the basics of importing games, analyzing positions, and using chess engines.",
      },
    ],
  }),
});

function FirstStepsPage() {
  return <FirstStepsClient />;
}
