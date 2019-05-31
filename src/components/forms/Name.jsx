import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Container, Input } from 'semantic-ui-react'

const Name = (props) => {
    
    return (
        <Container>
            <div>
                <label>Name</label>
                <Field name="name" render={({field}) => {
                    return <Input
                    {...field}
                    type="text"
                    required />
                }} 
                />
                <ErrorMessage
                    name="name"
                    component="div"
                    className="field-error"
                />
            </div>
            <div>
                <label>Email</label>
                <Field name="email" render={({field}) => {
                    return <Input
                    {...field}
                    type="email"
                    required />
                }} 
                />
                <ErrorMessage
                name="email"
                component="div"
                className="field-error"
                />
            </div>
            <div>
                <label>Password</label>
                <Field name="password" render={({field}) => {
                    return <Input
                    {...field}
                    type="password"
                    required />
                }} 
                />
                <ErrorMessage
                name="password"
                component="div"
                className="field-error"
                />
            </div>
            <div>
                <label>Confirm Password</label>
                <Field name="passwordConfirm" render={({field}) => {
                    return <Input
                    {...field}
                    type="password"
                    required />
                }} 
                />
                <ErrorMessage
                name="passwordConfirm"
                component="div"
                className="field-error"
                />
            </div>
        </Container>
    )
}

export default Name