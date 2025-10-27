"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="p-8 text-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold">About VidyaSetu</h2>
      <p className="mt-3 max-w-xl mx-auto text-gray-600">
        VidyaSetu is built to empower learners with knowledge and skills that create opportunities for a better future.
      </p>
    </motion.section>
  );
}