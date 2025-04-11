"use client";

import { motion } from "framer-motion";

export function Mobile3D() {
  return (
    <div className="relative w-[300px] h-[600px] perspective-[1000px]">
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ 
          rotateY: [0, 10, 0, -10, 0],
          rotateX: [0, 5, 0, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Phone Frame */}
        <div className="absolute w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-[40px] shadow-xl">
          {/* Screen */}
          <div className="absolute inset-2 bg-gradient-to-tr from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-[35px] overflow-hidden">
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"
            />
          </div>

          {/* Notch */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full" />

          {/* Buttons */}
          <div className="absolute right-[-4px] top-24 w-1 h-12 bg-gray-700 rounded-l-lg" />
          <div className="absolute right-[-4px] top-40 w-1 h-12 bg-gray-700 rounded-l-lg" />
          <div className="absolute left-[-4px] top-24 w-1 h-16 bg-gray-700 rounded-r-lg" />

          {/* Reflections */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[40px]" />
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[40px]"
          />
        </div>
      </motion.div>

      {/* Shadow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/20 blur-xl rounded-full"
      />
    </div>
  );
}