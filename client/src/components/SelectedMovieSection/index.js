import { SelectedMovies, SelectText } from "../../pages/Home/css";
import { CardContainer, SelectContainer, SelectImg } from "../../pages/Home/css.styled";
import img from "../../assets/favorite-movies-1.gif";
import SelectedMoviesForm from "../SelectedMoviesForm";
import { MovieCardSelected, ConfirmModal } from "../../components";
import { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import { AppContext } from "../../context/appContext";

const SelectedMovieSection = ({ selectedMovies, deleteMovie }) => {
    const [listName, setListName] = useState('');
    const [link, setLink] = useState('');
    const { state } = useContext(AppContext);
    const onSubmit = ({ listName }) => {
        const ids = selectedMovies.map(({id}) => id)
        const link = `${window.location.host}/recommend?title=${listName}&locale=${state.locale}&ids=${ids.join()}`

        setLink(link);
        setListName(listName);
    }
    const onCloseConfirmModal = () => {
        setLink('');
    };

    return (
        <SelectedMovies elevation={3}>
            {!selectedMovies.length && (
                <SelectContainer>
                    <SelectImg src={img} alt="favorite-movies"/>
                    <SelectText variant="h6">
                        <FormattedMessage id="selected.recommend"/>
                    </SelectText>
                </SelectContainer>
            )}
            {selectedMovies.length > 0 && (
                <SelectedMoviesForm onSubmit={onSubmit}/>
            )}
            <CardContainer>
                {selectedMovies.map((movie) => (
                    <MovieCardSelected
                        key={movie.id}
                        movie={movie}
                        onCardDelete={deleteMovie}
                    />
                ))}
            </CardContainer>
            <ConfirmModal
                url={link.split('/').pop()}
                urlShare={link}
                title={listName}
                open={!!link}
                onClose={onCloseConfirmModal}
            />
        </SelectedMovies>
    );
};

export default SelectedMovieSection;