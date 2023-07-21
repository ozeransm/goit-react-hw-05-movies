import axios from 'axios';

const API_KEY = '057e36269a3ddafbb398756699f3ba82';
const BASE_URL = 'https://api.themoviedb.org/3/';



export const GetData = (endpoint='',query='')=>
{
    // console.log(`${BASE_URL}${endpoint}?api_key=${API_KEY}${query==='' ? query : `&query=${query}`}`);
    return axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}${query==='' ? query : `&query=${query}`}`);
}

