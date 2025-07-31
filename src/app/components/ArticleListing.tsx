import Image from "next/image";
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
            <Image
              src={article.image}
              alt={article.title}
              width={500}
              height={300}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleListing;
