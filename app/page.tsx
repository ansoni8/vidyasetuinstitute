"use client";

import HeroSection from "../components/HeroSection";
import About from "./about/page";
import Courses from "./courses/page";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <About />
      <Courses />
    </motion.div>
  );
}