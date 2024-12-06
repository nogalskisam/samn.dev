"use client";

import { motion } from "framer-motion";

export default function PostsHeader() {
  return (
    <>
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Posts
      </motion.h1>
      <motion.h2
        className="text-2xl font-semibold text-muted-foreground text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Some thoughts and solutions to issues I&apos;ve come across.
      </motion.h2>
    </>
  );
}
