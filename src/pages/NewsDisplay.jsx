import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import Outer from "../components/layouts/Outer";

const NewsDisplay = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const apiKey = "481c9083d20b4481a31637854804dfb9";
    const apiUrl =
      "https://newsapi.org/v2/everything?q=apple&from=2024-02-22&to=2024-02-22&sortBy=popularity";

    const fetchArticles = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            apiKey: apiKey,
            page: page,
          },
        });
        setArticles((prevArticles) => [
          ...prevArticles,
          ...response.data.articles,
        ]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [page]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
      setHasMore(false);
    }, 1500);
  };

  return (
    <Outer>
      <div className="container mx-auto px-4 py-8 mt-14 bg-gray-300">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Latest Business News
        </h1>
        {loading ? (
          <p className="flex justify-center items-center h-full">
            {<Spinner />}
          </p>
        ) : (
          <>
            {error && <p>Error: {error}</p>}
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={true}
              loader={
                hasMore && (
                  <div className="flex justify-center items-center h-full">
                    <h4>
                      <Spinner />
                    </h4>
                  </div>
                )
              }
              className="loader"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm"
                  >
                    <img
                      src={
                        article.urlToImage ||
                        "https://i.insider.com/65b90dd643bb77284ba1a34d?width=1200&format=jpeg"
                      }
                      alt={article.title}
                      className="h-56 w-full object-cover object-center"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2 text-gray-900 textedit">
                        {article.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-4 textedit">
                        {article.description}
                      </p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </>
        )}
      </div>
    </Outer>
  );
};

export default NewsDisplay;
