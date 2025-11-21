"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const shouldShow =
    typeof window !== "undefined"
      ? !sessionStorage.getItem("hasLoadedBefore")
      : true;

  const [loading, setLoading] = useState(shouldShow);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Don't run if we shouldn't show the loading screen
    if (!shouldShow) {
      return;
    }

    // Mark that we've loaded (for future navigations)
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasLoadedBefore", "true");
    }
    // Simulate progress while page loads
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90; // Stop at 90% until page fully loads
        }
        return prev + Math.random() * 15; // Random increments for realistic feel
      });
    }, 200);

    // Wait for page to fully load
    const handleLoad = () => {
      clearInterval(progressInterval);
      setProgress(100);

      // Small delay after 100% for smooth exit
      setTimeout(() => {
        setLoading(false);
      }, 400);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, [shouldShow]);

  return (
    <AnimatePresence>
      {shouldShow && loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
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
              <span className="text-purple-500">{"<"}</span>
              ifee.xoxo
              <span className="text-purple-500">{"/>"}</span>
            </h1>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 md:w-96 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-purple-500 to-purple-400"
            />
          </div>

          {/* Percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/60 mt-4 text-sm font-mono"
          >
            {Math.floor(Math.min(progress, 100))}%
          </motion.p>

          {/* Animated dots */}
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex gap-2 mt-6"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/40 mt-4 text-xs"
          >
            Loading portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
