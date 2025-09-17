"use client";
import axios from "axios";
import React, { useState, useReducer } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import usersReducer, {
  AUTH_INITIAL_STATE,
  ActionType,
} from "@/context/usersReducer";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userState, userDispatch] = useReducer(
    usersReducer,
    AUTH_INITIAL_STATE
  );
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    userDispatch({ type: ActionType.SET_LOADING, payload: true });

    try {
      const res = await axios.post("/api/login", { email, password });
      userDispatch({ type: ActionType.SET_USER, payload: res.data });
      setMessage("Login successful! Redirecting…");
      setTimeout(() => router.push("/"), 1000);
    } catch (error: unknown) {
      console.error("Error", error);
      userDispatch({ type: ActionType.SET_ERROR, payload: "Login failed!" });
      setMessage("Login failed! Please check your credentials.");
    } finally {
      userDispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back 👋</h1>

        {/* Message */}
        {message && (
          <p
            className={`text-center mb-4 ${
              userState.apiRequestContext.error
                ? "text-red-400"
                : "text-green-400"
            }`}
          >
            {message}
          </p>
        )}

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
              disabled={userState.apiRequestContext.isLoading}
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
              disabled={userState.apiRequestContext.isLoading}
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold transition flex items-center justify-center gap-2"
            disabled={userState.apiRequestContext.isLoading}
          >
            {userState.apiRequestContext.isLoading && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {userState.apiRequestContext.isLoading ? "Logging in..." : "Login"}
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
