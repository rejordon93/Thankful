"use client";
import axios from "axios";
import React, { useReducer, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import usersReducer, {
  AUTH_INITIAL_STATE,
  ActionType,
} from "@/context/usersReducer";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [userState, userDispatch] = useReducer(
    usersReducer,
    AUTH_INITIAL_STATE
  );
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    userDispatch({ type: ActionType.SET_LOADING, payload: true });

    try {
      const res = await axios.post("/api/register", {
        username,
        email,
        password,
      });
      userDispatch({ type: ActionType.SET_USER, payload: res.data });

      // Show success message
      setSuccessMessage("Signup successful! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (e) {
      console.error("Error", e);
      setSuccessMessage("Signup failed. Please try again.");
    } finally {
      userDispatch({ type: ActionType.SET_LOADING, payload: false });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Account ✨
        </h1>

        {/* Success Message */}
        {successMessage && (
          <p
            className={`text-center mb-4 ${
              successMessage.includes("successful")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {successMessage}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
              required
              disabled={userState.apiRequestContext.isLoading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
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
              placeholder="Enter password"
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
            {userState.apiRequestContext.isLoading
              ? "Signing Up..."
              : "Sign Up"}
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
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
