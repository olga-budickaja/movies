const { getDetails, discoverMovie } = require('../modules/movies');
const { Movie } = require('../modules/movies/entities/Movie');
const { getGenre } = require("../modules/genres");
async function movies(parent, args, { locale }) {
    const data = await discoverMovie(args.filter, locale);
    return data;
}

async function moviesByIds(parent, { ids }, { locale }) {
    const req = await ids.map((id) => getDetails(id, locale));

    const data = await Promise.all(req)

    const movies = data.map(({ data }) => new Movie(data))

    return movies
}
async function genres(_, {}, {locale}) {
    return await getGenre(locale)
}

module.exports = {
    movies,
    moviesByIds,
    genres
}