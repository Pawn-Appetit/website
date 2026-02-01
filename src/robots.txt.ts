import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots/txt")({
  loader: () => {
    return new Response(
      `User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/
Sitemap: https://pawnappetit.com/sitemap.xml
`,
      {
        headers: {
          "Content-Type": "text/plain",
        },
      },
    );
  },
});
