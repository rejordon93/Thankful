"use client";
import React from "react";
import Link from "next/link";

export default function FeelingPage() {
  const feelings = [
    {
      name: "Happy",
      href: "/happy",
      emoji: "😊",
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-50/10",
      borderColor: "border-yellow-200/30",
    },
    {
      name: "Unhappy",
      href: "/unhappy",
      emoji: "😔",
      color: "from-blue-400 to-indigo-400",
      bgColor: "bg-blue-50/10",
      borderColor: "border-blue-200/30",
    },
    {
      name: "Coding",
      href: "/coding",
      emoji: "💻",
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-50/10",
      borderColor: "border-green-200/30",
    },
    {
      name: "Cheerful",
      href: "/cheerful",
      emoji: "😄",
      color: "from-pink-400 to-rose-400",
      bgColor: "bg-pink-50/10",
      borderColor: "border-pink-200/30",
    },
    {
      name: "Calm",
      href: "/calm",
      emoji: "😌",
      color: "from-teal-400 to-cyan-400",
      bgColor: "bg-teal-50/10",
      borderColor: "border-teal-200/30",
    },
  ];

  return (
    <div className="relative min-h-screen px-6 py-12 overflow-hidden bg-black text-white">
      {/* Stars Background */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 animate-stars">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 2}px`,
                height: `${Math.random() * 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            How are you feeling today?
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a moment to reflect on your current state of mind. Your
            feelings are valid and important.
          </p>
        </div>

        {/* Feeling Cards Row */}
        <div className="flex flex-nowrap justify-center gap-6 max-w-7xl mx-auto">
          {feelings.map((feeling) => (
            <Link key={feeling.name} href={feeling.href}>
              <div
                className={`group relative p-6 rounded-3xl ${feeling.bgColor} ${feeling.borderColor} border-2 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer w-32 md:w-36 lg:w-40`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feeling.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10 text-center space-y-4">
                  <div className="text-3xl md:text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {feeling.emoji}
                  </div>
                  <h3
                    className="text-sm md:text-lg font-bold text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                    }}
                  >
                    {feeling.name}
                  </h3>
                  <div
                    className={`w-6 h-0.5 bg-gradient-to-r ${feeling.color} mx-auto rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300`}
                  ></div>
                </div>

                <div className="absolute top-2 right-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                  ✨
                </div>
                <div className="absolute bottom-2 left-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-150">
                  💫
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
