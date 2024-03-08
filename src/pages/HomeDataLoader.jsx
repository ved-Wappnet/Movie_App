import searchMovies from "../services/Path";

const HomeDataLoader = async () => {
  try {
    const response = await searchMovies("Spider-man");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default HomeDataLoader;
