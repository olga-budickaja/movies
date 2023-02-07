import { Form } from "react-final-form";
import { useQuery } from "@apollo/client";
import { GENRES_QUERY } from "./queries";
import { Box, Button, ThemeProvider } from "@mui/material";
import { ButtonFilters, Genres } from "./components";
import { theme } from "./components/theme";
import { FormattedMessage } from "react-intl";

const Filters = ({onSubmit, initialValues}) => {
    const { loading, error, data } = useQuery(GENRES_QUERY);

    if (loading) {
        return 'Loading...'
    }

    if (error) {
        return 'Error';
    }

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex'}}>
                            <Genres data={data} />
                        </Box>
                    </Box>
                    <ButtonFilters />
                </form>
            )}
        />
    );
};

export default Filters;