import React from 'react'
import { withRouter } from 'react-router-dom'

const Shipment = withRouter(({ history }) => (
    <div>
        <h3>Are You Accepting Shipments?</h3>
        <button 
            type="button" 
            onClick={() => history.push('/profile', {shipments: true})}
            >
            Yes
        </button>
        <button 
            type="button" 
            onClick={() => history.push('/profile', {shipments: false})}
            >
            No
        </button>
    </div>
))

export default Shipment