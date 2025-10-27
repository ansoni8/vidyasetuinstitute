"use client";
import React, { useState } from 'react';
// 1. IMPORT 'Variants' to fix the type error
import { motion, Variants } from 'framer-motion';

// --- Icon Components (using inline SVG) ---
// (Icons are unchanged)

const IconUser = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconMail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconMessage = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="absolute left-3 top-4 text-gray-400"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

// --- Animation Variants (Consistent with About page) ---

// 2. APPLY the 'Variants' type
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// 3. APPLY the 'Variants' type here to fix the 'ease' error
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut', // This is now correctly typed
    },
  },
};

// --- Contact Form Component ---

// ------------------------------------------------------------------
// !!! IMPORTANT: FOR FORMSUBMIT.CO TO WORK !!!
//
// 1.  You MUST send a test email from the LIVE, DEPLOYED URL
//     (e.g., yourVercelSite.com), not from `localhost`.
// 2.  After you send that first test email, FormSubmit will send an
//     ACTIVATION EMAIL to `intellowash06@gmail.com`.
// 3.  You MUST click the activation link in that email.
//
// Until you do this, FormSubmit will ignore AJAX requests.
// Your code below is correct, the problem is this activation step.
// ------------------------------------------------------------------

// 4. DEFINE types for component props to fix 'any' type error
type ContactFormProps = {
  onSuccess: () => void;
};

function ContactForm({ onSuccess }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  // 5. FIX: Explicitly type the state to be 'string' OR 'null'
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => { // Added type for 'e'
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/intellowash06@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            // You can add special formsubmit fields here if needed
            // _subject: "New Contact Form Submission!",
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        onSuccess(); // Trigger the success state in the parent
      } else {
        // This might happen if the email isn't activated
        throw new Error('Form submission failed. Please try again.');
      }
    } catch (err) {
      // It's better to check if err is an Error instance
      if (err instanceof Error) {
        console.error(err); // Log the full error
        setError(err.message); // This is now valid (string)
      } else {
        setError(
          'Something went wrong. Please check your connection and try again.', // This is now valid (string)
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="relative" variants={itemVariants}>
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <IconUser />
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </motion.div>

      <motion.div className="relative" variants={itemVariants}>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <IconMail />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </motion.div>

      <motion.div className="relative" variants={itemVariants}>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <IconMessage />
        <textarea
          name="message"
          id="message"
          rows={6} // Using number instead of string
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message..."
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </motion.div>

      {error && (
        <motion.div
          className="text-red-600 bg-red-100 p-3 rounded-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400"
        >
          {submitting ? 'Submitting...' : 'Send Message'}
        </button>
      </motion.div>
    </motion.form>
  );
}

// --- Thank You Message Component ---
function ThankYouMessage() {
  // We can also apply the Variants type here, or use 'as const'
  const thankYouVariants: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="text-center"
      variants={thankYouVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, ease: 'backOut' }}
    >
      <svg
        className="w-16 h-16 mx-auto text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
        Thank You!
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Your message has been sent successfully. We'll get back to you soon.
      </p>
    </motion.div>
  );
}

// --- Main Contact Page Component ---
function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // We can also define page-level variants
  const pageVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 md:p-12 max-w-2xl mx-auto overflow-hidden"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {!submitted ? (
        // Use React.Fragment for wrapper
        <>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center"
            variants={itemVariants} // Re-using itemVariants
            initial="hidden" // Add initial/animate here too
            animate="visible"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-10"
            variants={itemVariants} // Re-using itemVariants
            initial="hidden"
            animate="visible"
          >
            Have a question or want to work with us? Fill out the form below.
          </motion.p>
          <ContactForm onSuccess={() => setSubmitted(true)} />
        </>
      ) : (
        <ThankYouMessage />
      )}
    </motion.section>
  );
}

// --- Main App Component (for preview) ---
export default function App() {
  return (
    // Add the 'dark' class here to force dark mode for the preview
    <main className="dark bg-gray-100 dark:bg-gray-900 min-h-screen antialiased text-gray-800 dark:text-gray-200 p-4 md:p-10">
      <ContactPage />
    </main>
  );
}

