"use client";
import React from "react";
import { petitFormalScript } from "@/fonts/fonts";

export default function WhyThinkful() {
  return (
    <div
      className="bg-gradient-to-r from-navy-800 via-navy-900 to-slate-900 dark:from-navy-950 dark:via-slate-950 dark:to-black py-16 px-6 transition-colors duration-300"
      style={{
        background: "linear-gradient(to right, #91a3d2, #1e293b, #0f172a)",
      }}
    >
      <div className="max-w-7xl min-h-full mx-auto relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          {/* Left Side - Title and Link */}
          <div className="flex-shrink-0 space-y-6">
            <div className="relative">
              <h1
                className={`${petitFormalScript.className} text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg`}
              >
                Why Thankful?
              </h1>
              {/* Decorative underline */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-3"></div>
            </div>

            <a
              href="/about"
              className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Read More
              <svg
                className="inline-block ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
              <p className="text-blue-300 text-lg leading-relaxed">
                We believe in the transformational power of gratitude and the
                harmony that music provides to our lives. At{" "}
                <span className="text-blue-400 font-semibold">Thankful</span>,
                we hope to provide an environment where users may grow a greater
                feeling of appreciation, mindfulness, and emotional well-being
                while soaking in the therapeutic impact of carefully curated
                experiences through our platform.
              </p>

              <p className="mt-6 text-blue-200 text-base leading-relaxed">
                Our mission extends beyond simple gratitude journaling. We
                create spaces for reflection, connection, and personal growth.
                Whether you&apos;re celebrating life&apos;s victories or finding
                light in challenging moments, Thankful provides the tools and
                community to support your journey toward a more mindful and
                appreciative life.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 text-white/10">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div className="absolute bottom-8 right-8 text-white/10">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
