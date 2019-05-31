import React from "react";
import { Container, Button, Checkbox } from 'semantic-ui-react'

class Plan extends React.Component {
    state = { checked: [false, false, false] };
    toggle = (e) => {
        const newState = [false, false, false];
        newState[e.target.id] = true;
        this.setState({checked: newState});
    }
    
    render() {
        return (
            <Container textAlign="center">
                <h3>Choose your preferred Plan</h3>
                <div className='ui container center aligned'>
                    <div className="ui grid">
                        <div className="five wide column">
                            <div className="ui raised segments">
                                <div className="ui center aligned secondary segment">
                                <div className="ui statistic">
                                    <div className="value">
                                        $110
                                    </div>
                                    <div className="label">
                                        per year
                                    </div>
                                </div>
                                </div>
                                <div className="ui center aligned segment">
                                <p> Super cool feature </p>
                                </div>
                                <div className="ui center aligned segment">
                                <p> Another exciting stuff </p>
                                </div>
                                <div className="ui center aligned segment">
                                    <Checkbox label="Select"
                                    onClick={this.toggle}
                                    checked={this.state.checked[0]}
                                    id="0"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="five wide column">
                            <div className="ui raised segments">
                                <div className="ui center aligned secondary segment">
                                <div className="ui statistic">
                                    <div className="value">
                                        $10
                                    </div>
                                    <div className="label">
                                        per month
                                    </div>
                                </div>
                                </div>
                                <div className="ui center aligned segment">
                                <p> - A basic feature </p>
                                </div>
                                 <div className="ui center aligned segment">
                                <p> - Look. No additional CSS or anything </p>
                                </div>
                                <div className="ui center aligned segment">
                                    <Checkbox label="Select"
                                    onClick={this.toggle}
                                    checked={this.state.checked[1]}
                                    id="1"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="five wide column">
                            <div className="ui raised segments">
                                <div className="ui center aligned secondary segment">
                                <div className="ui statistic">
                                    <div className="value">
                                        $5
                                    </div>
                                    <div className="label">
                                        per month
                                    </div>
                                </div>
                                </div>
                                <div className="ui center aligned segment">
                                <p> - A basic feature </p>
                                </div>
                                <div className="ui center aligned segment">
                                <p> - Look. No additional CSS or anything </p>
                                </div>
                                <div className="ui center aligned segment">
                                    <Checkbox label="Select"
                                    onClick={this.toggle}
                                    checked={this.state.checked[2]}
                                    id="2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button>Done</Button>
            </Container>
        )
    }
    
}

export default Plan;