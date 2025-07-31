"use client";

import { useState } from "react";

export default function OptionalNullishDemo() {
  const [user, setUser] = useState<{ name?: string; age?: number } | null>(
    null
  );

  return (
    <div className="space-y-4 mt-6">
      <h1 className="text-xl font-bold">Optional Nullish Demo</h1>
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() =>
          setUser({ name: "Alice", age: Math.floor(Math.random() * 40) + 20 })
        }
      >
        Set User
      </button>
      <button
        className="px-3 py-1 bg-gray-500 text-white rounded ml-2"
        onClick={() => setUser(null)}
      >
        Clear User
      </button>
      <div className="mt-4">Name: {user?.name ?? "No user"}</div>
      <div>Age: {user?.age ?? "Unknown"}</div>
    </div>
  );
}
