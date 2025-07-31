interface Article {
  title: string;
  slug: string;
  summary: string;
  image: string;
  code: string;
}

const articles: Article[] = [
  {
    title: "Article 1",
    slug: "article-1",
    summary: "Summary 1",
    image: "/images/image1.png",
    code: 'console.log("Hello World!");',
  },
  {
    title: "Article 2",
    slug: "article-2",
    summary: "Summary 2",
    image: "/images/image2.jpeg",
    code: 'console.log("Hello World!");',
  },
  {
    title: "Article 3",
    slug: "article-3",
    summary: "Summary 3",
    image: "/images/image3.jpeg",
    code: 'console.log("Hello World!");',
  },
];

export default articles;
