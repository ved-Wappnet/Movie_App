import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useContext, useRef } from "react";

import searchMovies from "../services/Path";
import { toggleFavorite } from "../Movie-Reducer/favoriteSlice";
import { ThemeContext } from "../Context/ThemeContext";

const useClassicMovie = (query) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const { themeMode } = useContext(ThemeContext);
  const toast = useRef(null);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await searchMovies(query);
        setMovies(response.data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchShows();
  }, [query]);

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

  return {movies,loading,error,themeMode,favorites,handleToggleFavorite,toast};
};

export default useClassicMovie;
