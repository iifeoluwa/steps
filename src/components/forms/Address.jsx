import React from 'react';
import { Field, ErrorMessage } from 'formik';
import MaskedInput from "react-text-mask";

const Address = (props) => {
    const zipMaskRule = [/\d/, /\d/, /\d/, /\d/, /\d/];

    return (
        <div className='formContainer'>
            <div>
                <label>Address</label>
                <Field
                    name="address"
                    component="input"
                    type="text"
                    required
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
                <Field name="zip" render={({ field }) => {
                    return <MaskedInput
                    {...field}
                    mask={zipMaskRule}
                    placeholder="94303"
                    name="zip"
                    type="text"
                    required />
                }}
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
                required
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
                required
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