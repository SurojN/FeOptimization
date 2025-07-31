"use client";

import { useState } from "react";

export default function ClosureDemo() {
  const [log, setLog] = useState<string[]>([]);

  function makeCounter() {
    let count = 0;
    return function increment() {
      count++;
      setLog((prev) => [...prev, `Current count (inside closure): ${count}`]);
    };
  }

  const [counter] = useState(() => makeCounter());

  return (
    <div className="space-y-4 mt-6">
      <h2 className="font-bold mb-2">Closure Example (Advanced)</h2>
      <button
        className="px-3 py-1 bg-indigo-600 text-white rounded"
        onClick={counter}
      >
        Increment (Closure)
      </button>
      <div className="mt-2 text-sm text-gray-700">
        {log.length === 0 ? "Click the button to see closure in action." : null}
        <ul>
          {log.map((entry, idx) => (
            <li key={idx}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
