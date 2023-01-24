import axios from "axios";
import { Movie, ResponseFromApi } from "../types";
import React from "react";

export const getMovies = (
  searchTerm: string,
  page: number,
  setTotalResults: React.Dispatch<React.SetStateAction<number>>
) => {
  return fetchMovies(searchTerm, page, setTotalResults).then(
    mapFromApiToMovies
  );
};
const fetchMovies = async (
  searchTerm: string,
  page: number,
  setTotalResults: React.Dispatch<React.SetStateAction<number>>
): Promise<ResponseFromApi> => {
  const response = await axios.get(
    "http://www.omdbapi.com/?s=" +
      searchTerm +
      "&page=" +
      page +
      "&apikey=" +
      process.env.REACT_APP_API_KEY
  );
  console.log(response.data);
  setTotalResults(response.data.totalResults);
  return response.data.Search;
};
const mapFromApiToMovies = (apiResponse: ResponseFromApi): Array<Movie> => {
  return apiResponse.map((movieFromApi) => {
    let {
      Title: nombre,
      Year: anno,
      Type: tipo,
      Poster: imagen,
      imdbID,
      amount,
      price,
    } = movieFromApi;
    price = 10;
    return {
      nombre,
      anno,
      tipo,
      imagen,
      imdbID,
      amount,
      price,
    };
  });
};
