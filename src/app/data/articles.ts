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
    image: "image1.jpg",
    code: 'console.log("Hello World!");',
  },
  {
    title: "Article 2",
    slug: "article-2",
    summary: "Summary 2",
    image: "image2.jpg",
    code: 'console.log("Hello World!");',
  },
];

export default articles;
