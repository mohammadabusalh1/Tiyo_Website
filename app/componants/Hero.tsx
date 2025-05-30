"use client";
import React, { useEffect, useRef } from "react";
import HeroImage from "@/public/images/Tayo.png";
import SmokeImage from "@/public/images/smoke2.gif";
import Image from "next/image";
import { ArrowDown, MoveUpRight } from "lucide-react";

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scale = 1 + scrollTop / 5000;
      if (imageRef.current) {
        imageRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero relative w-full h-[100vh] p-2">
      {/* Smoke gif background */}
      <div className="absolute inset-0 z-11">
        <Image
          src={SmokeImage}
          alt="Smoke background"
          fill
          className="object-cover rounded-[50px] opacity-20"
          unoptimized
        />
      </div>

      {/* Main hero image */}
      <div className="w-full h-full rounded-[50px] relative z-10 overflow-hidden">
        <Image
          ref={imageRef}
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform"
        />
      </div>

      {/* Overlay to blend smoke with main image */}
      <div className="absolute inset-0 bg-black/5 rounded-[50px] z-20"></div>

      <div className="absolute flex flex-row items-end justify-end gap-4 top-2 left-12 z-30">
        <h1>Taiyo</h1>
        <h4 className="title_author pb-12">By LMD</h4>
      </div>
      <div className="absolute bottom-8 left-12 z-30">
        <h4>
          Closer to
          <br />
          Nature—Closer
          <br />
          to Yourself
        </h4>
      </div>
      <div className="description absolute bottom-12 right-6 w-90 z-30">
        <h6>
          Spend unforgettable and remarkable time in the Californian desert
          with—Capsules.
        </h6>
      </div>

      {/* create a button on the right side of the screen */}
      <div className="absolute top-8 right-8 z-30">
        <button
          className="text-sm flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-full 
                         transition-all duration-300 ease-in-out 
                         hover:scale-105 hover:shadow-lg hover:shadow-black/20
                         group"
        >
          Book Now
          <div
            className="bg-black rounded-full p-2 
                         transition-all duration-300 ease-in-out
                         group-hover:bg-gray-800 group-hover:scale-110
                         group-hover:rotate-12"
          >
            <MoveUpRight className="w-6 h-6 text-white transition-all duration-300 group-hover:text-primary" />
          </div>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex flex-col items-center space-y-2">
          <div className="glass-card backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-3 shadow-xl animate-bounce">
            <ArrowDown className="w-5 h-5 text-white" />
          </div>
          <span className="text-white/70 text-xs font-medium">Explore</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
