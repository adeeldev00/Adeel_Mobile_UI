"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown, Smartphone, Tablet } from "lucide-react";
import { Mobile3D } from "@/components/ui/mobile3D";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [section1Ref, section1InView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [section2Ref, section2InView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 1, 0.5, 0]
  );
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000); // Simulate loading delay

  return () => clearTimeout(timer);
}, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      {isLoading ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <p className="text-white text-xl">Loading...</p>
        </div>
      ) :(
      <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover text-white"
          style={{ filter: "brightness(0.6)" }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-11748-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/t0wThQrzjI8?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute w-full h-full object-cover"
          style={{ filter: "brightness(0.6)" }}
        ></iframe>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white z-10"
        >
          <h1 className="text-6xl font-bold mb-6">Welcome to the Future</h1>
          <p className="text-xl mb-8">
            Experience the next generation of web design
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 hover:bg-white hover:text-black transition-all"
          >
            Get Started
          </Button>
        </motion.div>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8"
        >
          <ChevronDown className="text-white w-8 h-8" />
        </motion.div>
      </section>

      <section
        ref={section1Ref}
        className="min-h-screen bg-gradient-to-b from-black to-purple-900 flex items-center justify-center py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={section1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="flex-1"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Revolutionary Mobile Experience
              </h2>
              <p className="text-gray-300 text-lg">
                Discover a new way to interact with your mobile applications.
                Our cutting-edge design brings your ideas to life with smooth
                animations and intuitive interfaces.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              animate={
                section1InView
                  ? {
                      opacity: 1,
                      rotate: [0, -15, 15, 0],
                      scale: [0.8, 1.2, 1],
                      y: [0, -30, 30, 0],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="flex-1 flex justify-center"
            >
              <div className="w-[300px] h-[600px] bg-gray-800 rounded-[40px] p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 opacity-20 rounded-[40px] animate-pulse" />
                <div className="w-32 h-1 bg-gray-700 rounded-full absolute top-8 left-1/2 transform -translate-x-1/2" />
                <Mobile3D />
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(45deg, #ff0080, #7928ca)",
                      "linear-gradient(45deg, #7928ca, #ff0080)",
                      "linear-gradient(45deg, #ff0080, #7928ca)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-4 rounded-[35px] opacity-30"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Floating Mobile */}
      <section
        ref={section2Ref}
        className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex items-center justify-center py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={section2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="flex-1"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Next-Gen Features
              </h2>
              <p className="text-gray-300 text-lg">
                Push the boundaries of what possible with our advanced features.
                From seamless animations to responsive design, we have got
                everything you need to create outstanding digital experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                section2InView
                  ? {
                      opacity: 1,
                      scale: [1, 1.1, 1],
                      rotateY: [0, 180, 360],
                      z: [0, 50, 0],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="flex-1 flex justify-center perspective-1000"
            >
              {/* <div className="w-[300px] h-[600px] bg-gray-800 rounded-[40px] p-4 relative overflow-hidden transform-style-3d"> */}
              {/* <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-[40px]" /> */}
              <Mobile3D />
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(129, 140, 248, 0.5)",
                    "0 0 40px rgba(167, 139, 250, 0.5)",
                    "0 0 20px rgba(129, 140, 248, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                // className="absolute inset-4 rounded-[35px] opacity-30"
              />
              {/* <div className="w-32 h-1 bg-gray-700 rounded-full absolute top-8 left-1/2 transform -translate-x-1/2" /> */}
              {/* </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - New Mobile Design */}
      <section className="min-h-screen bg-gradient-to-b from-indigo-900 to-blue-900 flex items-center justify-center py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-12">
              Endless Possibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -100 * i }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05, rotateZ: 5 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                    >
                      {i === 1 ? (
                        <Phone className="w-8 h-8 text-white" />
                      ) : i === 2 ? (
                        <Smartphone className="w-8 h-8 text-white" />
                      ) : (
                        <Tablet className="w-8 h-8 text-white" />
                      )}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Feature {i}
                    </h3>
                    <p className="text-gray-300">
                      Experience the power of modern web design with our
                      cutting-edge features and smooth animations.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="min-h-screen bg-gradient-to-b from-blue-900 to-black flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              Join us in creating the next generation of web experiences. Our
              platform provides everything you need to build beautiful,
              animated, and responsive websites.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg"
              >
                Start Your Journey
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </>
      )}
    </div>
  );
}
