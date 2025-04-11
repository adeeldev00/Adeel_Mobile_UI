"use client";

import { motion } from "framer-motion";
import { Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Showcase() {
  const showcaseItems = [
    {
      title: "Social Media App",
      description: "A modern social platform with real-time updates",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "E-commerce Solution",
      description: "Complete shopping experience with AR preview",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Fitness Tracker",
      description: "AI-powered workout companion",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
      color: "from-green-500 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">App Showcase</h1>
          <p className="text-xl text-gray-300">Discover our latest mobile applications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-black rounded-2xl p-6 h-full">
                <div className="aspect-square mb-6 overflow-hidden rounded-xl relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r opacity-20"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-30`}
                    whileHover={{ opacity: 0 }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-purple-400 hover:text-purple-300 cursor-pointer"
                >
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>

                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                  <Smartphone className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </div>
  );
}