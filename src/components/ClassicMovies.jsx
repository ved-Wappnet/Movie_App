// import { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import searchMovies from "../services/Path";
// import Spinner from "./Spinner";
// import { HeartIcon } from "@heroicons/react/solid";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleFavorite } from "../Movie-Reducer/favoriteSlice";
// import { ThemeContext } from "../Context/ThemeContext";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { HeartIcon } from "@heroicons/react/solid";
import { Toast } from "primereact/toast";

import useClassicMovie from "../customhooks/useClassicMovie";
import Outer from "./layouts/Outer";

const ClassicMovies = () => {
  const {
    movies,
    loading,
    error,
    themeMode,
    favorites,
    handleToggleFavorite,
    toast,
  } = useClassicMovie("iron-man");
  const dispatch = useDispatch();

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

  return (
    <Outer>
      <div
        className={` ${
          themeMode === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-300 text-black"
        }`}
      >
        <div className="container  mx-auto px-4 py-8 pt-20">
          <h1 className="text-2xl font-bold mb-4 text-center">Action Movies</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies?.Search?.map((movie) => (
              <div
                key={movie.imdbID}
                className="bg-white shadow-lg rounded-lg  max-w-sm border p-4 w-72  m-4 flex flex-col overflow-hidden"
              >
                <Link
                  to={`/movie/${movie.imdbID}`}
                  className={`text-lg font-bold mb-2 ${
                    themeMode === "dark" ? "text-black" : "text-black"
                  }`}
                >
                  {movie.Title}
                </Link>
                <Link to={`/movie/${movie.imdbID}`}>
                  <img src={movie.Poster} style={{ height: "400px" }} alt="" />
                </Link>
                <button
                  onClick={() => dispatch(handleToggleFavorite(movie))}
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
        </div>
        <Toast ref={toast} />
      </div>
    </Outer>
  );
};

export default ClassicMovies;
