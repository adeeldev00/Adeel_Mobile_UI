"use client";

import { motion } from "framer-motion";
import { Bell, Lock, Eye, Moon, Sun, Smartphone, Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Settings() {
  const settingsSections = [
    {
      title: "Notifications",
      icon: Bell,
      settings: [
        { label: "Push Notifications", value: true },
        { label: "Email Notifications", value: false },
      ],
    },
    {
      title: "Privacy",
      icon: Lock,
      settings: [
        { label: "Profile Visibility", value: true },
        { label: "Activity Status", value: true },
      ],
    },
    {
      title: "Appearance",
      icon: Eye,
      settings: [
        { label: "Dark Mode", value: true },
        { label: "High Contrast", value: false },
      ],
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
          <h1 className="text-5xl font-bold text-white mb-6">Settings</h1>
          <p className="text-xl text-gray-300">Customize your experience</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {settingsSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <section.icon className="w-6 h-6 text-purple-500" />
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              </div>

              <div className="space-y-6">
                {section.settings.map((setting, index) => (
                  <motion.div
                    key={setting.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (index * 0.1) }}
                    className="flex items-center justify-between"
                  >
                    <Label className="text-white">{setting.label}</Label>
                    <Switch defaultChecked={setting.value} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}