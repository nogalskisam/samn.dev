"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactContent() {
  return (
    <div className="container max-w-4xl py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let&apos;s Work Together
      </motion.h1>

      <motion.h2
        className="text-2xl font-semibold text-muted-foreground text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        From deploying creative projects to leading enterprise development—let&apos;s discuss your needs.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Sam Nogalski</CardTitle>
            <CardDescription>
              <div className="flex items-center gap-4">
                <Link
                  href="mailto:sam@samn.dev"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  sam@samn.dev
                </Link>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-6">
              Whether you have a creative project that needs deploying, require technical leadership
              for your team, or need help with software architecture and development—I&apos;d love to hear
              about your project and discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="mailto:sam@samn.dev">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="https://github.com/nogalskisam" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}