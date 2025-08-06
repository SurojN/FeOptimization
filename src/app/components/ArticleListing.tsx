interface Article {
  title: string;
  slug: string;
  summary: string;
}

export interface ArticleListingProps {
  articles: Article[];
}

const ArticleListing: React.FC<ArticleListingProps> = ({ articles }) => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="bg-gray-300 rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-500 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-800 text-sm">{article.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleListing;
