const { IMAGE_BASE_PATH } = require('../../../config');
const { format } = require('date-fns');
class Movie {
    constructor(movie) {
        this.movie = movie;
        this.id = movie.id;
        this.title = movie.title;
        this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
        this.overview = movie.overview;
        this.originalTitle = movie.original_title;
        this.originalLanguage = movie.original_language;
        this.popularity = movie.popularity;
        this.voteCount = movie.vote_count;
        this.video = movie.video;
        this.voteAverage = movie.vote_average;
        this.adult = movie.adult;
        this.bgPath = `${IMAGE_BASE_PATH}${movie.backdrop_path}`;
        this.runtime = movie.runtime;
        this.revenue = movie.revenue;
        this.status = movie.status;
        this.tagline = movie.tagline;
    }
    releaseDate(params) {
        try {
            const date = params.format
                ? format(new Date(this.movie.release_date), params.format)
                : this.movie.release_date;

            return date
        } catch (e) {
            console.error(e);
            return this.movie.release_date;
        }

    }
}

module.exports = {
    Movie
}
