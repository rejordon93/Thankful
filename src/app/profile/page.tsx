"use client";
import React, { useState } from "react";
import MyAccount from "./components/MyAccount";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<"profile" | "account">("profile");

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen space-y-6">
      <NavBar />
      {/* Header */}
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Ethan Jordon</h1>
        <div className="flex justify-center gap-12 mt-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">0</h3>
            <p className="text-gray-500">Followers</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">0</h3>
            <p className="text-gray-500">Following</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white rounded-lg border overflow-hidden">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex-1 py-3 font-medium transition ${
            activeTab === "profile"
              ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("account")}
          className={`flex-1 py-3 font-medium transition ${
            activeTab === "account"
              ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          My Account
        </button>
      </div>

      {/* Content */}
      <div className="bg-white shadow rounded-lg p-6">
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
              <h4 className="text-gray-600">Join date:</h4>
              <button
                onClick={() => setActiveTab("account")}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Edit Profile
              </button>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900">About</h4>
              <textarea
                placeholder="Add a short bio or personal note..."
                className="w-full mt-2 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                rows={4}
              />
            </div>
          </div>
        )}

        {activeTab === "account" && <MyAccount />}
      </div>

      <Footer />
    </div>
  );
}
