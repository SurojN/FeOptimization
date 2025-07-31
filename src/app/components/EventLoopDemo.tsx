"use client";

import { useState } from "react";

export default function EventLoopDemo() {
  const [log, setLog] = useState<string[]>([]);

  const handleClick = () => {
    setLog([]);
    setLog((prev) => [...prev, "Start"]);

    setTimeout(() => {
      setLog((prev) => [...prev, "setTimeout"]);
    }, 0);

    Promise.resolve().then(() => {
      setLog((prev) => [...prev, "Promise.then"]);
    });

    setLog((prev) => [...prev, "End"]);
  };

  return (
    <div className="space-y-4 mt-6">
      <h2 className="font-bold mb-2">Event Loop Example</h2>
      <button
        className="px-3 py-1 bg-pink-600 text-white rounded"
        onClick={handleClick}
      >
        Run Event Loop Demo
      </button>
      <div className="mt-2 text-sm text-gray-700">
        <ul>
          {log.map((entry, idx) => (
            <li key={idx}>{entry}</li>
          ))}
        </ul>
        {log.length === 0 && (
          <span>Click the button to see event loop order.</span>
        )}
      </div>
    </div>
  );
}