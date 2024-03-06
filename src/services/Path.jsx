import ApiClient from "../utils/ApiClient";

const SEARCH_MOVIES_ENDPOINT = "/";

const searchMovies = (searchQuery) => {
  const params = { s: searchQuery };
  return ApiClient.get(SEARCH_MOVIES_ENDPOINT, { params });
};

export default searchMovies;
