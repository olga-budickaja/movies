import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { CardInfo, CardPrompt } from "./css";
import PropTypes from "prop-types";
import { AddCircle } from "@mui/icons-material";

const MovieCard = ({ movie, onCardSelect, isPreviewMode }) => {
    return (
        <>
            <Card
                sx={{ maxWidth: 250, position: "relative", height: "100%" }}
            >
                <CardMedia
                    sx={{ position: "relative" }}
                    component="img"
                    height="379"
                    image={movie.image}
                    alt={movie.title}
                />
                {!isPreviewMode && (
                    <CardPrompt onClick={() => onCardSelect(movie)}>
                        <IconButton>
                            <AddCircle sx={{ width: "40px", height: "auto" }}/>
                        </IconButton>
                    </CardPrompt>
                )}

                <CardContent>
                    <Box sx={{ marginBottom: "2.95em" }}>
                        <Typography variant="h6" gutterBottom sx={{ lineHeight: '1.2' }}>
                            {movie.title}
                        </Typography>
                    </Box>

                    <Typography sx={{ position: "absolute", bottom: "9px" }} variant="subtitle1" gutterBottom>
                        {movie.releaseDate}
                    </Typography>
                </CardContent>
            </Card>

        </>

    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string
    }).isRequired,
    onCardSelect: PropTypes.func,
    isPreviewMode: PropTypes.bool
}
export default MovieCard;