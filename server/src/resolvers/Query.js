const { getPopular, getDetails } = require('../modules/movies');
const { Movie } = require('../modules/movies/entities/Movie');
async function movies(parent, args, { locale }) {
    const data = await getPopular(args.page, locale);

    return data;
}

async function moviesByIds(parent, { ids }, { locale }) {
    const req = await ids.map((id) => getDetails(id, locale));

    const data = await Promise.all(req)

    const movies = data.map(({ data }) => new Movie(data))

    return movies
}

module.exports = {
    movies,
    moviesByIds
}