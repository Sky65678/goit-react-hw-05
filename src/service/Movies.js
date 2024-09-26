import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2U2NDBiMDVjYmFiYWJjMjAyYzI1NTE0YTY5MWQzNiIsIm5iZiI6MTcyNjU5MTM3NC4wMDU3MDEsInN1YiI6IjY2ZTlhZDYxNWMwNTE5YTIzNGQyZjRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nK9__g0dCJ4fkRmJ0jTrWV69iTNt2Q-QRrWwtUw5U8A",
  },
};

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const url = "/trending/movie/day?language=en-US";
  const response = await axios.get(url, options);

  return response.data.results;
};

export const fetchDetailsMovies = async (movieId) => {
  const url = `/movie/${movieId}`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchCastMovies = async (movieId) => {
  const url = `/movie/${movieId}/credits`;
  const response = await axios.get(url, options);

  return response.data.cast;
};

export const fetchReviewsMovies = async (movieId) => {
  const url = `/movie/${movieId}/reviews?&page=1`;
  const response = await axios.get(url, options);

  return response.data.results;
};

export const fetchSearchMovies = async (query) => {
  const url = `/search/movie?query=${query}&page=1`;
  const response = await axios.get(url, options);

  return response.data;
};
