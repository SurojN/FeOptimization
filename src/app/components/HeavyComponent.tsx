"use client";

import { useEffect, useState } from "react";

export default function HeavyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000); // update every second for demo purposes
    return () => clearInterval(interval);
  }, []);

  return <div className="text-6xl font-bold text-blue-600">{count}</div>;
}
