import type { Metadata } from "next";
import ContactContent from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact | Vibe Coding Deployment & Software Engineering Services",
  description:
    "Get in touch to discuss your Lovable, v0, or base44 project deployment, or any software engineering needs. Professional development services available.",
  keywords: [
    "contact software engineer",
    "Lovable deployment contact",
    "v0 project help",
    "base44 deployment service",
    "software engineering contact",
    "Sam Nogalski contact",
  ],
  openGraph: {
    title: "Contact | Vibe Coding Deployment & Software Engineering Services",
    description:
      "Get in touch to discuss your Lovable, v0, or base44 project deployment, or any software engineering needs.",
    url: "https://samn.dev/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
