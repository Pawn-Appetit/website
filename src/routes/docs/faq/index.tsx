import { createFileRoute } from "@tanstack/react-router";
import { StructuredData } from "@/components/StructuredData";
import FAQClient from "./-FAQClient";
import { faqData } from "./-faq-data";

export const Route = createFileRoute("/docs/faq/")({
  component: FAQPage,
  head: () => ({
    meta: [
      {
        title: "Pawn Appétit FAQ - Troubleshooting & Common Questions",
      },
      {
        name: "description",
        content:
          "Answers to common questions about Pawn Appétit chess software. Installation help, engine troubleshooting, and feature guides.",
      },
    ],
  }),
});

function FAQPage() {
  return (
    <>
      <StructuredData faq={faqData} withOrganization={false} withWebSite={false} />
      <FAQClient />
    </>
  );
}
