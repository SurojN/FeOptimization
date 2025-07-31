import CodePreview from "@/app/components/CodePreview";
import { optimizations } from "@/app/data/Optimizations";

export async function generateStaticParams() {
  return optimizations.map((opt) => ({ slug: opt.slug }));
}

export default function OptimizationPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic = optimizations.find((opt) => opt.slug === params.slug);
  if (!topic) return <div>Not found</div>;

  const DemoComponent =
    require(`@/app/components/demos/${topic.component}`).default;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">{topic.title}</h1>
      <p>{topic.summary}</p>

      <CodePreview code={topic.code} />
      <div className="border p-4 rounded-md">
        <DemoComponent />
      </div>
    </div>
  );
}
