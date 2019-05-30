import React from 'react';
import { Field, ErrorMessage } from 'formik';
import MaskedInput from "react-text-mask";

const getDate = () => new Date().toJSON().slice(0,10);

const Phone = (props) => {
    const phoneMaskRule = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

    return (
        <div className='formContainer'>
            <div>
                <label>Date of Birth</label>
                <Field
                    name="dob"
                    component="input"
                    type="date"
                    placeholder="mm/dd/yyyy"
                    max={getDate()}
                    required
                />
                <ErrorMessage
                    name="dob"
                    component="div"
                    className="field-error"
                />
            </div>
            <div>
                <label>Phone</label>
                <Field name="phone" render={({ field }) => {
                    return <MaskedInput
                    {...field}
                    mask={phoneMaskRule}
                    placeholder="+1 (555) 495-3947"
                    name="phone"
                    type="tel"
                    required />
                }}
                />
                <ErrorMessage
                    name="phone"
                    component="div"
                    className="field-error"
                />
            </div>
            <div>
                <label>Gender</label>
                <Field name="gender" component="select" required>
                    <option value="">What do you identify as?</option>
                    <option value="none">Prefer not to say</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
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