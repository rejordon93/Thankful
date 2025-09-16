"use client";
import React, { useState } from "react";
import HandleProfile from "./components/HandleProfile";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<"profile" | "account" | null>(
    null
  );

  const MyAccountInfo = () => (
    <div>
      <h1>My Account</h1>
      <p>This is account settings info.</p>
    </div>
  );

  return (
    <div>
      <h2>name from database of state</h2>
      <h4>
        <span>0</span> Followers
      </h4>
      <h4>
        <span>0</span> Following
      </h4>

      {/* Buttons */}
      <h3>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
      </h3>
      <h3>
        <button onClick={() => setActiveTab("account")}>My Account</button>
      </h3>

      {/* Conditional rendering */}
      <div style={{ marginTop: "20px" }}>
        {activeTab === "profile" && <HandleProfile />}
        {activeTab === "account" && <MyAccountInfo />}
      </div>
    </div>
  );
}
