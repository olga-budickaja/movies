import { Field, Form } from "react-final-form";

const Filters = ({onSubmit}) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                    </button>
                </form>
            )}
        />
    );
};

export default Filters;