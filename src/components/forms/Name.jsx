import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Name = (props) => {
    
    return (
        <div className='formContainer'>
            <div>
                <label>Name</label>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    required
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
                required
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
                required
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
                required
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