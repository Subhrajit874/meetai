"use client";

import Image from "next/image";

export const HomeView = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-6 text-center px-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Replace with your logo path if you have one */}
          <Image
            src="/logo.svg"
            alt="App Logo"
            width={48}
            height={48}
            priority
          />
          <h1 className="text-2xl font-semibold text-gray-900">
            MeetAI
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-gray-600 max-w-md">
          Your AI-powered meeting assistant for smarter conversations.
        </p>

        {/* Action Button */}
        <button
          className="px-6 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800 transition"
        >
          To get stated click on Agents
        </button>
      </div>
    </main>
  );
};
