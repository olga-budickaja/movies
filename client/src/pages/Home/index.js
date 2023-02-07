import { Box, Grid, Pagination, Paper, Stack } from "@mui/material";
import { Filters, MovieCard } from "../../components";
import { useQuery } from '@apollo/client';
import { MOVIES_QUERY } from "./queries";
import { Link } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import SelectedMovieSection from "../../components/SelectedMovieSection";
import { useFilters } from "../../hooks/useFilters";

const Home = () => {
    const { filter, setFilter, setPage } = useFilters();
    const {loading, error, data } = useQuery(MOVIES_QUERY, { variables: {filter}});
    const { selectedMovies, selectMovie, deleteMovie } = useMovies();

    const paginationHandler = (event, page) => {
        setPage(page)
    }

    if (error) {
        return 'Error';
    }

    const onSubmit = (data) => {
        setFilter(data);
    }
    console.log(filter)

    const pagesCount = data?.movies?.totalPages < 500 ? data?.movies?.totalPages : 499;

    return (
        <Box sx={{ flexGrow: 1, marginTop: "24px" }}>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Filters onSubmit={onSubmit} initialValues={filter} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper elevation={3}>
                        <Box sx={{ flexGrow: 1, padding: 1 }}>
                            {loading && "Loading..."}
                            {data && (
                                <Grid container spacing={2}>
                                    {data.movies.results.map((movie) => (
                                        <Grid
                                            key={movie.id}
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            lg={3}
                                        >
                                            <MovieCard
                                                movie={movie}
                                                onCardSelect={selectMovie}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SelectedMovieSection deleteMovie={deleteMovie} selectedMovies={selectedMovies}/>
                </Grid>
            </Grid>
            {data && (
                <Box sx={{ padding: "100px 0 40px 0", display: "flex", justifyContent: "center" }}>
                    <Stack spacing={2}>
                        <Pagination
                            component={Link}
                            count={pagesCount}
                            page={filter.page}
                            // to={`/${filter.page}`}
                            onChange={paginationHandler}
                        />
                    </Stack>
                </Box>
            )}

        </Box>
    )
}

export default Home;