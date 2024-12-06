"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Lock, Cog, FileCode, Brain } from "lucide-react";

const services = [
  {
    title: "Software Engineering",
    icon: Code,
    description:
      "Expert guidance on software architecture and development. Provide technical leadership, code reviews, and best practices implementation for your development team.",
    details: [
      "Architecture design and review",
      "Code quality improvement",
      "Performance optimization",
      "Scalability planning",
    ],
  },
  {
    title: "Consulting & Technical Leadership",
    icon: Brain,
    description:
      "Provide expert consulting services and technical leadership. Offer strategic guidance, technical direction, and mentorship to your team.",
    details: [
      "Consulting services",
      "Technical leadership",
      "Product direction",
      "Mentorship",
    ],
  },
  {
    title: "Project Development",
    icon: FileCode,
    description:
      "End-to-end development of custom software solutions. Deliver high-quality, scalable applications tailored to your specific business needs.",
    details: [
      "Requirements gathering",
      "System design",
      "Agile development",
      "Testing and deployment",
    ],
  },
  {
    title: "Legacy Modernization",
    icon: Cog,
    description:
      "Upgrade and refactor outdated systems. Analyze existing systems, propose modernization strategies, and implement upgrades with minimal disruption.",
    details: [
      "System analysis",
      "Refactoring strategies",
      "Data migration",
      "Incremental modernization",
    ],
  },
  {
    title: "DevOps Implementation",
    icon: Server,
    description:
      "Streamline development and operations processes. Set up and optimize CI/CD pipelines, implement containerization, and manage cloud infrastructure.",
    details: [
      "CI/CD pipeline setup",
      "Container orchestration",
      "Infrastructure as Code",
      "Monitoring and logging",
      "Serverless architecture",
    ],
  },
  {
    title: "Security Implementation",
    icon: Lock,
    description:
      "Protect your systems from vulnerabilities. Conduct thorough security audits, implement robust authentication systems, and ensure compliance with data protection regulations.",
    details: [
      "Security audits",
      "Authentication systems",
      "Encryption implementation",
      "Compliance management",
    ],
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h1>
      <motion.h2
        className="text-2xl font-semibold text-muted-foreground text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        I offer a range of services to help you build and maintain your
        software. Please click on a service to learn more.
      </motion.h2>
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
    </div>
  );
}
