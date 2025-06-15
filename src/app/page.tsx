import React from "react";

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Simple Todo List App
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        A modern todo application built with Next.js and TypeScript.
      </p>
      
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
        <p className="text-gray-600">
          Todo functionality will be added in the next iteration.
        </p>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Generated and deployed with while.ai
        </p>
      </div>
    </main>
  )
}