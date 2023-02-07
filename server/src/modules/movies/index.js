const axios = require('axios');
const dotenv = require('dotenv');
const { Movies } = require('./entities/Movies');
const { BASE_URL } = require('../../config');

dotenv.config();

const api_key = process.env.API_KEY;
const getPopular = async (page, language) => {
    const res = await axios.get(`${BASE_URL}movie/popular?api_key=${api_key}&language=${language}&page=${page}`);

    return new Movies(res.data);
}
const getDetails = (id, language) => {
    return axios.get(`${BASE_URL}movie/${id}?api_key=${api_key}&language=${language}`);
}
const discoverMovie = async(filter, language) => {
    const result = await axios.get(`${BASE_URL}discover/movie?api_key=${api_key}&language=${language}&page=${filter.page}&year=${filter.year}&sort_by=${filter.sortBy}.${filter.sortDirection}&include_adult=${filter.includeAdult}&primary_release_year=${filter.primaryReleaseYear}&with_genres=${filter.genre}`);

    return new Movies(result.data);
}

module.exports = {
    getPopular,
    getDetails,
    discoverMovie
}