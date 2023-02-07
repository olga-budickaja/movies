import { Form } from "react-final-form";
import { useQuery } from "@apollo/client";
import { GENRES_QUERY } from "./queries";
import { Box } from "@mui/material";
import { Genres } from "./components";

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
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 3}}>
                        <Box sx={{display: 'flex'}}>
                            <Genres data={data} />
                        </Box>
                    </Box>
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                    </button>
                </form>
            )}
        />
    );
};

export default Filters;