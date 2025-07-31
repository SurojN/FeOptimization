"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import ArticleListing from "./ArticleListing";
import articles from "../data/articles";
import OptionalNullishDemo from "./OptionalNullishDemo";
import CodePreview from "./CodePreview";
import ControlledVsUncontrolledDemo from "./ControlledVsUncontrolledDemo";
import ClosureDemo from "./ClosureDemo";
import EventLoopDemo from "./EventLoopDemo";
import MemoryLeakDemo from "./MemoryLeakDemo";
import DomManipulationDemo from "./DomManipulationDemo";

const HeavyComponent = dynamic(() => import("@/app/components/HeavyComponent"));
// Update the import path below to the correct location of LazyLoadDemo
const LazyComponent = dynamic(() => import("@/app/components/LazyLoadDemo"));

export default function LazyVsHeavy() {
  const [tab, setTab] = useState<"heavy" | "lazy">("heavy");
  const codeLazyHeavy = `
import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
`;
  const codeOptionalNullish = `import React from "react"; 
export default function OptionalNullishDemo() {
  const data = { name: "John", age: 30, address: null };        
  return (
    <div>
      <h2>Optional Chaining and Nullish Coalescing</h2>
      <p>Name: {data.name}</p>
      <p>Age: {data.age ?? "N/A"}</p>
      <p>Address: {data.address?.street ?? "No address provided"}</p>
    </div>
  );
}`;

  const codeInputs = `import { useRef, useState } from "react";

export default function ControlledVsUncontrolledDemo() {
  const [controlledValue, setControlledValue] = useState("");
  const uncontrolledRef = useRef(null);

  // Controlled input for validation
  // Uncontrolled input for performance
}`;

  const codeClosure = `
function makeCounter() {
  let count = 0;
  return function increment() {
    count++;
    console.log("Current count (inside closure):", count);
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
`;

  const codeEventLoop = `
function demoEventLoop() {
  console.log("Start");
  setTimeout(() => {
 console.log("setTimeout");
  }, 0);
  Promise.resolve().then(() => {
 console.log("Promise.then");
  });
  console.log("End");
}
demoEventLoop();
// Output:
// Start
// End
// Promise.then
// setTimeout
`;

  const codeMemoryLeak = `// Leaky version
function LeakyComponent() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Leaky interval running...");
    }, 1000);

    // ❌ Memory leak: no cleanup!
    // return () => clearInterval(interval);
  }, []);

  return <div>LeakyComponent is mounted.</div>;
}

// Optimized version
function FixedComponent() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Fixed interval running...");
    }, 1000);

    // ✅ Proper cleanup to prevent memory leak
    return () => clearInterval(interval);
  }, []);

  return <div>FixedComponent is mounted.</div>;
}
`;
  const codeDomManipulation = `
import { useRef } from "react";

export default function DomManipulationDemo() {
  const boxRef = useRef(null);

  const handleChangeColor = () => {
    if (boxRef.current) {
      // Direct DOM manipulation (not recommended in React, but sometimes needed)
      boxRef.current.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  };

  return (
    <div>
      <div ref={boxRef} style={{ width: 100, height: 100, background: "blue" }}>
        Box
      </div>
      <button onClick={handleChangeColor}>
        Change Box Color (via DOM)
      </button>
    </div>
  );
}
`;

  return (
    <main className="p-4">
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            tab === "heavy" ? "bg-blue-600 text-white" : "bg-gray-600"
          }`}
          onClick={() => setTab("heavy")}
        >
          Heavy Rendering
        </button>
        <button
          className={`px-4 py-2 rounded ${
            tab === "lazy" ? "bg-green-600 text-white" : "bg-gray-600"
          }`}
          onClick={() => setTab("lazy")}
        >
          Lazy Loading
        </button>
      </div>
      {tab === "heavy" && <HeavyComponent />}
      {tab === "lazy" && <LazyComponent />}
      <section>
        <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
        <CodePreview code={codeLazyHeavy} language="tsx" />
      </section>
      <OptionalNullishDemo />
      <section>
        <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
        <CodePreview code={codeOptionalNullish} language="tsx" />
      </section>
      <ControlledVsUncontrolledDemo />
      <section>
        <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
        <CodePreview code={codeInputs} language="tsx" />
      </section>
      <ClosureDemo />
      <section>
        <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
        <CodePreview code={codeClosure} language="tsx" />
      </section>
      <EventLoopDemo />
      <section>
        <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
        <CodePreview code={codeEventLoop} language="tsx" />
      </section>
      <MemoryLeakDemo />
      <section>
        <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
        <CodePreview code={codeMemoryLeak} language="tsx" />
      </section>
      <DomManipulationDemo />
      <section>
        <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
        <CodePreview code={codeDomManipulation} language="tsx" />
      </section>
      <ArticleListing articles={articles} />
    </main>
  );
}
