"use client";

import { motion } from "framer-motion";

export default function Courses() {
  return (
    <motion.section
      className="p-8 text-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold">Courses Coming Soon</h2>
      <p className="mt-3 text-gray-600">
        We are building the best learning experience for you!
      </p>
    </motion.section>
  );
}