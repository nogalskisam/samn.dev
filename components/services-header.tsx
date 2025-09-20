"use client";

import { motion } from "framer-motion";

export default function ServicesHeader() {
  return (
    <>
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Software Engineering Services
      </motion.h1>
      <motion.h2
        className="text-2xl font-semibold text-muted-foreground text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        From creative project deployments to enterprise software development and technical leadership.
        Click on any service to learn more about how I can help with your project.
      </motion.h2>
    </>
  );
}