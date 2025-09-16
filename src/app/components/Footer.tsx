"use client";
import React from "react";
import { petitFormalScript } from "@/fonts/fonts";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black dark:bg-gray-950 text-gray-300 dark:text-gray-200 py-6 px-6 border-t border-gray-800 dark:border-gray-700 transition-colors duration-300">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600"></div>

      <div className="max-w-7xl mx-auto">
        {/* Main footer content - single row layout */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo / Branding */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span
                className={`${petitFormalScript.className} text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400`}
              >
                Thankful
              </span>
            </div>
            <span className="text-xs text-gray-500 hidden md:block">
              Cultivating gratitude
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-sm hover:text-purple-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm hover:text-purple-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-purple-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub
                  size={14}
                  className="text-gray-400 hover:text-white transition-colors"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  size={14}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter
                  size={14}
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                />
              </a>
            </div>

            <div className="h-4 w-px bg-gray-700"></div>

            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <span>&copy; {new Date().getFullYear()}</span>
              <FaHeart size={8} className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
