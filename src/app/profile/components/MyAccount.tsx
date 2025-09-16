import React from "react";

export default function MyAccount() {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Account</h1>
        <div className="space-x-3">
          <button className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300">
            Discard
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Update Info
          </button>
        </div>
      </div>
      <p className="text-gray-600">View and edit your personal info below</p>

      <hr className="border-gray-200" />

      {/* Display Info */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Display Info</h2>
        <p className="text-gray-500 text-sm">
          This information will be visible to all members of this site.
        </p>
        <form className="mt-4 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Display Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </form>
      </div>

      <hr className="border-gray-200" />

      {/* Personal Info */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Update Your Personal Information
        </h2>
        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="md:col-span-2 flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300"
            >
              Discard
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Update Info
            </button>
          </div>
        </form>
      </div>

      <hr className="border-gray-200" />

      {/* Login Info */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Login Info</h2>
        <p className="text-gray-500 text-sm">
          View and update your login email and password
        </p>
        <div className="mt-2">
          <h4 className="font-medium text-gray-700">Login Email:</h4>
          <p className="text-gray-900">rejordon17@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
