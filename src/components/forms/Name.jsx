import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Name = (props) => {
    const {required, confirmPassword} = props;

    return (
        <div className='formContainer'>
            <div>
                <label>Name</label>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    validate={required}
                />
                <ErrorMessage
                    name="name"
                    component="div"
                    className="field-error"
                />
            </div>
            <div>
                <label>Email</label>
                <Field
                name="email"
                component="input"
                type="email"
                validate={required}
                />
                <ErrorMessage
                name="email"
                component="div"
                className="field-error"
                />
            </div>
            <div>
                <label>Password</label>
                <Field
                name="password"
                component="input"
                type="password"
                validate={required}
                />
                <ErrorMessage
                name="password"
                component="div"
                className="field-error"
                />
            </div>
            <div>
                <label>Confirm Password</label>
                <Field
                name="passwordConfirm"
                component="input"
                type="password"
                validate={confirmPassword}
                />
                <ErrorMessage
                name="passwordConfirm"
                component="div"
                className="field-error"
                />
            </div>
        </div>
    )
}

export default Name