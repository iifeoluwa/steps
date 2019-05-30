import React from 'react';
import { Field, ErrorMessage } from 'formik';

const getDate = () => new Date().toJSON().slice(0,10);

const Phone = (props) => {
    const {required} = props;

    return (
        <div className='formContainer'>
            <div>
                <label>Date of Birth</label>
                <Field
                    name="dob"
                    component="input"
                    type="date"
                    placeholder="1998-02-22"
                    max={getDate}
                    validate={required}
                />
                <ErrorMessage
                    name="dob"
                    component="div"
                    className="field-error"
                />
            </div>
            <div>
                <label>Phone</label>
                <Field
                name="phone"
                component="input"
                type="tel"
                validate={required}
                />
                <ErrorMessage
                name="phone"
                component="div"
                className="field-error"
                />
            </div>
            <div>
                <label>Gender</label>
                <Field name="gender" component="select">
                    <option value="">Select a Color</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="none">Prefer not to say</option>
                </Field>
                <ErrorMessage
                name="gender"
                component="div"
                className="field-error"
                />
            </div>
        </div>
    )
}

export default Phone