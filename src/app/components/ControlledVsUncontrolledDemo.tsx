"use client";

import { useRef, useState } from "react";

export default function ControlledVsUncontrolledDemo() {
  // Controlled input state
  const [controlledValue, setControlledValue] = useState("");
  // Uncontrolled input ref
  const uncontrolledRef = useRef<HTMLInputElement>(null);

  const handleControlledSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Controlled value: ${controlledValue}`);
  };

  const handleUncontrolledSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Uncontrolled value: ${uncontrolledRef.current?.value}`);
  };

  return (
    <div className="space-y-6 mt-6">
      <div>
        <h2 className="font-bold mb-2">Controlled Input (for validation)</h2>
        <form onSubmit={handleControlledSubmit} className="flex gap-2">
          <input
            className="border px-2 py-1 rounded"
            value={controlledValue}
            onChange={(e) => setControlledValue(e.target.value)}
            placeholder="Type here..."
            required
          />
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="text-sm mt-1 text-gray-600">
          Value: {controlledValue}
        </div>
      </div>
      <div>
        <h2 className="font-bold mb-2">Uncontrolled Input (for performance)</h2>
        <form onSubmit={handleUncontrolledSubmit} className="flex gap-2">
          <input
            className="border px-2 py-1 rounded"
            ref={uncontrolledRef}
            placeholder="Type here..."
            required
          />
          <button
            className="bg-green-600 text-white px-3 py-1 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
