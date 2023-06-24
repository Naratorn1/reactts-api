import axios from "axios";

export const getAll = async () => {
  const { data } = await axios
    .create({
      baseURL: `https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6`,
    })
    .get("");
  return data.results;
};

export const getMovie = async (search: string) => {
  const { data } = await axios
    .create({
      baseURL: `https://api.themoviedb.org/3/search/movie?api_key=229a6a0f891df5bf1176a4668af885c6&language=en-US&query=${search}&page=1&include_adult=false`,
    })
    .get("");
  return data.results;
};
