import { Field } from "react-final-form";
import { Autocomplete, styled, TextField, ThemeProvider } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { theme } from "../theme";

export const Genres = ({data}) => {

    return (
        <Field
            name="genre"
            render={({ input }) => (
                <FormattedMessage id="filters.genre">
                        {placeholder =>
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={data?.genres}
                            filterSelectedOptions
                            getOptionLabel={(option) => option?.name}
                        renderInput={(params) => (
                            <ThemeProvider theme={theme}>
                                <TextField
                                    {...params}
                                    sx={{ minWidth: '200px', maxWidth: '200px' }}
                                    label={placeholder.toString()}
                                    placeholder={placeholder.toString()}

                                />
                            </ThemeProvider>
                            )}
                        />
                    }
                </FormattedMessage>
            )}
        />
    );
};

