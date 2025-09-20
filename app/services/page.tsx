import type { Metadata } from "next";
import ServicesHeader from "@/components/services-header";
import ServicesInteractive from "@/components/services-interactive";

export const metadata: Metadata = {
  title: "Software Engineering Services | Lovable v0 base44 Deployment",
  description: "Professional software engineering services including Lovable, v0, and base44 project deployments, technical leadership, and enterprise development solutions.",
  keywords: [
    "software engineering services",
    "Lovable deployment service",
    "v0 project deployment",
    "base44 hosting",
    "technical leadership",
    "software architecture",
    "vibe coding deployment",
    "AI coding tools deployment",
  ],
  openGraph: {
    title: "Software Engineering Services | Lovable v0 base44 Deployment",
    description: "Professional software engineering services including Lovable, v0, and base44 project deployments, technical leadership, and enterprise development solutions.",
    url: "https://samn.dev/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <ServicesHeader />
      <ServicesInteractive />
    </div>
  );
}
