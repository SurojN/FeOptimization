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
import {
  codeClosure,
  codeDomManipulation,
  codeEventLoop,
  codeInputs,
  codeLazyHeavy,
  codeMemoryLeak,
  codeOptionalNullish,
  descClosure,
  descDomManipulation,
  descEventLoop,
  descInputs,
  descLazyHeavy,
  descMemoryLeak,
  descOptionalNullish,
} from "../data/demoCodeSnippets";

const HeavyComponent = dynamic(() => import("@/app/components/HeavyComponent"));
const LazyComponent = dynamic(() => import("@/app/components/LazyLoadDemo"));

export default function LazyVsHeavy() {
  const [tab, setTab] = useState<"heavy" | "lazy">("heavy");
  const [mainTab, setMainTab] = useState<"code" | "article">("code");
  return (
    <main className="p-4">
      <div className="flex w-full mb-8 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
        <button
          className={`flex-1 px-4 py-3 transition-all font-semibold text-lg
        ${
          mainTab === "code"
            ? "text-blue-400 bg-white border-b-4 border-blue-400"
            : "text-gray-600 hover:bg-gray-200 border-b-4 border-transparent"
        }`}
          onClick={() => setMainTab("code")}
        >
          Codes
        </button>
        <button
          className={`flex-1 px-4 py-3 transition-all font-semibold text-lg
        ${
          mainTab === "article"
            ? "text-blue-400 bg-white border-b-4 border-blue-400"
            : "text-gray-600 hover:bg-gray-200 border-b-4 border-transparent"
        }`}
          onClick={() => setMainTab("article")}
        >
          Articles
        </button>
      </div>
      {mainTab === "code" && (
        <section>
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
            <CodePreview
              code={codeLazyHeavy}
              title={descLazyHeavy.title}
              description={descLazyHeavy.description}
              language="tsx"
            />
          </section>
          <OptionalNullishDemo />
          <section>
            <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
            <CodePreview
              code={codeOptionalNullish}
              title={descOptionalNullish.title}
              description={descOptionalNullish.description}
              language="tsx"
            />
          </section>
          <ControlledVsUncontrolledDemo />
          <section>
            <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
            <CodePreview
              code={codeInputs}
              title={descInputs.title}
              description={descInputs.description}
              language="tsx"
            />
          </section>
          <ClosureDemo />
          <section>
            <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
            <CodePreview
              code={codeClosure}
              title={descClosure.title}
              description={descClosure.description}
              language="tsx"
            />
          </section>
          <EventLoopDemo />
          <section>
            <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
            <CodePreview
              code={codeEventLoop}
              title={descEventLoop.title}
              description={descEventLoop.description}
              language="tsx"
            />
          </section>
          <MemoryLeakDemo />
          <section>
            <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
            <CodePreview
              code={codeMemoryLeak}
              title={descMemoryLeak.title}
              description={descMemoryLeak.description}
              language="tsx"
            />
          </section>
          <DomManipulationDemo />
          <section>
            <h2 className="text-2xl font-semibold mb-2">📄 Code Preview</h2>
            <CodePreview
              code={codeDomManipulation}
              title={descDomManipulation.title}
              description={descDomManipulation.description}
              language="tsx"
            />
          </section>
        </section>
      )}
      {mainTab === "article" && (
        <section className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">Articles</h2>
          <ArticleListing articles={articles} />
        </section>
      )}
    </main>
  );
}
