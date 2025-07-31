"use client";

import { useEffect, useRef, useState } from "react";

export default function MemoryLeakDemo() {
  const [showLeaky, setShowLeaky] = useState(true);

  return (
    <div className="space-y-6 mt-6">
      <h2 className="font-bold mb-2">Memory Leak Demo</h2>
      <div className="flex gap-2">
        <button
          className={`px-3 py-1 rounded ${
            showLeaky ? "bg-red-600 text-white" : "bg-gray-600"
          }`}
          onClick={() => setShowLeaky(true)}
        >
          Leaky Version
        </button>
        <button
          className={`px-3 py-1 rounded ${
            !showLeaky ? "bg-green-600 text-white" : "bg-gray-600"
          }`}
          onClick={() => setShowLeaky(false)}
        >
          Optimized Version
        </button>
      </div>
      {showLeaky ? <LeakyComponent /> : <FixedComponent />}
      <div className="text-xs text-gray-600">
        Open your browser console and mount/unmount the component to see the
        difference.
      </div>
    </div>
  );
}

function LeakyComponent() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Leaky interval running...");
    }, 1000);

    // ❌ Memory leak: no cleanup!
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 bg-red-400 rounded">
      <strong>LeakyComponent is mounted.</strong>
      <div className="text-xs mt-1 text-red-700">
        (Interval is <b>not</b> cleaned up on unmount!)
      </div>
    </div>
  );
}

function FixedComponent() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Fixed interval running...");
    }, 1000);

    // ✅ Proper cleanup to prevent memory leak
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 bg-green-400 rounded">
      <strong>FixedComponent is mounted.</strong>
      <div className="text-xs mt-1 text-green-700">
        (Interval <b>is</b> cleaned up on unmount.)
      </div>
    </div>
  );
}
