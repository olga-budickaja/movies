import { Field } from 'react-final-form'
import { FormattedMessage } from "react-intl";
import TextField from '@mui/material/TextField';
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material";

export const YearSort = () => {
    return (
        <Field
            name="year"
            render={({ input }) => (
                <ThemeProvider theme={theme}>
                    <TextField
                           id="outlined-basic"
                           label={<FormattedMessage id="filters.year"></FormattedMessage>}
                           sx={{ m: 1, maxWidth: 120 }}
                           variant="outlined"
                           type="number"
                           minvalue={1800}
                           maxvalue={2030}
                           {...input}
                    />
                </ThemeProvider>

            )}
        />
    )
}