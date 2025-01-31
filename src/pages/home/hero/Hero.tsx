"use client";

import React from "react";
import { motion } from "framer-motion";
import CRT from "../../../components/CRT";
import useTypewriter from "../../../hooks/useTypewriter";

const Hero = () => {
  const terminalText = `[    0.000000] Axiom OS v1.0.0-tech (axiom@svgu) (gcc version 12.3.0) #1 SMP PREEMPT
[    0.052731] Command line: BOOT_IMAGE=/boot/axiom-os root=UUID=axiom-tech ro quiet splash
[    0.134912] Loading essential drivers...
[    0.256731] Initializing Axiom development environment...
[    0.398211] Starting core services:
[    0.412456] * Mounting innovation filesystem...           [OK]
[    0.534123] * Loading creative modules...                 [OK]
[    0.645892] * Starting code compiler service...          [OK]
[    0.789234] * Establishing developer connections...       [OK]
[    0.892456] * Activating AI assistance protocols...      [OK]

[    1.023891] Axiom Club Tech Hub - Ready for innovation
[    1.156234] Environment: Production
[    1.234567] Status: Active

[SYSTEM]: Welcome to Axiom Club - Where Innovation Meets Excellence
[SYSTEM]: Capabilities loaded:
         ├── Full-Stack Development
         ├── Systems Architecture
         ├── Machine Learning
         ├── Open Source Projects
         └── Security Research

[SYSTEM]: All systems operational. Ready for creative development.
[STATUS]: Awaiting user input...`;

  const { displayText, isFinished } = useTypewriter({
    text: terminalText,
    speed: 15,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1, // Delay children until typing starts
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-10 sm:py-20">
      <div className="container mx-auto px-4 h-[calc(100vh-5rem)] sm:h-[calc(100vh-10rem)]">
        <CRT className="h-full sm:h-[85vh]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-0 sm:p-8 h-full relative"
          >
            {/* Terminal Section */}
            <motion.div
              className="h-full w-full absolute inset-0"
              initial={{ opacity: 1 }}
              animate={{
                opacity: isFinished ? 0 : 1,
                x: isFinished ? "-100%" : "0%",
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="relative h-full">
                <div className="text-[#ffb000] font-mono text-sm overflow-hidden h-full">
                  <motion.pre
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="whitespace-pre-wrap break-words h-full max-w-full"
                  >
                    {displayText}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      _
                    </motion.span>
                  </motion.pre>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
              </div>
            </motion.div>

            {/* Main Content Section */}
            <motion.div
              className="text-white space-y-6 h-full flex flex-col justify-center absolute inset-0"
              initial={{ opacity: 0, x: "100%" }}
              animate={{
                opacity: isFinished ? 1 : 0,
                x: isFinished ? "0%" : "100%",
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              <motion.h1
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                <motion.span
                  className="inline-block bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.7 }}
                >
                  Welcome to the Future
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8 }}
                className="text-base sm:text-lg text-gray-300"
              >
                Join the elite community of innovators, developers, and
                visionaries shaping the future of technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  Join Axiom Club
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-6 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500/10 transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-400"
              >
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  <span>1000+ Members</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  <span>24/7 Active</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </CRT>
      </div>
    </section>
  );
};

export default Hero;
