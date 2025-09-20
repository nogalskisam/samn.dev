"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Code, Globe, Zap, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Heart,
    title: "You Create",
    description: "Build something amazing while vibe coding - whether it's an experiment, art project, or passion creation."
  },
  {
    icon: Code,
    title: "I Review & Optimize",
    description: "I'll review your code, optimize performance, and ensure it's ready for the web."
  },
  {
    icon: Rocket,
    title: "We Deploy",
    description: "Together we'll get your project live on the internet with a proper domain and hosting."
  },
  {
    icon: Globe,
    title: "World Sees It",
    description: "Your creation is now accessible to everyone. Share the link and show off your work!"
  }
];

const features = [
  "Lovable, v0, and base44 project optimization",
  "Code review and cleanup",
  "Performance optimization",
  "Responsive design fixes",
  "Deployment to Vercel/Netlify/GitHub Pages",
  "Custom domain setup",
  "SSL certificates",
  "Basic SEO optimization",
  "Analytics setup (optional)",
  "Ongoing support for 30 days"
];

export default function VibeCodingContent() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold mb-6">
          Your Lovable, v0, or base44 Project Deserves to Live
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          You&apos;ve built something cool with AI coding tools like Lovable, v0, or base44.
          Maybe it was 2 AM inspiration, a weekend experiment, or just pure creative flow.
          Whatever you&apos;ve created, it deserves to be seen by the world. Let&apos;s make that happen.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">
            Let&apos;s Deploy Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>

      {/* What is Vibe Coding Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center">What&apos;s Vibe Coding?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground">
              Vibe coding is when you&apos;re in the zone with AI tools like Lovable, v0, or base44,
              building something purely for the joy of creation. No deadlines, no specifications,
              just you, AI, and your imagination. It&apos;s that late-night session where you build a
              rainbow generator, a weird text manipulator, or an interactive art piece just because it feels right.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">How We Make It Happen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What's Included */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">What&apos;s Included</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Zap className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* Perfect For Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Lovable Creations",
              description: "Interactive apps and experiments built with Lovable's AI"
            },
            {
              title: "v0 Components",
              description: "Beautiful UI components and pages generated with v0"
            },
            {
              title: "base44 Projects",
              description: "Creative tools, generators, and mini-apps from base44"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Go Live?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don&apos;t let your creative code sit on your local machine. Let&apos;s get it out there
              for everyone to see and enjoy. No project is too weird, too small, or too experimental.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}