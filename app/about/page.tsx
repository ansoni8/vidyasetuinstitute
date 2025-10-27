"use client";
import { motion, Variants } from "framer-motion"; // 'Variants' is now used

// --- Icon Components (Omitted for brevity) ---

// --- Icon Components (using inline SVG) ---
const IconBook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-indigo-500"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconUsers = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-indigo-500"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconSpark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10 text-indigo-500"
  >
    <path d="M12 2L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
    <path d="m13.5 10.5 4.793-4.793" />
    <path d="m10.5 13.5-4.793 4.793" />
    <path d="m13.5 13.5 4.793 4.793" />
    <path d="m10.5 10.5-4.793-4.793" />
  </svg>
);


// --- Animation Variants ---
const containerVariants: Variants = { // <-- Added type
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = { // <-- Added type
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const featureVariants: Variants = { // <-- Added type
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } },
};

// ✅ The Component
export default function AboutPage() {
  return (
    <main className="bg-gray-100 min-h-screen antialiased text-gray-800 p-4 md:p-10">
      <motion.section
        className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 max-w-5xl mx-auto text-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          variants={itemVariants}
        >
          About VidyaSetu
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          VidyaSetu means "Bridge of Knowledge." We are dedicated to building
          that bridge, connecting learners everywhere with the skills and
          expertise needed to thrive in the modern world.
        </motion.p>

        {/* Our Mission Section */}
        <motion.div className="mt-12" variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
            To empower learners of all backgrounds by providing accessible,
            high-quality, and practical education...
          </p>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div className="mt-16" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            What We Offer
          </h3>

          <motion.div
            className="grid md:grid-cols-3 gap-10 text-left"
            variants={containerVariants}
          >
            {/* Feature 1 */}
            <motion.div
              className="flex flex-col items-center md:items-start text-center md:text-left"
              variants={featureVariants}
            >
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                <IconBook />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Expert-Led Courses
              </h4>
              <p className="text-gray-600">
                Learn from industry professionals...
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex flex-col items-center md:items-start text-center md:text-left"
              variants={featureVariants}
            >
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                <IconUsers />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Interactive Community
              </h4>
              <p className="text-gray-600">
                Connect with fellow learners...
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="flex flex-col items-center md:items-start text-center md:text-left"
              variants={featureVariants}
            >
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                <IconSpark />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Cutting-Edge Skills
              </h4>
              <p className="text-gray-600">
                Updated curriculum for today’s job market.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="mt-16 border-t border-gray-200 pt-10"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Join Our Journey
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're starting a new career...
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
}
