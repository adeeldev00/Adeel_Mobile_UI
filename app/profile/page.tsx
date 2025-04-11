"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Calendar, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden"
        >
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-48 bg-gradient-to-r from-purple-600 to-blue-600"
          >
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8')] bg-cover bg-center opacity-30"
            />
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative -mt-20 mb-8 flex justify-center"
          >
            <div className="w-32 h-32 rounded-full border-4 border-purple-500 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-full h-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center"
              >
                <User className="w-16 h-16 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Info */}
          <div className="px-8 pb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold text-white mb-2">Adeel</h1>
              <p className="text-gray-400">Senior Developer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                { icon: Mail, label: "Email", value: "adeeldev.com" },
                { icon: Phone, label: "Phone", value: "+1 234 567 890" },
                { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
                { icon: Calendar, label: "Joined", value: "January 2024" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 bg-white/5 rounded-lg p-4"
                >
                  <item.icon className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex justify-center"
            >
              <Button
                variant="outline"
                className="bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}