import React, { useState, useMemo } from "react";

export default function MemoizationDemo() {
  const [count, setCount] = useState(0);
  const memoizedValue = useMemo(() => count * 2, [count]);
  return (
    <div>
      <div>Memoized Value: {memoizedValue}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
