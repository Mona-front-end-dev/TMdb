/**
 * The TMDB API Service
 * https://api.themoviedb.org/
 */

import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const staticQueries = 'api_key=e11ef120fb831c1ff10324b71ce6c686&language=en-US&region=US'
// axios.defaults.baseUrl = 'https://api.themoviedb.org/3/'

// returns a promise
export const get = async (endpoint) => {
  let respons = await axios.get(baseUrl + endpoint);
  return respons;
};

//create Endpoint to get latest released movies
export const getLatestReleased = async () => {
  const endpoint =
    `discover/movie?${staticQueries}&page=1&sort_by=release_date.desc&release_date.lte=${getCurrentDateAsIso()}`;
  const data = await get(endpoint);
  return data.data;
};

//create Endpoint to get the most popular movies
export const getMostPopular = async () => {
  const endpoint =
    `discover/movie?${staticQueries}&page=1&primary_release_date.lte=${getCurrentDateAsIso()}`;
  const data = await get(endpoint);
  return data.data;
};

//create Endpoint to get top-listed movies
export const getTopListed = async () => {
  const endpoint =
    `movie/top_rated?${staticQueries}&page=1&sort_by=vote-avarage.desc`;
  const data = await get(endpoint);
  return data.data;
};

//create Endpoint to get genres
export const getGenres = async () => {
  const endpoint =
    `genre/movie/list?${staticQueries}`;
  const data = await get(endpoint);
  return data.data;
};

//create Endpoint to get movie details + its chatacters by movie id
export const getDetailsAndCharactersByMovieId = async (id) => {
  const endpoint =
    `movie/${id}?${staticQueries}&append_to_response=credits`
  const data = await get(endpoint);
  return data.data;
};

//create Endpoint to get person details by id
export const getPersonsDetailsByPersonId = async (id) => {
  const endpoint =
    `/person/${id}?${staticQueries}`
  const data = await get(endpoint);
  return data.data;
};

//create Endpoint to get person's movies by id
export const getPersonsMoviesByPersonId = async (id) => {
  const endpoint =
    `/person/${id}?${staticQueries}&append_to_response=credits`
  const data = await get(endpoint);
  return data.data;
};

//Return genre with pages
export const getMoviesByGenrePaginated = async (genreId, page) => {
  const endpoint =`discover/movie?${staticQueries}&primary_release_date.lte=${getCurrentDateAsIso()}&with_genres=${genreId}&page=${page}`;
  const data = await get(endpoint);
  console.log(getCurrentDateAsIso())
  return data.data;
};

const getCurrentDateAsIso = () => {
  let date = new Date();

  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
}
