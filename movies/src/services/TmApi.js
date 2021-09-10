/**
 * API Service
 */

 import axios from 'axios';

 const baseUrl = "https://api.themoviedb.org/3/";
 
 // returns a promise
 export const get = async (endpoint) => {
   let respons = await axios.get(baseUrl + endpoint + "/");
   return respons;
 };
 
 export const getEndPoint = async (endpoint) => {
   const data = await get(endpoint);
   return data.data;
 };