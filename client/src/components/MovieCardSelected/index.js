import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { RemoveCircle } from "@mui/icons-material";
import { CardPrompt } from "./css";

const MovieCardSelected = ({ movie, onCardDelete }) => {
    return (
        <Card sx={{ display: 'flex', position: "relative" }}>
            <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={movie.image}
                alt={movie.title}
            />
            <CardPrompt onClick={() => onCardDelete(movie)}>
                <IconButton>
                    <RemoveCircle sx={{ width: "30px", height: "auto" }}/>
                </IconButton>
            </CardPrompt>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {movie.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {movie.releaseDate}
                    </Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                    {movie.genres?.length && (
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {movie.genres[0].name}
                        </Typography>
                    )}
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Length: {movie?.runtime}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
};

MovieCardSelected.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })),
        runtime: PropTypes.number
    }).isRequired,
    onCardDelete: PropTypes.func
}

export default MovieCardSelected;