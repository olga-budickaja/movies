const axios = require('axios');
const dotenv = require('dotenv');
const { Genre } = require('./entities/Genre');
const { BASE_URL } = require('../../config');

dotenv.config();

const api_key = process.env.API_KEY;
const getGenre = async (language) => {
    const res = await axios.get(`${BASE_URL}genre/movie/list?api_key=${api_key}&language=${language}`);
    return res.data.genres.map((genre) => new Genre(genre));
}

module.exports = {
    getGenre
}