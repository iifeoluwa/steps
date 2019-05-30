import React from "react";
import zxcvbn from "zxcvbn";
import { Address, Name, Phone, Wizard } from "./forms";

export default class App extends React.Component {
    initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        dob: '',
        phone: '',
        gender: '',
        address: '',
        address2: '',
        zip: '',
        city: '',
        state: '',
    }

    required = value => (value ? undefined : 'Required.');
    
    weightPassword = password => {
        return zxcvbn(password).feedback;
    }

    validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (values.password) {
            const suggestions = this.weightPassword(values.password).suggestions;
            
            if (suggestions[0]) {
                errors.password = suggestions[0];
            }
        }

        if (values.password && values.passwordConfirm) {
            if (values.password !== values.passwordConfirm) {
                errors.passwordConfirm = "Passwords do not match."
            }
        }

        return errors;
    }

    render() {
        return (
            <div className='container'>
                <Wizard initialValues = {this.initialValues}>
                    <Wizard.Step  validate={this.validate} >
                        <Name required={this.required}/>
                    </Wizard.Step>
                    <Wizard.Step>
                        <Phone required={this.required} />
                    </Wizard.Step>
                    <Wizard.Step>
                        <Address required={this.required} />
                    </Wizard.Step>
                </Wizard>
            </div>
        )
    }
} 