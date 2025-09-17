"use client";
import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/login", { email, password });
      router.push("/");
    } catch (e) {
      console.error("Error", e);
    }
  };

  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back 👋</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold transition"
          >
            Login
          </button>
        </form>
        <button
          onClick={() => router.back()}
          className="mt-4 w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold transition"
        >
          Back
        </button>
        {/* Footer */}
        <p className="text-sm text-center mt-6 text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-purple-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
