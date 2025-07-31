export const codeLazyHeavy = `
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

export const codeOptionalNullish = `
import React from "react"; 
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
}
`;

export const codeInputs = `
import { useRef, useState } from "react";

export default function ControlledVsUncontrolledDemo() {
  const [controlledValue, setControlledValue] = useState("");
  const uncontrolledRef = useRef(null);

  // Controlled input for validation
  // Uncontrolled input for performance
}
`;

export const codeClosure = `
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

export const codeEventLoop = `
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

export const codeMemoryLeak = `
// Leaky version
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

export const codeDomManipulation = `
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

export const descLazyHeavy = {
  title: "Heavy Rendering Example",
  description:
    "This component demonstrates a 'heavy' rendering scenario by incrementing a counter every second using setInterval. Such frequent updates can cause performance issues in larger apps. Techniques like memoization, throttling, or virtualization are often used to optimize components that update or render frequently.",
};

export const descOptionalNullish = {
  title: "Optional Chaining & Nullish Coalescing",
  description:
    "This example shows how to safely access deeply nested object properties using optional chaining (?.) and provide default values with nullish coalescing (??). This prevents runtime errors when accessing properties that may not exist and makes your code more robust.",
};

export const descInputs = {
  title: "Controlled vs Uncontrolled Inputs",
  description:
    "Controlled inputs use React state to manage their value, making them ideal for validation and dynamic forms. Uncontrolled inputs use a ref to access their value directly from the DOM, which can be more performant for simple or large forms where React state management is unnecessary.",
};

export const descClosure = {
  title: "Closure Example",
  description:
    "This code demonstrates JavaScript closures by creating a function (makeCounter) that returns another function (increment) which 'remembers' the count variable even after makeCounter has finished executing. Each call to increment increases the same count variable, showing how closures can maintain state across function calls.",
};

export const descEventLoop = {
  title: "Event Loop Example",
  description:
    "This snippet illustrates the JavaScript event loop and task queue. setTimeout callbacks are scheduled as macrotasks, while Promise.then callbacks are microtasks. Microtasks run before the next macrotask, so Promise.then logs before setTimeout, even though both are scheduled after synchronous code.",
};

export const descMemoryLeak = {
  title: "Memory Leak vs Optimized Cleanup",
  description:
    "The 'LeakyComponent' starts an interval but does not clean it up on unmount, causing a memory leak. The 'FixedComponent' properly cleans up the interval in the useEffect cleanup function, preventing leaks. Always clean up side effects in React to avoid memory and performance issues.",
};

export const descDomManipulation = {
  title: "Direct DOM Manipulation",
  description:
    "This example shows how to directly manipulate a DOM element's style using a ref. While React manages the DOM for you, direct manipulation can be useful for integrating with third-party libraries or handling cases not easily managed by React's declarative model. Use with caution to avoid conflicts with React's rendering.",
};
