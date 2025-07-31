"use client";

import { useRef } from "react";

export default function DomManipulationDemo() {
  const boxRef = useRef<HTMLDivElement>(null);

  const handleChangeColor = () => {
    if (boxRef.current) {
      // Direct DOM manipulation (not recommended in React, but sometimes needed)
      boxRef.current.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  };

  return (
    <div className="space-y-4 mt-6">
      <h2 className="font-bold mb-2">DOM Manipulation Example</h2>
      <div
        ref={boxRef}
        className="w-32 h-32 bg-blue-400 rounded flex items-center justify-center text-white text-lg transition-colors"
      >
        Box
      </div>
      <button
        className="px-3 py-1 bg-yellow-600 text-white rounded"
        onClick={handleChangeColor}
      >
        Change Box Color (via DOM)
      </button>
      <div className="text-xs text-gray-600">
        This directly changes the DOM node&apos;s style using a ref.
      </div>
    </div>
  );
}
