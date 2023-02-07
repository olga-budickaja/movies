import { Form } from "react-final-form";
import { useQuery } from "@apollo/client";
import { GENRES_QUERY } from "./queries";
import { Box } from "@mui/material";
import { ButtonFilters, Genres, SortValues, YearSort } from "./components";


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
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Box sx={{display: 'flex'}}>
                            <Genres data={data} />
                        </Box>
                        <Box sx={{display: 'flex'}}>
                            <YearSort />
                        </Box>
                        <Box sx={{display: 'flex'}}>
                            <SortValues />
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <ButtonFilters />
                        </Box>
                    </Box>
                </form>
            )}
        />
    );
};

export default Filters;