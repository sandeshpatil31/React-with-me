import React from "react";
import Card from "./components/Cards";
import CourseCard from "./components/CourseCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 gap-10">
      
      {/* ------------------ Login Form ------------------ */}
      <div className="w-full max-w-md bg-white p-8 border rounded-xl shadow-lg">
        <form action="#">
          <h5 className="text-2xl font-bold text-gray-800 mb-6">
            Sign in to our platform
          </h5>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@company.com"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Your password
            </label>
            <input
              type="password"
              id="password"
              placeholder="•••••••••"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="checkbox-remember"
                type="checkbox"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
              />
              <label htmlFor="checkbox-remember" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Lost Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Login to your account
          </button>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Not registered?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Create account
            </a>
          </p>
        </form>
      </div>

      {/* ------------------ Cards Section ------------------ */}
      <div className="flex flex-wrap justify-center gap-6">
        <Card username="Sandesh" btnText="Click Me" />
        <Card username="Patil" />
      </div>

      {/* ------------------ Course Cards Section ------------------ */}
      <div className="flex flex-wrap justify-center gap-6">
        <CourseCard
          title="Advanced Tailwind"
          description="Master Tailwind CSS"
          students={800}
        />
        <CourseCard
          title="React Basics"
          description="Learn React from scratch"
          students={1200}
        />
      </div>
    </div>
  );
}