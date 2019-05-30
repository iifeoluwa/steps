import React from "react";
import { Formik } from 'formik';


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
        }));
    };

    prev = () => {
        this.setState(state => ({
            step: Math.max(state.step - 1, 0)
        }));
    };

    validate = values => {
        const currentStep = React.Children.toArray(this.props.children)[
          this.state.step
        ];
        return currentStep.props.validate ? currentStep.props.validate(values) : {};
    };

    handleSubmit = (values, bag) => {
        const { children, onSubmit } = this.props;
        const { step } = this.state;
        const isLastStep = step === React.Children.count(children) - 1;
        const validNextStep = children[step + 1] !== false;

        if (isLastStep || !validNextStep) {
          return onSubmit(values);
        } else {
          bag.setTouched({});
          bag.setSubmitting(false);
          this.next(values);
        }
    };

    render() {
        const {children} = this.props;
        const { step, values } = this.state;
        const activeStep = React.Children.toArray(children)[step];

        return (
            <Formik 
                initialValues={values}
                validate={this.validate}
                onSubmit={this.handleSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        { activeStep }
                        <div className="buttons">
                            {step > 0 && (
                                <button
                                type="button"
                                className="secondary"
                                onClick={this.prev}
                                >
                                « Previous
                                </button>
                            )}

                            <button type="submit" >Next »</button>
                        </div>
                    </form>   
                )}
            />
        )
    }
} 