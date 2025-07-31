import ArticleListing, {
  ArticleListingProps,
} from "@/app/components/ArticleListing";

const ArticlePage: React.FC<ArticleListingProps> = ({ articles }) => {
  return (
    <div>
      <h1>{articles[0].title}</h1>
      <p>{articles[0].summary}</p>
      <img src={articles[0].image} alt={articles[0].title} />
      <ArticleListing articles={articles} />
    </div>
  );
};

export default ArticlePage;
