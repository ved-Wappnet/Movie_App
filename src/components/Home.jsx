import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Toast } from "primereact/toast";
import { HeartIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Spinner from "./Spinner";
import searchMovies from "../services/Path";
import { toggleFavorite } from "../Movie-Reducer/favoriteSlice";
import { ThemeContext } from "../Context/ThemeContext";
import Outer from "./layouts/Outer";

// eslint-disable-next-line react/prop-types
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("Spider-man");
  const [suggestions, setSuggestions] = useState([]);

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const { themeMode } = useContext(ThemeContext);
  const toast = useRef(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await searchMovies(searchQuery);
      setMovies(response.data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await searchMovies(searchQuery);
        setMovies(response.data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleFavorite = (movie) => {
    const index = favorites.findIndex((fav) => fav.imdbID === movie.imdbID);
    if (index !== -1) {
      const removedMovie = favorites[index];
      dispatch(toggleFavorite(removedMovie));
      toast.current.show({
        severity: "warn",
        summary: "Removed from favorites",
        detail: removedMovie.Title,
        life: 3000,
      });
    } else {
      const now = moment().calendar();
      const movieWithTime = { ...movie, dateTime: now };
      dispatch(toggleFavorite(movieWithTime));
      toast.current.show({
        severity: "success",
        summary: "Added to favorites",
        detail: movie.Title,
        life: 3000,
      });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 pt-28 flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleChange = async (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    try {
      const response = await searchMovies(value);
      setSuggestions(response.data.Search.map((movie) => movie.Title));
      console.log(response.data.Search);
    } catch (error) {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
    handleSearch();
  };

  return (
    <Outer>
      <div
        className={`flex-grow ${
          themeMode === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-300 text-black"
        }`}
      >
        <div className="flex justify-center mb-4 mt-14">
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="p-2 mr-2 border mt-10"
            placeholder="Search movies..."
            style={{ color: themeMode === "dark" ? "black" : "" }}
          />
          <button
            onClick={handleSearch}
            className="bg-red-500 text-white p-2 rounded mt-10"
          >
            Search
          </button>
          {suggestions.length > 0 && (
            <ul className="absolute top-[20%] w-[18%] overflow-y-auto max-h-[150px] text-black bg-white border border-gray-300 rounded shadow-lg">
              {suggestions.map((suggestion, index) => (
                <li
                  className="px-6 py-2 cursor-pointer hover:bg-gray-200"
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center">Home Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies?.Search?.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-white shadow-lg rounded-lg  max-w-sm border p-4 w-72  m-4 flex flex-col overflow-hidden "
            >
              <Link
                to={`/movie/${movie.imdbID}`}
                className={`text-lg font-bold mb-2 textedit ${
                  themeMode === "dark" ? "text-black" : ""
                }`}
              >
                {movie.Title}
              </Link>
              <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} style={{ height: "400px" }} alt="" />
              </Link>
              <button
                onClick={() => handleToggleFavorite(movie)}
                className="favorite-icon"
                aria-label="Toggle favorite"
              >
                <HeartIcon
                  className={`h-6 w-6 ${
                    favorites?.findIndex(
                      (fav) => fav.imdbID === movie.imdbID
                    ) !== -1
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
        <Toast ref={toast} />
      </div>
    </Outer>
  );
};

export default Home;
