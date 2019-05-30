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
        const { page } = this.state;
        const isLastPage = page === React.Children.count(children) - 1;
        if (isLastPage) {
          return onSubmit(values, bag);
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
        const isLastStep = step === React.Children.count(children) - 1;

        return (
            <Formik 
                initialValues={values}
                validate={this.validate}
                onSubmit={this.handleSubmit}
                render={({ values, handleSubmit, isSubmitting, handleReset }) => (
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

                            {!isLastStep && <button type="submit" disabled={isSubmitting}>Next »</button>}
                        </div>
                    </form>   
                )}
            />
        )
    }
} 