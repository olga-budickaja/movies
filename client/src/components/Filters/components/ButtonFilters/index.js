import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { FormattedMessage } from "react-intl";

export const ButtonFilters = () => {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" type="submit" size="large" sx={{ left: '8px', color: 'white' }}>
                <FormattedMessage id="filters.button" />
            </Button>
        </ThemeProvider>
    )
}