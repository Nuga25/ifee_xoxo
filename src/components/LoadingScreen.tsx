"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#0A0A0F] flex flex-col items-center justify-center"
        >
          {/* Logo or Name */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="text-my-primary">{"<"}</span>
              ifee_xoxo
              <span className="text-my-primary">{"/>"}</span>
            </h1>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 md:w-96 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-my-primary to-purple-400"
            />
          </div>

          {/* Percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/60 mt-4 text-sm"
          >
            {progress}%
          </motion.p>

          {/* Animated dots */}
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex gap-2 mt-6"
          >
            <div className="w-2 h-2 bg-my-primary rounded-full" />
            <div className="w-2 h-2 bg-my-primary rounded-full" />
            <div className="w-2 h-2 bg-my-primary rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
