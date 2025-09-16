import React from "react";

export default function HandleProfile() {
  const handleEditProfile = () => {
    console.log("Edit profile clicked");
  };

  const handleDiscard = () => {
    console.log("Discard clicked");
  };

  const handleSave = () => {
    console.log("Save clicked");
  };

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleEditProfile}>Edit Profile</button>
      <p>Join date: </p>
      <hr />
      <h2>About</h2>
      <textarea placeholder="Add a short bio or personal note"></textarea>
      <br />
      <button onClick={handleDiscard}>Discard</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
