import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite ,selectFavoritesCount } from "../Movie-Reducer/favoriteSlice";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext } from "react";
import Outer from "./layouts/Outer";

const FavoriteMovies = () => {
  const favorites = useSelector((state) => state.favorites);
  const favoritesCount = useSelector(selectFavoritesCount);
  const dispatch = useDispatch();
  const { themeMode } = useContext(ThemeContext);

  const handleToggleFavorite = (movie) => {
    dispatch(toggleFavorite(movie));
  };

  return (
    <Outer>
      <div
        className={`mt-20 ${
          themeMode === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-300 text-black"
        }`}
      >
        <h1 className="text-center text-3xl font-bold">Favorite Movies</h1>
        <div className="flex flex-wrap justify-center mt-10">
          {favorites.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-white shadow-lg rounded-lg max-w-sm border p-4 w-72 m-4 flex flex-col overflow-hidden"
            >
              <div
                className={`text-lg font-bold mb-2 textedit ${
                  themeMode === "dark" ? "text-black" : ""
                }`}
              >
                {movie.Title}
              </div>
              <img
                src={movie.Poster}
                style={{ height: "400px", maxWidth: "100%" }}
                alt={movie.Title}
              />
              <div
                className={`text-sm ${
                  themeMode === "dark" ? "text-black" : ""
                }`}
              >
                IMDb ID: {movie.imdbID}
              </div>
              {movie.dateTime && (
                <div
                  className={`text-sm mt-2 ${
                    themeMode === "dark" ? "text-black" : ""
                  }`}
                >
                  {movie.dateTime}
                </div>
              )}
              <button
                onClick={() => handleToggleFavorite(movie)}
                className="bg-red-500 text-white p-2 rounded w-20 mt-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p
            className={`text-lg ${
              themeMode === "dark" ? "text-white" : ""
            }`}
          >
            Favorites Count: {favoritesCount}
          </p>
        </div>
      </div>
    </Outer>
  );
};

export default FavoriteMovies;
