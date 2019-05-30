import React from "react";
import { Formik, Field, ErrorMessage } from 'formik';


export default class Wizard extends React.Component {
    static Step = ({ children }) => children;

    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            values: props.initialValues
        };
    }

    next = values => {
        this.setState(state => ({
            step: Math.min(state.step + 1, this.props.children.length - 1),
            values
        }))
    }

    prev = values => {
        this.setState(state => ({
            step: Math.max(state.step - 1, 0),
            values
        }))
    }
    render() {
        const {children} = this.props;
        const { step, values } = this.state;
        const activeStep = React.Children.toArray(children)[step];

        return (
            <Formik 
                initialValues={values}
                render={({ values }) => (
                    <form>
                        { activeStep }
                    </form>   
                )}
            />
        )
    }
} 