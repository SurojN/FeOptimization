import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/app/components/HeavyComponent"));

export default function LazyLoadDemo() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Lazy Load Demo</h1>
      <HeavyComponent />
    </main>
  );
}
