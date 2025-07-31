import Link from "next/link";

interface Article {
  title: string;
  slug: string;
  summary: string;
  image: string;
  code: string;
}

export interface ArticleListingProps {
  articles: Article[];
}

const ArticleListing: React.FC<ArticleListingProps> = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.slug}>
          <Link href={`/articles/${article.slug}`}>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <img src={article.image} alt={article.title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleListing;
