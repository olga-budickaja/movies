import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import { Form, Field } from 'react-final-form'
import { ErrorOutlined } from "@mui/icons-material";
import { ErrorText } from "./css";
import { FormattedMessage } from "react-intl";

const SelectedMoviesForm = ({ onSubmit }) => (
    <FormattedMessage id="selected.form.placeholder">
        {placeholder => (
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.listName) {
                        errors.listName = `${placeholder}`
                    }
                    return errors
                }}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Paper
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                        >
                            <Field
                                name="listName"
                                render={({ input, meta }) => (
                                    <>
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder={placeholder.toString()}
                                        inputProps={{ 'aria-label': `${placeholder}` }}
                                        {...input}
                                    />
                                        {meta.error && meta.touched &&
                                            <ErrorText variant="body2" color="error">
                                                <ErrorOutlined sx={{ width: "0.7em", height: 'auto', marginTop: '-2px' }} />
                                                {meta.error}
                                            </ErrorText>
                                        }
                                    </>
                                )}
                            />

                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <IconButton
                                type="submit"
                                color="primary"
                                sx={{ p: '10px' }}
                                aria-label="directions"
                            >
                                <CheckIcon />
                            </IconButton>
                        </Paper>
                    </form>
                )}
            />
        )}

    </FormattedMessage>

)

export default SelectedMoviesForm;