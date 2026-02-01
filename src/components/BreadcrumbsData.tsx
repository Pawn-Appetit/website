import { useLocation } from "@tanstack/react-router";

export function BreadcrumbsData() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  // Generate breadcrumbs JSON-LD
  const items = segments.map((segment, index) => {
    const url = `https://pawnappetit.com/${segments.slice(0, index + 1).join("/")}`;
    // Simple capitalization and hyphen removal
    const name = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      "@type": "ListItem",
      position: index + 1,
      name: name,
      item: url,
    };
  });

  // Add Home as first item
  items.unshift({
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: "https://pawnappetit.com",
  });

  // Adjust indices
  items.forEach((item, i) => (item.position = i + 1));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
