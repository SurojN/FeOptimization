import ArticleListing from "@/app/components/ArticleListing";
import articles from "@/app/data/articles";

const HomePage = () => {
  return (
    <div>
      <h1>Article Listing</h1>
      <ArticleListing articles={articles} />
    </div>
  );
};

export default HomePage;
