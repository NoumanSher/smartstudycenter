"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroItem {
  img: string;
  text: string;
}

// Use absolute paths for public assets so preloading and <img> tags resolve properly
const heroData: HeroItem[] = [
  { img: "/first.png", text: "Focusing on creative and critical thinking" },
  { img: "/son.png", text: "Developing logical reasoning" },
  { img: "/h2.png", text: "Improving quantitative reasoning" },
  { img: "/first.png", text: "Refining linguistic and communication skills" },
  { img: "/first.png", text: "Concentrating on personal development" },
];

// const NAVBAR_HEIGHT = 80; // px

export default function HeroAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleExploreClick = () => {
    const element = document.getElementById("features-section");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (isPaused) return;
    const cycle = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length);
    }, 7000);
    return () => clearInterval(cycle);
  }, [isPaused]);

  // Preloading is handled automatically by next/image with priority prop

  const currentItem = heroData[currentIndex];

  return (
    <div
      className="relative z-10 w-full overflow-hidden flex flex-col  lg:h-[calc(100vh-80px)]  md:flex-row items-center justify-start"
      // style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Hero content with transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.img + currentItem.text}
          className="flex flex-col md:flex-row items-center md:justify-center w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Left Side — Text Section */}
          <div className="md:w-1/2 self-start w-full mt-10">
            <div className="w-full flex items-center justify-start md:justify-start xl:pl-28 xl:pr-8 text-start lg:mt-28 ">
              <div className="flex items-stretch w-full">
                {/* Red vertical line */}
                <div className="bg-[#C71585] w-1.5 md:w-3"></div>

                {/* Sliding text */}
                <motion.p
                  className="break-words pr-7 lg:pr-0  text-2xl sm:text-3xl   md:text-5xl lg:text-6xl font-semibold text-gray-800 w-full  md:pl-6"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 25, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                >
                  {currentItem.text}
                </motion.p>
              </div>
            </div>
          </div>

          {/* Right Side — Image Section */}
          <div className="md:w-1/2 w-full h-full flex justify-center items-center md:mt-0">
            <motion.div
              key={currentItem.img}
              className="relative w-full h-96 md:h-[500px] lg:h-full flex justify-center items-center"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src={currentItem.img}
                alt={currentItem.text}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Button - Absolute on Desktop, Flow on Mobile */}
      <motion.div
        className="hidden md:block absolute bottom-6 lg:left-[3%] md:left-[7%] xl:left-[10%] rounded-full w-auto md:w-[350px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <button
          aria-label="explore more button"
          onClick={handleExploreClick}
          className="bg-[#212761] rounded-full uppercase py-2 px-6 bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white text-lg sm:text-xl md:text-2xl font-medium tracking-wide hover:shadow-lg transition-shadow whitespace-nowrap"
        >
          Explore more
        </button>
      </motion.div>

      {/* Button - Mobile Flow (Below Image) */}
      <motion.div
        className="md:hidden  w-full px-4 pt-4 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      >
        <button
          aria-label="explore more button"
          onClick={handleExploreClick}
          className="bg-[#212761] rounded-full uppercase py-2 px-6 bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white text-lg font-medium tracking-wide hover:shadow-lg transition-shadow w-full md:w-auto max-w-xs"
        >
          Explore more
        </button>
      </motion.div>
    </div>
  );
}
