import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/metadata";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: siteUrl,
    jobTitle: site.role,
    description: site.description,
    email: contact.email,
    sameAs: contact.socials.map((social) => social.href),
  };
}
