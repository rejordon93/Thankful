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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter username"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h3>
          if No Accont <Link href="/register">register</Link>
        </h3>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
