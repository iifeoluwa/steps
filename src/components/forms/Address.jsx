import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Address = (props) => {
    const {required} = props;

    return (
        <div className='formContainer'>
            <div>
                <label>Address</label>
                <Field
                    name="address"
                    component="input"
                    type="text"
                    validate={required}
                />
                <ErrorMessage
                    name="address"
                    component="div"
                    className="field-error"
                />
            </div>
            <div>
                <label>Secondary Address</label>
                <Field
                name="address2"
                component="input"
                type="text"
                />
                <ErrorMessage
                name="address2"
                component="div"
                className="field-error"
                />
            </div>
            <div>
                <label>Zip Code</label>
                <Field
                name="zip"
                component="input"
                type="text"
                validate={required}
                />
                <ErrorMessage
                name="zip"
                component="div"
                className="field-error"
                />
            </div>
            <div>
                <label>City</label>
                <Field
                name="city"
                component="input"
                type="text"
                validate={required}
                />
                <ErrorMessage
                name="city"
                component="div"
                className="field-error"
                />
            </div>
            <div>
                <label>State</label>
                <Field
                name="state"
                component="input"
                type="text"
                validate={required}
                />
                <ErrorMessage
                name="state"
                component="div"
                className="field-error"
                />
            </div>

        </div>
    )
}

export default Address;