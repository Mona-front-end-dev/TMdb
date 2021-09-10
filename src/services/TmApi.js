/**
 * The TMDB API Service
 * https://api.themoviedb.org/
 */

 import axios from 'axios';

 const baseUrl = "https://api.themoviedb.org/3/";
 
 // returns a promise
 export const get = async (endpoint) => {
   let respons = await axios.get(baseUrl + endpoint);
   return respons;
 };
 
 //create Endpoint to get latest released movies
 export const getLatestReleased = async () => {
   const endpoint = 'discover/movie?api_key=e11ef120fb831c1ff10324b71ce6c686&language=en-US&page=1&region=US&sort_by=release_date.desc&release_date.lte=2021-09-08'; 
   const data = await get(endpoint);
   return data.data;
 };

 //create Endpoint to get the most popular movies
 export const getMostPopular = async () => {
  const endpoint = 'discover/movie?api_key=e11ef120fb831c1ff10324b71ce6c686&language=en-US&page=1&region=US&primary_release_date.lte=2021-09-08'; 
  const data = await get(endpoint);
  return data.data;
};

//create Endpoint to get top-listed movies
export const getTopListed = async () => {
  const endpoint = 'movie/top_rated?api_key=e11ef120fb831c1ff10324b71ce6c686&language=en-US&page=1&region=US&sort_by=vote-avarage.desc'; 
  const data = await get(endpoint);
  return data.data;
};

 

