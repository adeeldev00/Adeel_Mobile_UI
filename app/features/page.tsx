"use client";

import { motion } from "framer-motion";
import { Smartphone, Zap, Shield, Sparkles } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfect experience across all devices",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for maximum performance",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security built-in",
    },
    {
      icon: Sparkles,
      title: "Beautiful UI",
      description: "Stunning animations and transitions",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Features</h1>
          <p className="text-xl text-gray-300">Discover what makes us unique</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}