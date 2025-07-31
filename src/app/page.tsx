import dynamic from "next/dynamic";
import Demowork from "./components/Demowork";

// Dynamic import with no SSR for client-only component
export default function HomePage() {
  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        ⚡ Frontend Optimization in React & Next.js
      </h1>

      <p className="text-gray-600 mb-8">
        This blog demonstrates modern performance techniques. Each section
        includes theory and a live example.
      </p>

      <section className="mb-12">
        <Demowork />
      </section>

      {/* <ArticleListing articles={articles} /> */}
    </main>
  );
}
