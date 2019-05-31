import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const Shipment = withRouter(({ history }) => (
    <Container textAlign="center">
        <Header as="h3" color='teal'>Are You Accepting Shipments?</Header>
        <Button 
            type="button" 
            primary
            onClick={() => history.push('/profile', {shipments: true})}
            >
            Yes
        </Button>
        <Button 
            type="button" 
            onClick={() => history.push('/profile', {shipments: false})}
            >
            No
        </Button>
    </Container>
))

export default Shipment