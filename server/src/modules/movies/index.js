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

module.exports = {
    getPopular,
    getDetails
}