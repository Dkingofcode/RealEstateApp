import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '729f0bcfedmsh9d2f256f9f78b0dp1656f0jsn2b1d3639e9ac',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
   return data;

}

