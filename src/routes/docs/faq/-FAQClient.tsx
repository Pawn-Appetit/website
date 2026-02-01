"use client";

import { TableOfContents } from "@/components/TableOfContents";
import { PageNavigation } from "@/components/PageNavigation";
import { faqData } from "./-faq-data";

export default function FAQClient() {
  const tocItems = [
    { id: "general", text: "General Questions", level: 2 },
    { id: "installation", text: "Installation & Setup", level: 2 },
    { id: "features", text: "Features & Usage", level: 2 },
    { id: "troubleshooting", text: "Troubleshooting", level: 2 },
  ];

  // Helper to split FAQs for sections (approximate for display structure matching original)
  const generalFaqs = faqData.slice(0, 3);
  const installFaqs = faqData.slice(3, 6);
  const featureFaqs = faqData.slice(6, 8);
  const troubleshootFaqs = faqData.slice(8, 12);

  return (
    <div className="flex">
      <div className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <span>Documentation</span>
          <span>/</span>
          <span className="text-gray-900 dark:text-gray-100">FAQ</span>
        </div>

        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Common questions and answers about Pawn Appétit.
        </p>

        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200 dark:border-gray-700" />

        <div className="prose dark:prose-invert max-w-none">
          <h2 id="general" className="text-3xl font-bold mb-6 scroll-mt-20">
            General Questions
          </h2>
          {generalFaqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}

          <h2 id="installation" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Installation & Setup
          </h2>
          {installFaqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}

          <h2 id="features" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Features & Usage
          </h2>
          {featureFaqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}

          <h2 id="troubleshooting" className="text-3xl font-bold mb-6 mt-12 scroll-mt-20">
            Troubleshooting
          </h2>
          {troubleshootFaqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <PageNavigation
          prev={{
            title: "First Steps",
            href: "/docs/first-steps",
          }}
        />
      </div>

      <TableOfContents items={tocItems} />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{question}</h3>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{answer}</p>
    </div>
  );
}
