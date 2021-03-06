import React from "react";
import { Formik } from 'formik';
import { StepTracker } from ".";
import { Button, Icon } from 'semantic-ui-react'


export default class Wizard extends React.Component {
    static Step = ({ children }) => children

    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            values: props.initialValues
        };
    }

    /**
     * Handle transition to next step in form
     */
    next = values => {
        this.setState(state => ({
            step: Math.min(state.step + 1, this.props.children.length - 1),
            values
        }));
    };

    /**
     * Handle transition to previous step in form
     */
    prev = () => {
        this.setState(state => ({
            step: Math.max(state.step - 1, 0)
        }));
    };

    validate = values => {
        const currentStep = React.Children.toArray(this.props.children)[this.state.step];
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
        const {children, shipments} = this.props;
        const { step, values } = this.state;
        const activeStep = React.Children.toArray(children)[step];

        return (
            <Formik 
                initialValues={values}
                validate={this.validate}
                onSubmit={this.handleSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <StepTracker step={step} shipments={shipments}/>
                        { activeStep }
                        <div className="nav space-up">
                            {step > 0 && (
                                <Button onClick={this.prev} animated>
                                    <Button.Content visible>Previous</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow left' />
                                    </Button.Content>
                                </Button>
                            )}

                            <Button type="submit" animated>
                                <Button.Content visible>Next</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                            </Button>
                        </div>
                    </form>   
                )}
            />
        )
    }
} 