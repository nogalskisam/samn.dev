"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Lock, Cog, FileCode, Brain, Rocket } from "lucide-react";

const services = [
  {
    title: "Software Engineering & Architecture",
    icon: Code,
    description:
      "Expert guidance on software architecture, development practices, and code quality. I help teams build robust, scalable applications with clean, maintainable code.",
    details: [
      "Software architecture design",
      "Code reviews and quality improvement",
      "Performance optimization",
      "Scalability planning",
      "Technical debt management",
    ],
  },
  {
    title: "Technical Leadership & Consulting",
    icon: Brain,
    description:
      "Strategic technical guidance for projects and teams. I provide leadership on technical decisions, product direction, and help establish development practices that scale.",
    details: [
      "Technical strategy and consulting",
      "Team leadership and mentorship",
      "Product and technology direction",
      "Development process optimization",
    ],
  },
  {
    title: "Vibe Coding Deployment",
    icon: Rocket,
    description:
      "Built something awesome with Lovable, v0, base44, or other AI coding tools? I'll help you deploy it to the web! From creative experiments to passion projects, let's make your code live and accessible to everyone.",
    details: [
      "Lovable, v0, and base44 project deployment",
      "Code review and optimization",
      "Deployment setup (Vercel, Netlify, GitHub Pages)",
      "Custom domain configuration",
      "Performance optimization",
      "SSL certificates and security",
      "Ongoing maintenance support",
    ],
  },
  {
    title: "Project Development",
    icon: FileCode,
    description:
      "Got an idea that needs building? I can help develop custom applications from start to finish, working with you to create exactly what you need.",
    details: [
      "Requirements discussion",
      "System design",
      "Development & iteration",
      "Testing and deployment",
    ],
  },
  {
    title: "Legacy Modernization",
    icon: Cog,
    description:
      "Stuck with old code that's hard to work with? I can help modernize legacy systems step by step, making them easier to maintain without breaking everything.",
    details: [
      "System analysis",
      "Gradual refactoring",
      "Data migration",
      "Incremental improvements",
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: Server,
    description:
      "Want to streamline how you deploy and manage your applications? I can set up CI/CD pipelines and cloud infrastructure that actually works for your workflow.",
    details: [
      "CI/CD pipeline setup",
      "Container deployment",
      "Infrastructure automation",
      "Monitoring and logging",
      "Serverless solutions",
    ],
  },
  {
    title: "Security & Compliance",
    icon: Lock,
    description:
      "Need to make sure your application is secure? I can help implement proper authentication, conduct security reviews, and ensure your app meets compliance requirements.",
    details: [
      "Security audits",
      "Authentication systems",
      "Data encryption",
      "Compliance guidance",
    ],
  },
];

export default function ServicesInteractive() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card
            className={`h-full cursor-pointer transition-shadow hover:shadow-lg ${
              selectedService === index ? "ring-2 ring-primary" : ""
            }`}
            onClick={() =>
              setSelectedService(selectedService === index ? null : index)
            }
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold ml-3">
                  {service.title}
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <AnimatePresence>
                {selectedService === index && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="list-disc list-inside text-sm text-muted-foreground"
                  >
                    {service.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}