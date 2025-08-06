interface Article {
  title: string;
  slug: string;
  summary: string;
}

const articles: Article[] = [
  {
    title: "Avoid Heavy Rendering in React",
    slug: "heavy-rendering",
    summary:
      "Explore techniques to reduce unnecessary component renders in React using memoization, `React.memo`, `useMemo`, and virtualization. Learn how to improve app responsiveness by avoiding expensive re-renders, optimizing reconciliation, and splitting large UI blocks into smaller isolated components.",
  },
  {
    title: "Lazy Loading for Faster Load Time",
    slug: "lazy-loading",
    summary:
      'Learn how to defer loading of non-critical components, images, and routes in React applications using `React.lazy`, dynamic imports, and native HTML `loading="lazy"`. Improve initial page load performance, reduce bundle size, and optimize Core Web Vitals by prioritizing critical resources.',
  },
  {
    title: "Understanding Optional Chaining & Nullish Coalescing",
    slug: "optional-nullish",
    summary:
      "Master JavaScript’s `?.` and `??` operators to safely access deeply nested object properties and assign default values only when a variable is `null` or `undefined`. Avoid runtime errors and write cleaner, more resilient logic in your frontend applications.",
  },
  {
    title: "Controlled vs Uncontrolled Inputs",
    slug: "controlled-uncontrolled-inputs",
    summary:
      "Understand the key differences between controlled and uncontrolled form components in React. Learn when to use each approach, how to manage input state with `useState` or refs, and how the choice affects performance, validation, and form behavior in large applications.",
  },
  {
    title: "Closures in JavaScript Explained",
    slug: "closures",
    summary:
      "Gain a deep understanding of closures in JavaScript—how inner functions retain access to variables in their outer lexical scope. Learn practical use cases like data encapsulation, currying, and creating private variables, essential for writing advanced, reusable logic.",
  },
  {
    title: "How the JavaScript Event Loop Works",
    slug: "event-loop",
    summary:
      "Demystify JavaScript’s concurrency model by learning how the event loop, call stack, task queue, and microtask queue work together. Understand how asynchronous functions like `setTimeout`, `Promises`, and `async/await` are scheduled and executed under the hood.",
  },
  {
    title: "Preventing Memory Leaks in React",
    slug: "memory-leak",
    summary:
      "Identify common sources of memory leaks in React applications—such as uncleaned intervals, lingering subscriptions, and stale closures. Learn best practices to prevent them using cleanup functions in `useEffect`, proper dependency management, and avoiding global side effects.",
  },
  {
    title: "Efficient DOM Manipulation Techniques",
    slug: "dom-manipulation",
    summary:
      "Improve frontend performance by minimizing direct DOM operations. Learn how to use document fragments, requestAnimationFrame, batched updates, and React refs to avoid layout thrashing, reduce reflows, and create smoother user experiences.",
  },
];

export default articles;
