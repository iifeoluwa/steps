import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepTracker = (props) => (
  <Step.Group>
    <Step 
    active={props.step === 0}
    completed={props.step > 0}>
      <Icon name='user' />
      <Step.Content>
        <Step.Title>Profile</Step.Title>
        <Step.Description>Enter your profile details.</Step.Description>
      </Step.Content>
    </Step>

    <Step 
    active={props.step === 1}
    completed={props.step > 1}>
      <Icon name='address card' />
      <Step.Content>
        <Step.Title>Contact</Step.Title>
        <Step.Description>Bit more info and ways we can reach you</Step.Description>
      </Step.Content>
    </Step>

    {props.shipments && (
      <Step active={props.step === 2}>
        <Icon name='truck' />
        <Step.Content>
          <Step.Title>Shipping Details</Step.Title>
          <Step.Description>Where should we send your package?</Step.Description>
        </Step.Content>
      </Step>
    )}
    </Step.Group>
)

export default StepTracker;