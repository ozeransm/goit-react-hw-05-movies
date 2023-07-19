import axios from 'axios';

const API_KEY = '057e36269a3ddafbb398756699f3ba82';
const BASE_URL = 'https://api.themoviedb.org/3/';



export const GetData = (query='')=>
{
    console.log(`${BASE_URL}${query}?api_key=${API_KEY}`);
    return axios.get(`${BASE_URL}${query}?api_key=${API_KEY}`);
}

