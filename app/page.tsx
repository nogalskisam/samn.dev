"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Software Engineering & Creative Development
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              From deploying Lovable, v0, and base44 projects to leading enterprise development teams.
              I help bring software ideas to life—whether it&apos;s an AI-generated weekend experiment or a mission-critical application.
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link href="/vibe-coding">Deploy Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
