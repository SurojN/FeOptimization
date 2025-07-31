import { blogs } from "@/app/data/blogs";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return <p>Not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="mt-2">{blog.content}</p>
    </div>
  );
}
