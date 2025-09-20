import type { Metadata } from "next";
import VibeCodingContent from "@/components/vibe-coding-content";

export const metadata: Metadata = {
  title: "Deploy Lovable v0 base44 Projects | AI Coding Tools Deployment",
  description: "Professional deployment services for Lovable, v0, and base44 projects. Get your AI-generated code live on the web with custom domains, optimization, and ongoing support.",
  keywords: [
    "Lovable project deployment",
    "v0 deployment service",
    "base44 hosting",
    "AI coding tools",
    "vibe coding deployment",
    "creative coding deployment",
    "AI generated code hosting",
    "project deployment service",
  ],
  openGraph: {
    title: "Deploy Lovable v0 base44 Projects | AI Coding Tools Deployment",
    description: "Professional deployment services for Lovable, v0, and base44 projects. Get your AI-generated code live on the web with custom domains, optimization, and ongoing support.",
    url: "https://samn.dev/vibe-coding",
  },
  alternates: {
    canonical: "/vibe-coding",
  },
};

export default function VibeCodingPage() {
  return <VibeCodingContent />;
}