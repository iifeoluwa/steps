import React from "react";
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

    render() {
        return (
            <div className='container'>
                <Wizard initialValues = {this.initialValues}>
                    <Wizard.Step>
                        <Name required={this.required}/>
                    </Wizard.Step>
                    <Wizard.Step>
                        <Phone />
                    </Wizard.Step>
                    <Wizard.Step>
                        <Address />
                    </Wizard.Step>
                </Wizard>
            </div>
        )
    }
} 