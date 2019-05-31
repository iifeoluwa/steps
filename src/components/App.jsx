import React from "react";
import zxcvbn from "zxcvbn";
import { Address, Name, Phone, Wizard } from "./forms";
import { Container } from 'semantic-ui-react';

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
                errors.password = suggestions[1] ? suggestions[1] : suggestions[0];
            }
        }

        if (values.password && values.passwordConfirm) {
            if (values.password !== values.passwordConfirm) {
                errors.passwordConfirm = "Passwords do not match."
            }
        }

        return errors;
    }

    onSubmit = (values) => {
        this.props.history.push('/plan', {data: values})
    }

    render() {
        const { shipments } = this.props.location.state;
        
        return (
            <Container textAlign="center">
                <Wizard
                initialValues = {this.initialValues}
                onSubmit={this.onSubmit}
                shipments={shipments}
                >
                    <Wizard.Step  validate={this.validate} >
                        <Name />
                    </Wizard.Step>
                    <Wizard.Step>
                        <Phone />
                    </Wizard.Step>
                    {shipments && (
                        <Wizard.Step>
                            <Address />
                        </Wizard.Step>
                    )}
                </Wizard>
            </Container>
        )
    }
} 