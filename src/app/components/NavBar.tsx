"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { petitFormalScript } from "@/fonts/fonts";
import { UserNavType } from "@/types/types";

export default function NavBar() {
  const [user, setUser] = useState<UserNavType | null>(null);

  useEffect(() => {
    const loginCheck = async () => {
      try {
        const res = await axios.get("/api/authUser", { withCredentials: true });
        setUser(res.data.user || null);
      } catch {
        setUser(null);
      }
    };
    loginCheck();
  }, []);

  return (
    <nav className="relative min-h-[96px] px-6 py-6 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0 bg-black">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          ></div>
        ))}
      </div>

      {/* Nav Content */}
      <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="group relative">
          <div className="relative p-4 rounded-2xl bg-white/10 backdrop-blur-sm shadow-md border border-white/20 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:bg-white/15">
            <h2
              className={`${petitFormalScript.className} text-6xl bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110 group-hover:-rotate-2 drop-shadow-sm`}
            >
              Thankful
            </h2>
            <div className="absolute -top-2 -left-2 text-blue-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
              ✨
            </div>
            <div className="absolute -bottom-2 -right-2 text-purple-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-150">
              ✨
            </div>
          </div>
        </Link>

        {/* Links */}
        <ul className="flex items-center space-x-6">
          {user ? (
            <>
              <li>
                <Link
                  href="/profile"
                  className="text-white hover:text-blue-400"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/myAccount"
                  className="text-white hover:text-blue-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  className="text-red-500 hover:text-red-400"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className="text-white hover:text-blue-400">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
