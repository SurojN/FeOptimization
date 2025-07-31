export const optimizations = [
  {
    slug: "lazy-loading",
    title: "Lazy Loading Components",
    summary: "Use dynamic import to load heavy components only when needed.",
    code: `const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'));\n\nexport default function Demo() {\n  return <HeavyComponent />;\n}`,
    component: "LazyLoadDemo",
  },
  {
    slug: "memoization",
    title: "React Memoization",
    summary: "Optimize rendering with useMemo and React.memo.",
    code: `const MemoComponent = React.memo(({ count }) => <div>{count}</div>);`,
    component: "MemoizationDemo",
  },
];
