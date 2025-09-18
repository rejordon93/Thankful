"use client";
import axios from "axios";
import React, { useState, useReducer } from "react";
import { Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import img from "@/images/createProfileImg.jpg";
import { useRouter } from "next/navigation";
import reducer, {
  PROFILE_INITIAL_STATE,
  ActionType,
} from "@/context/profileReducer";

export default function CreateProfile() {
  const [profileState, profileDispatch] = useReducer(
    reducer,
    PROFILE_INITIAL_STATE
  );
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      profileDispatch({ type: ActionType.SET_LOADING, payload: true });
      const res = await axios.post("/api/profile/createProfile", {
        firstname,
        lastname,
        title,
        profileImage,
        phone,
      });
      profileDispatch({ type: ActionType.SET_PROFILE, payload: res.data });

      setFirstName("");
      setLastName("");
      setTitle("");
      setProfileImage("");
      setPhone("");
      router.push("/profile");
    } catch (e) {
      console.error("Error creating profile:", e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-300  to-blue-100 p-6 relative">
      {/* Home Icon */}
      <div className="absolute top-6 left-6">
        <Link href="/">
          <Home className="w-7 h-7 text-gray-700 hover:text-blue-600 cursor-pointer transition" />
        </Link>
      </div>

      {/* Side-by-side layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl w-full h-[600px] rounded-2xl overflow-hidden shadow-xl">
        {/* Form */}
        <div className="flex items-center justify-center bg-white p-8">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <h2 className="text-2xl text-black font-bold text-gray-900 text-center">
              Create Profile
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 text-black border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 text-black py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile Image URL
              </label>
              <input
                type="text"
                placeholder="Enter profile image URL"
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
                className="w-full px-4 text-black py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Create Profile
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src={img}
            alt="Create Profile Illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
