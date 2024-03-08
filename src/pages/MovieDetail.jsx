import { useState, useEffect, useContext } from "react";
// import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ApiClient from "../utils/ApiClient";
import Spinner from "../components/Spinner";
import { ThemeContext } from "../Context/ThemeContext";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { themeMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await ApiClient.get("/", { params: { i: imdbID } });
        setMovieDetail(response.data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchMovieDetail();
  }, [imdbID]);

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

  if (!movieDetail) {
    return <div>No movie found.</div>;
  }

  return (
    <div
      className={`${
        themeMode === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      <section className="text-gray-600 body-font pt-10">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              src={movieDetail.Poster}
              alt={movieDetail.Title}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1
              className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${
                themeMode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {movieDetail.Title}
            </h1>
            <p
              className={`text-sm mt-2 font-bold mb-4 ${
                themeMode === "dark" ? "text-white" : "text-gray-500"
              }`}
            >
              Year: {movieDetail.Year}
            </p>
            <p
              className={`text-sm mt-2 font-bold mb-4 ${
                themeMode === "dark" ? "text-white" : "text-gray-500"
              }`}
            >
              Actors : {movieDetail.Actors}
            </p>
            <p
              className={`text-sm mt-2 font-bold mb-4 ${
                themeMode === "dark" ? "text-white" : "text-gray-500"
              }`}
            >
              Genre : {movieDetail.Genre}
            </p>
            <p
              className={`text-sm mt-2 font-bold mb-4 ${
                themeMode === "dark" ? "text-white" : "text-gray-500"
              }`}
            >
              Country : {movieDetail.Country}
            </p>
            <p
              className={`text-sm mt-2 font-bold mb-4 ${
                themeMode === "dark" ? "text-white" : "text-gray-500"
              }`}
            >
              BoxOffice : {movieDetail.BoxOffice}
            </p>
            <p
              className={`text-sm mt-2 font-bold mb-4 ${
                themeMode === "dark" ? "text-white" : "text-gray-500"
              }`}
            >
              Awards : {movieDetail.Awards}
            </p>
            <p
              className={`text-sm mt-2 font-bold mb-6 ${
                themeMode === "dark" ? "text-white" : "text-gray-500"
              }`}
            >
              Plot : {movieDetail.Plot}
            </p>
            <button
              className="bg-red-500 text-white px-3 py-2 rounded-xl font-medium"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
